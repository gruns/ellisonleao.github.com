---
layout: post
title: XNA e os canhões!
date: 2011-11-10 16:47
comments: true
external-url:
categories: [Game Dev]
published: true
---
__Portuguese Only!!__

Fala pessoal, começando uma série de posts sobre desenvolvimento de jogos, resolvi falar um pouco de um exercício interessante pra quem gostaria de fazer uma física básica usando vetores com XNA. O seguinte exercício mostra um canhão que atira uma bala na tela. Para explicar o exercício, uma rápida teoria:

## Os vetores

Vetores são representações de força que possuem uma intensidade e uma direção, chamadas de forças vetoriais. Um vetor consegue facilmente representar a direção de um vento, a força da gravidade, a direção de um chute de uma bola, etc. Para representar os vetores utilizamos setas direcionais como na figura abaixo:

![](http://img441.imageshack.us/img441/4726/vetoresequipolentes.png)

Para representar um vetor matematicamente, utilizamos 2 pontos no eixo cartesiano ( para uma representação em 2 dimensões ) e 3 pontos ( para uma representação em 3 dimensões ). Vale lembrar que um vetor não é um ponto matemático, apesar da estrutura dos 2 serem bem parecidas.

## A física

Com vetores, é possível também realizar operações matemáticas, como soma, subtração e multiplicação por um escalar. Não vou me aprofundar nessa parte, recomendo a leitura de um artigo bem interessante no site [Ponto V!](http://www.pontov.com.br/site/arquitetura/54-matematica-e-fisica/132-o-uso-de-vetores-nos-jogos), que fala bem mais aprofundado sobre o uso de vetores nos jogos. Abaixo, temos um simples exemplo de operações utilizando vetores:

![](http://www.physicsmynd.com/wp-content/uploads/2010/09/Vector-add1.png)

Para o nosso joguinho iremos realizar o cálculo de resultante de vetores para o lançamento do nosso canhão. Utilizaremos como forças a aceleração da gravidade, a velocidade da bola e o vento.

## O XNA

No jogo, utilizaremos o XNA para o desenvolvimento, um maravilhoso framework que nos permite ganhar bastante tempo, devido ao seu código já possuir implementado algumas bibliotecas matemáticas e gráficas. Todo código desenvolvido em XNA é escrito na linguagem C#, por isso , pra quem ainda não é familiarizado com a linguagem [recomendo uma leitura inicial aqui](http://msdn.microsoft.com/en-us/vcsharp/aa336809)

Basicamente, o XNA é composto de uma classe principal (Game) com seus principais métodos:

* __Initialize()__ - Atribui inicializações iniciais ao jogo ( Valores iniciais para algumas variáveis , etc..)
* __LoadContent()__ - Carrega todo o conteúdo do jogo na memória (Animações, Sprites, Fontes, Modelos 3D, etc..)
* __Draw()__ - Método que renderiza o conteúdo do jogo.
* __Update()__ - Atualiza o jogo e envia o resultado para a função Draw()

Neste artigo apenas irei mostrar as partes interessantes dos algoritmos do jogo, deixando um link no final, praqueles que quiserem baixar e testar nas suas máquinas.

## Movimentação e vetor offset

No jogo, o canhão poderá aumentar o diminuir o ângulo de lançamento para tentar atingir o alvo. Utilizaremos as setas de esquerda e direita para fazer esta movimentação.

Dentro do arquivo Cannon.cs , no método UpdateCannon() , temos o seguinte código

{% codeblock lang:csharp %}
if (keybState.IsKeyDown(Keys.Left))
   Angle -= 1;
if (keybState.IsKeyDown(Keys.Right))
   Angle += 1;
Angle = MathHelper.Clamp(Angle, -180, 0);
{% endcodeblock %}

É nessa parte que o código recalcula o novo ângulo de rotação do canhão. Como vocês podem ver, o código é extremamente simples, dado que o XNA já possui métodos que tratam os eventos de input de teclado (IsKeyDown ) , como também limita a rotação angular do canhão em um arco de no máximo 180 graus

{% codeblock lang:csharp %}
Angle = MathHelper.Clamp(Angle, -180, 0);
{% endcodeblock %}

Mas agora temos o seguinte problema: Após eu setar o ângulo de lançamento do canhão, precisamos fazer com que a bala saia pela ponta do mesmo. E como fazemos isso ? Simples, utilizamos o vetor de offset. 
Um vetor de offset, como o nome já dia, nada mais é do que um vetor que parte do centro até a ponta do canhão. 
A partir do momento que rotacionamos o ângulo dele, precisamos ,também, rotacionar o vetor offset , fazendo com que toda vez que vamos atirar a bala, ela saia do lugar correto. Para entender melhor um vetor de offset, temos um exemplo gráfico abaixo:

![](http://www.pontov.com.br/site//images/stories/artigos/6.png) 

Na imagem vimos 3 vetores: o amarelo representa a posição da nave e os 2 brancos são vetores offset que, nesse caso, representam o lugar por ondem as balas da nave saem.

O cálculo do nosso vetor de offset pode ser demonstrado no método getCannonOffset() , da classe Cannon, a seguir:

{% codeblock lang:csharp %}
public Vector2 getCannonOffset()
{
  float size = (Sprite.Width) - 20;
  Vector2 direction = new Vector2(((float)Math.Cos(getRotateAngle()) * size), (float)(Math.Sin(getRotateAngle()) * size));
  return Vector2.Add(Position, direction);
}
{% endcodeblock %}

Primeiro calculamos o tamanho que vai ter o nosso vetor (nesse caso a largura do canhão - 20 pixels , posição aproximada da "boca" dele) . Agora temos de calcular o nosso vetor offset. O cálculo é relativamente simples: Dado o tamanho do vetor e o ângulo, temos:

{% codeblock %}
X = co-seno(ângulo) * tamanho; 
Y = seno(ângulo) * tamanho;
{% endcodeblock %}

Lembrando que o ângulo tem de ser passado em Radianos ( o método getRotateAngle() transforma o ângulo dado em Radianos ).

Por final retornamos um vetor que é a soma da posição do canhão atual , com esse nosso novo vetor, nos dando assim, o nosso vetor offset.

## Movimento da Bala

Outra parte que vale a pena falar é como funciona o Update do jogo. No caso do lançamento da bala do canhão, temos de calcular para cara segundo, a sua nova posição com relação a força aplicada inicialmente.

O cálculo da nova posição da bala do canhão pode ser visto na classe CannonBall, método Update():

{% codeblock lang:csharp %}
public void Update(GameTime gameTime)
{
	float secs = (float)gameTime.ElapsedGameTime.TotalSeconds * 9;
	Vector2 accelSecs = (Wind / Mass + Gravity) * secs;
	Position += (Momentum + accelSecs) * secs;
	Momentum += accelSecs;
}
{% endcodeblock %}

Nesse método calculamos o chamado *deltatime* do jogo, que nos da informação do tempo corrido do jogo. Aqui, por motivos de balanceamento, multiplico o delta time por 9 para aumentar a velocidade com que a bomba se move. 
Depois, calculamos a resultante das forças que estão atuando na bola (neste caso vento, massa e gravidade). Após calcularmos nossa resultante, atualizamos a posição da bala, somando-a com o nosso vetor de posição.

## Conclusão

Mostrei aqui apenas algumas partes interessantes do exercício de canhões com vetores usando XNA. Aconselho a vocês baixarem o  código completo do jogo no meu [Github](http://github.com/ellisonleao/Xna-Cannon)

Então é isso pessoal, espero que vocês tenham entendido como é importante o uso de vetores nos jogos. Até o próximo post pessoal!
