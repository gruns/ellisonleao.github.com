---
title: "A brief overview on 2D Game Development"
author: "Ellison Leão"
date: 2015-03-03T22:35:53.495Z
lastmod: 2019-09-24T01:03:54-03:00

description: ""

subtitle: "(or the things you probably want to learn before start making 2D games)"

image: "/posts/2015-03-03_brief-overview-on-2d-game-development/images/1.jpeg" 
images:
 - "/posts/2015-03-03_brief-overview-on-2d-game-development/images/1.jpeg" 
 - "/posts/2015-03-03_brief-overview-on-2d-game-development/images/2." 
 - "/posts/2015-03-03_brief-overview-on-2d-game-development/images/3." 
 - "/posts/2015-03-03_brief-overview-on-2d-game-development/images/4." 
 - "/posts/2015-03-03_brief-overview-on-2d-game-development/images/5." 
 - "/posts/2015-03-03_brief-overview-on-2d-game-development/images/6." 
 - "/posts/2015-03-03_brief-overview-on-2d-game-development/images/7." 
 - "/posts/2015-03-03_brief-overview-on-2d-game-development/images/8." 
 - "/posts/2015-03-03_brief-overview-on-2d-game-development/images/9." 
 - "/posts/2015-03-03_brief-overview-on-2d-game-development/images/10." 
 - "/posts/2015-03-03_brief-overview-on-2d-game-development/images/11." 
 - "/posts/2015-03-03_brief-overview-on-2d-game-development/images/12." 


aliases:
    - "/a-brief-overview-on-2d-game-development-438927b44952"
---

![image](/posts/2015-03-03_brief-overview-on-2d-game-development/images/1.jpeg)

## A brief overview on 2D Game Development
> (or the things you probably want to learn before start making 2D games)

Our world is changing fast. Back in the 70&#39;s it was hard to see someone wanting to be a game developer. It was extremely hard to create a single gray triangle moving on the screen. But it’s good to see that we evolved and the tools that we use to make great games followed that evolution. But making games isn’t just choosing the right tools for the job, it involves great understanding of many areas, such as math, physics, history, design, etc.

In this article we will show you an overview of some of this areas, focusing on 2D game development. Each area will be divided in a section so we can talk about each one in a more organized way. So let’s cut the talk and get started.

### Math &amp; Physics

This is the base foundation for all games we know. Without math we will never know how to even draw a single pixel on the screen. If you are/were a bad math and physics student and think that making games has nothing to do with them, we are very sorry for you. In this section we will cover the most important math and physics principles you will need to know before you get the hands dirty.

#### Cartesian coordinate system




![image](/posts/2015-03-03_brief-overview-on-2d-game-development/images/2.)



The cartesian coordinate system is where our game elements will be interacting together. Each element will have a point which is represent by a pair of x and y coordinates in the space (e.g: (3,1) ). X and Y coordinates can have both positive or negative values. The **_xy plane_**, as is known, is also divided into 4 quadrants (I, II, III and IV), made to locate a point more easily. The quadrants are shown in the image below:




![image](/posts/2015-03-03_brief-overview-on-2d-game-development/images/3.)



#### Vectors and transformations

The math definition of a vector an object who has a magnitude and a direction. That magnitude says how long the vector is. In games, a vector can represent the distance between an origin (0,0) and a certain point. For that, it can represent a lot of things, like the current player position in the plane, the gravity force, a constant force.

Vectors math are one important part on game development theory. Learning how two vectores are added, subtracted, multiplied by a scalar and more will help you understand how you can make a your character to walk back and forth, apply a force to an element, add gravity to your game.

There are some common operations that can be done with vectors: Sum, Subtraction, the dot product, cross product. In this article we will not teach how they are made but just make sure that you can study of them so the vector idea is fixed in your head.

Another great math concept you need to learn is transformations. In the **_xy plane_** and object can suffer from several kind of transformations, such as scale, rotation, reflection, translation. For each transformation, a special math formula is required. Some transformations on images:

*   **Rotation**



![image](/posts/2015-03-03_brief-overview-on-2d-game-development/images/4.)



*   **Reflection**



![image](/posts/2015-03-03_brief-overview-on-2d-game-development/images/5.)



*   **Translation**



![image](/posts/2015-03-03_brief-overview-on-2d-game-development/images/6.)



### Mechanics — Newton’s laws of motion

After we started to understand the math concepts, we need to use those concepts for physics as well. Newton’s laws of motion consists in three laws that can be summarized below:

*   _First law_ — When viewed in an inertial reference frame, an object either remains at rest or continues to move at a constant velocity, unless acted upon by an external force.
*   _Second law_ — The vector sum of the forces _F_ on an object is equal to the mass _m_ of that object multiplied by the acceleration vector a of the object: _F = ma_.
*   _Third law_ — When one body exerts a force on a second body, the second body simultaneously exerts a force equal in magnitude and opposite in direction on the first body.

Those three basic laws are largerly used on game physics systems. For example, if you want to make a bouncing ball or to launch a bird from a slingshot or a cannonball, you will need to implement such laws on your game code.




![image](/posts/2015-03-03_brief-overview-on-2d-game-development/images/7.)



### Collision Detection

Another important section in game physics is to learn the methods of collision detection. Those methods will help you understand how the elements from your game can interact with each other, like if a car hit a wall or if your player hit the ground after a jump. On 2D games, we have several algorithms for collision detection, some of them faster than the others. That’s why you need to learn the most used ones, and choose what’s best for you case.

Some of the basic algorithms are:

*   **Rectangular collision detection**

One of the most basic types of collision check. On every game element, we can draw a rectangle box that suits the whole element inside of it. Giving two elements, to check if an element hits another, you just need to compare if any side of the first element’s rectangle is inside the other element’s rectangle. If some side position is inside the other one, we have a collision. This image below can illustrate the problem. _NOTE: This collision detection only works for axis-aligned rectangles._




![image](/posts/2015-03-03_brief-overview-on-2d-game-development/images/8.)

No collison





![image](/posts/2015-03-03_brief-overview-on-2d-game-development/images/9.)

Collision



*   **Per-pixel Collision Detection**

This method is for the games you want to have a very accurate collision detection system. But when you gain in precision, you lose on perfomance. This is by far the worst perfomatic algorithm, because it needs to check every pixel from one element and compare its position another pixel from the other element.




![image](/posts/2015-03-03_brief-overview-on-2d-game-development/images/10.)

_Here you can find a comparison between a Rectangular collision and a pixel collision_



*   **Circular Collision Detection**

Like the rectangular detection, we represent the game elements inside a bounding sphere. To check if two elements collide with each other, we check if the one sphere intersects another or if it is completely inside another bounding sphere. For that, you can check if the distance from one sphere center to another is less that the sum of both sphere radius. If so, the circles are intersecting. If the centers distance is equal the sum of the radius, then the circles are touching each other.




![image](/posts/2015-03-03_brief-overview-on-2d-game-development/images/11.)



There are many other types of collision algorithms, like the [Separating Axis Theorem](http://gamedevelopment.tutsplus.com/tutorials/collision-detection-using-the-separating-axis-theorem--gamedev-169) algorithm, [Line-line intersection](http://en.wikipedia.org/wiki/Line%E2%80%93line_intersection) and more. Keep in mind that you will always need to find the best collision detection system for your game. There are games who doesn’t require that much accuracy on collision and you can use a simpler method rather than a complex one which will require a lot more of processing.

### Coding




![image](/posts/2015-03-03_brief-overview-on-2d-game-development/images/12.)



Coding skills are not 100% required for making games today. But they are another important part on game development. Every digital game that you’ve played this far has some sort of programming involved. Code languages like C, C++, Python, Java, Javascript are the most common used in this day. Depending on your game complexity and if you are seeking for perfomance, you can also use Assembly to achieve it.

There are many places that you can start learning how to code, generally speaking, like the awesome [Code.org](https://gist.github.com/ellisonleao/www.code.org) iniciative, the really good [Udacity](https://www.udacity.com/) and [edX](https://www.edx.org/) courses. To start coding your game you will need to have at least a great knowledge of one coding language, their principles, syntax, paradigms, etc. You will need to understand also how a game loop works, how to prevent your code to be as clean and performatic as possible.

Fortunately, we have a lot of great frameworks and engines for game development. A framework is nothing more that a bunch of helper classes together that can ease the pain on implementing some common things that we will need for our game. An engine is a more complex software which incorporates a lot of libraries and tools to help the game development as well.

We will list now some of the greatest frameworks and engines for 2D game development:

*   [Unity3d](http://unity3d.com/unity) — Despite the original engine is made for 3D games, the newest versions of Unity have a powerful 2D workflow.
*   [Construct 2](https://www.scirra.com/construct2) — A powerful ground breaking HTML5 game creator designed specifically for 2D games. It does not requires any knowledge of programming. Great for designers and artists.
*   [Game Maker](https://www.yoyogames.com/studio) — Another game creator tool. It requires no or very few coding skills. It has a great drag and dop system along with their custom language, the GML.

But if you want to learn things the hard way, you can try start making things from the basics and then who knows, maybe in the future you can make your own framework or engine. Here we show you the stuff you need to know to create your own set of tools.

*   OpenGL and WebGL

Basically the very best APIs for drawing both 2D and 3D Content on the screen. OpenGL is used on practically every game engine and framework for games that exists now. WebGL was born in 2011 and it’s like the OpenGL for web browsers. We can have all the greatest things that we have on the general OpenGL implementation in the browser without having to install any plugins.

*   Box2D

If you want to build your own physics engine, this is the library you will want to study before start coding something. It is the most complete engine with a large set of features, such as:

*   Continuous collision detection
*   Contact callbacks: begin, end, pre-solve, post-solve
*   Convex polyons and circles.
*   Multiple shapes per body.
*   Contact, friction, and restitution
*   Joint limits, motors, and friction

Those are just some of the [large set of features](https://medium.com/p/438927b44952/edit) that this engine implements. Since it is open sourced, you can learn how the engine was implemented and get some inspiration to build your own.

### Art

For some programmers this section can be unnecessary. But learning at least the very basics of game art could be extremely helpful when you are a single indie game developer and have a very short budget for your game. For 2D games, pixel art could be your starting point. You can also learn how to make vector graphics if you want that your game can work on different scales without having to create several images for each resolution. Since we are not covering all kinds of 2d art for games we will leave some great links so you guys can take a closer look:

*   [The Big List of Pixel Art Tutorials](http://www.pixelprospector.com/the-big-list-of-pixel-art-tutorials)
*   [2D Game art for programmers](http://2dgameartforprogrammers.blogspot.com.br/)

### Game Design

Now that you have learned how to implement your game idea, it’s time to talk about game design. A good game design is what makes a game fun to play, addictive. A good set of well defined rules, with some nice mechanics can turn a simple game into a great success.

We will show you some steps that you can follow to start your project. Those steps are from the awesome tiny game design tool by Federico Fasce and can be downloaded [here](http://tinygdtool.urustar.net/images/tinygdtool.pdf)

*   Step 1 — Emotion, mechanic and theme

Here you will define how the game will act. You can choose from a first person shooter, to a infinite runner. You will need to combine the desired mechanic with some emotion. What mechanics will empower that emotion in the best way?

*   Step 2 — The main character

After finishing the step 1 you will have to think about the main character of the game. This main character will rise with the proper mechanics you choose to your game and perhaps some powers. Start drawing it in a paper and give it a name and a brief history. And when we say powers, that doesn’t mean that your main character is always a super hero. The power can be anything involved with the core mechanics of the game, like the ability of stealing, or the ability of not jump so well.

*   Step 3 — Objects

A good game have some objects who can interact with the main character. Objects can be represented as some powerup which will improve the main character abilities during the game, or some new weapon to be added into the arsenal. You will need to make sure that these objects will interact directly with the core mechanics of the game as well.

It is nice to always start with the very basic types of objects.

*   Step 4 — Obstacles

A good game also comes with some difficulty. Some obstacles along the way is great to keep the player “stuck” in the good way on the game. Like the main character, is always nice to draw all the possible game obstacles, even if they are a small rock in the path or a huge wall dividing two countries.

*   Step 5 — Level design

This is the part when you create your game environment. Where will the game be located at? A florest, a school, a house? You can make a platform level or a room full of obstacles. Just make sure that the player will be able to try as much as objects and obstacles as he can. It’s always good to keep the balance along the levels, to not make them all easy or all very difficult. Not forgetting to draw everything you wish to make for that level. Every obstacle and objects position.

*   Step 6 — Putting all together

After making the first 5 steps, the main point of the 6th step is try to put all things together. Those things together will not make a final game, this is just the beginning of a possible prototype that will evolve with time. With all things together it’s time to create small tasks which can be done in less than a day. Those tasks will continue to improve this prototype and add new features to the game. Try not to make a larger set of tasks during the day, it can harm the game quality in the end. The most important thing is to start simple and deliver fast. You don’t need to deliver a AAA game on the first place. Start making very simple games and let it evolve naturally.

### Love and passion

And for the last section, i would like to talk about love. Yes, love. Without it, even if you are the best programmer, artist, game designer of the world, your games will fail. Love and passion is what drives the greatest game developers that exists today. Adding love to your game is like adding fuel to a bonfire, the more you add the more it will burn and shine.

We hope that with this brief introduction can give you the idea of what involves making a 2D game. We would love to hear back from you if you have any questions. You can reach us at my twitter account (@ellisonleao). We will see you on the next post.

**p.s: We would like to dedicate this post in memory of Ralph Baer, the “father of videogames” who just passed away recently**
