---
title: "Creating a simple GameManager using Unity3d"
author: "Ellison Leão"
date: 2015-01-30T18:47:34.750Z
lastmod: 2019-09-24T01:03:51-03:00

description: ""

subtitle: "Learn to create a very basic GameManager to use in your Unity3d projects"

image: "/posts/2015-01-30_creating-a-simple-gamemanager-using-unity3d/images/1.jpeg" 
images:
 - "/posts/2015-01-30_creating-a-simple-gamemanager-using-unity3d/images/1.jpeg" 


aliases:
    - "/creating-a-simple-gamemanager-using-unity3d-f066fa1d4a2a"
---

![image](/posts/2015-01-30_creating-a-simple-gamemanager-using-unity3d/images/1.jpeg)



## Creating a simple GameManager using Unity3d

Originally posted in: [https://www.packtpub.com/books/content/creating-simple-gamemanager-using-unity3d](https://www.packtpub.com/books/content/creating-simple-gamemanager-using-unity3d)

Using the so called “Game Managers” in games is just as common as eating when making games. Probably every game made has their natural flow: _Start -&gt; Play -&gt; Pause -&gt; Die -&gt; Game Over , etc_. To handle these different game states, we need a proper manager who can provide a mechanism to know when to change to state “A” to state “B” during gameplay.

In this post we will show you how to create a simple game manager for Unity3D games. We will assume that you have some previous knowledge in Unity, but if you haven’t get the chance to know it, please go to the [Official Learn Unity page](http://unity3d.com/learn) and get started. We are going to create the scripts using the C# language.

### 1 — The Singleton Pattern

For the implementation, we will use the Singleton pattern. Why? Some reasons:

*   One instance for all the game implementation, with no possible duplications.
*   The instance is never destroyed on scene changes.
*   It stores the current game state to be accessible anytime.

We will not explain the design of the Singleton pattern because it’s not the purpose of this post. If you wish to know more about it, you can go [here](http://gameprogrammingpatterns.com/singleton.html).

### 2 — The GameManager code

Create a new project on Unity and add a first csharp script called **_SimpleGameManager.cs_** and add the following code:




Explaining the code in parts, we have:

First we are making some enums for easily check the Game State, so for this example we will have:
`public enum GameState { INTRO, MAIN_MENU }`

Then we will have an event delegate method that we will use as a callback when a game state changes. This is ideal for changing scenes.
`public delegate void OnStateChangeHandler();`

Moving forward we will have the gameState attribute, that is a getter for the current Game State.
`public GameState gameState {get; private set;}`

Then we will have our class. Taking a look at the singleton implementation we can see that we will use the Instance static variable to get our Game Manager current instance or create a new one if it doesn’t exists. It’s also interesting to see that we call the DontDestroyOnLoad method in the Game Manager instanciation. On doing that, Unity makes sure that our instance is never destroyed between scenes. The method used to change the Game State is SetGameState, which we only need to pass the GameState enum variable as the parameter.
`public void SetGameState(GameState state){  
    this.gameState = state;  
    OnStateChange();  
}`

It automatically sets the new gameState for the instance and call the callback **OnStateChange** method.

### 3 — Creating Sample Scenes

For testing our new Game Manager, we will create 2 Unity scenes: Intro and Menu. The Intro scene will just show some debug messages, simulating an Intro game scene, and after 3 seconds it will change to the Menu Scene were we have the Game Menu code.

Create a new scene called Intro and create a csharp script called Intro.cs. Put the following code into the script:




You can see here that we just need to call the Game Manager instance inside the Awake method. The same initialization will happen on the others scripts, to get the current Game Manager state.

After getting the Game Manager instance we set the OnStateChange event, which is load the Menu scene after 3 seconds. You can notice that the first line of the event sets the new Game State by calling the SetGameState method.

If you run this scene however, you will get an error because we don’t have the Menu.cs Scene yet. So let’s create it!

Create a new scene called Menu and add a csharp script called Menu.cs into this Scene. Add the following code to Menu.cs:




We added simple Unity GUI elements for this scene just for example. Run the Intro Scene and check the Debug logs, You should see the messages when the Game State is changing from the old state to the new state and keeping the instance between scenes. And there you have it! You can add more GameStates for multiple screens like Credits, High Score, Levels, etc. The code for this examples is on github, feel free to fork and use it in your games!

[https://github.com/bttfgames/SimpleGameManager](https://github.com/bttfgames/SimpleGameManager)
