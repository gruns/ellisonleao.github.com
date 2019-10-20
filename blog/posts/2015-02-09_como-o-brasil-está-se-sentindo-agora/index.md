---
title: "Como o Brasil está se sentindo agora?"
author: "Ellison Leão"
date: 2015-02-09T18:06:41.627Z
lastmod: 2019-09-24T01:03:53-03:00

description: ""

subtitle: "Portuguese phrase for "How is Brazil feeling right now?" is a project to analyze emotional state of brazilian tweets."

image: "/posts/2015-02-09_como-o-brasil-está-se-sentindo-agora/images/1.png" 
images:
 - "/posts/2015-02-09_como-o-brasil-está-se-sentindo-agora/images/1.png" 


aliases:
    - "/como-o-brasil-esta-se-sentindo-agora-246c869e206f"
---

## Como o Brasil está se sentindo agora?

Portuguese phrase for &#34;How is Brazil feeling right now?&#34; is a project using d3.js and pubnub&#39;s twitter realtime stream feed to analyze the emotional state of brazilian tweets.### The Start

When i was researching realtime applications, i discovered the awesome project &#34;[How is America feeling right now?](http://pubnub.github.io/tweet-emotion/)&#34; by [@girlie_mac](http://twitter.com/girlie_mac) and i thought that would be nice to have a brazilian version of it, since we are experiencing some very difficult times, with lack of water and energy, political corruption and [more](http://www.economist.com/news/americas/21637437-petrobras-scandal-explained-big-oily)..

So I&#39;ve decided to fork the america&#39;s github project and start to study the code to see how could i implement the brazilian map and the emotional tweets in it.

### The technology behind it

For this project we are using:

*   [PubNub&#39;s twitter stream](http://www.pubnub.com/developers/data-streams/twitter-stream/) — Now we can get the latest worldwide tweets in realtime.
*   [D3.js](http://d3js.org/) + [TopoJSON](https://github.com/mbostock/topojson)— Getting a brazilian topology map in a json format and using d3.js library to draw it.
*   Emotional words — Simple words from portuguese dictionary to express how users are feeling.

What i had to do:

*   Get the Brazilian map in a topojson format. Fortunately there is a [open source project](https://github.com/zahpee/d3-map) using it and i just had to make a fewer modifications to get it working.
*   Change american&#39;s emotional words to the common portuguese ones. This method is not the optimal and i know we have [a lot of alternatives](https://www.google.com/search?q=svm+emotions&amp;ie=utf-8&amp;oe=utf-8#q=svm+emotions+text) to get more precision on that evaluation but this is a WIP.

### Conclusion




![image](/posts/2015-02-09_como-o-brasil-está-se-sentindo-agora/images/1.png)



With a few modifications on the original project, i could get a good version of how the brazilian are feeling right now by checking their tweets. A good feature we could add is to records all that emotional tweets inside a database and show what are the happiest/saddest states, the most lovely/hateful words used by a period, etc.

If you want to contribute with this project, feel free to fork it and send your modifications. I will be glad to discuss new features and improvements.

Repo: [https://github.com/ellisonleao/brazil-tweet-emotion/](https://github.com/ellisonleao/brazil-tweet-emotion/)
