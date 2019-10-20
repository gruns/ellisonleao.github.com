---
title: "A python lib to handle URL Shortening"
author: "Ellison Leão"
date: 2015-07-25T18:38:42.412Z
lastmod: 2019-09-24T01:05:00-03:00

description: ""

subtitle: "Introducing pyshorteners, a python lib to consume the most used URL shortening APIs."

image: "/posts/2015-07-25_python-lib-to-handle-url-shortening/images/1.jpeg" 
images:
 - "/posts/2015-07-25_python-lib-to-handle-url-shortening/images/1.jpeg" 


aliases:
    - "/a-python-lib-to-handle-url-shortening-fd69f68bc445"
---

![image](/posts/2015-07-25_python-lib-to-handle-url-shortening/images/1.jpeg)



## A python lib to handle URL Shortening

Introducing **pyshorteners**, a python lib to consume the most used URL shortening APIs.

### Motivation

Since the web reached out so many devices, sharing URLs addresses between those devices can be painful. The idea of creating small URLs to redirect to bigger ones is one of the great ideas ever. And with that idea, many companies started their own service to handle url shortening and some of them created an API which we can use for free.

I&#39;ve been working on this lib for quite some time to abstract the most used url shortening APIs into one single python lib. Right now we have 9 APIs implemented (and growing!).

### Installation and Usage

On your favourite shell, use pip to install:

_pip install pyshorteners_

After the installation, create a example.py file and put the following:




Then, just type

python example.py

For more docs and examples, go to the [official docs page](http://ellisonleao.github.io/pyshorteners/)
