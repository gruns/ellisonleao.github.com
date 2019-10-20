---
title: "Creating slash commands for Slack using bottle"
author: "Ellison Leão"
date: 2015-08-24T16:46:43.779Z
lastmod: 2019-09-24T01:05:01-03:00

description: ""

subtitle: "Introduction"

image: "/posts/2015-08-24_creating-slash-commands-for-slack-using-bottle/images/1.png" 
images:
 - "/posts/2015-08-24_creating-slash-commands-for-slack-using-bottle/images/1.png" 


aliases:
    - "/creating-slash-commands-for-slack-using-bottle-53332610ccd1"
---

![image](/posts/2015-08-24_creating-slash-commands-for-slack-using-bottle/images/1.png)

## Creating slash commands for Slack using bottle

### Introduction

Hello guys, in this post i will show you how can you can make a custom slack command for your organization chat using python’s microframework Bottle. However, this post is not a Bottle tutorial and i will assume that you will have at least a basic python knowledge. If you want to learn more about Python, [click here](https://docs.python.org/2/). For learning about Bottle, [click here](http://bottlepy.org/docs/dev/index.html). We will deploy our app on Heroku, so you will need git installed as well.

On our the application, we will create a simple “Hello World!” command to be outputted on slack when typing the /hello command.

### Installing and Creating the Application

We will need to install Bottle inside a python virtualenv. Make sure you have [virtualenvwrapper](http://virtualenvwrapper.readthedocs.org/en/latest/install.html) installed and configured on your system. After the virtualenvwrapper install, create a new virtualenv called slash by typing the following:
`mkvirtualenv slash`

After that, install Bottle project using python’s pip command:
`pip install bottle`

The choice for Bottle is that you can create web applications with a few lines of code. You can use another web framework if you want, like Flask, web.py, web2py or even Django.

Now, moving to the app. First let’s create its structure.
`mkdir myslash  
touch myslash/app.py`

Open your favorite editor, and add the following lines to the app.py file. We will explain step by step how they work and what are they doing.
`#!/usr/bin/env python  
# encoding: utf-8``from bottle import run, post``@post(&#39;/hello&#39;)  
def hello():  
    return &#39;Hello World!&#39;``if __name__ == &#39;__main__&#39;:  
    run(host=&#39;0.0.0.0&#39;, port=5000)`

Explaining what this code does:
`from bottle import run, post`

Here, we import the necessary methods we will need for our app. run method will create a web server which will run our application. post method is a python decorator who will create a POSTroute that will be used for outputting the “Hello world!” message.
`@post(&#39;/hello&#39;)  
def hello():  
    return &#39;Hello World!&#39;`

This is our app’s main method. You can see the post decorator creating a /hello route which will be handled by the hello() method.
`if __name__ == &#39;__main__&#39;:  
    run(host=&#39;0.0.0.0&#39;, port=5000)`

The run method will be called when we run python app.py command. For the host we need to listen on all addresses, that’s why we add 0.0.0.0 as the param. You can change the port param if you want, the default is 5000.

Now open another terminal on the app folder and type
`python app.py`

To test if the app is running okay, use the cURL command to make a POST test request
`curl -X POST localhost:5000/hello`

You should see the Hello World! message printed out.

### Deploying

If you don’t have a Heroku account yet, please go to [https://signup.heroku.com/www-header](https://signup.heroku.com/www-header). After that, go to [https://dashboard.heroku.com/new](https://dashboard.heroku.com/new) to create a new application. Type your favorite app name and click on Create App.

We will need to create a Procfile so the app could run on Heroku side. Create a file called Procfile on your app’s main directory and add the following:
`web: python app.py`

Now, on the app’s main directory, create a git repository and send the files to the new application you just created. Heroku will know this is a python app and will make the proper configuration to run it.
`git init  
git remote add heroku git@heroku.com:YOURAPPNAME.git  
git push heroku master`

Make sure your public key is configured on your account’s SSH Keys ([https://dashboard.heroku.com/account](https://dashboard.heroku.com/account)).

If everything went well you should see the app running on YOURAPPNAME.herokuapp.com

### Configuring Slack

Now to the Slack part. We will need to add a custom slash command on our organization settings. Go to [https://YOURORGNAME.slack.com/services/new/slash-commands](https://YOURORGNAME.slack.com/services/new/slash-commands) and on the Choose your command input, type hello.

For the configurations we will have:

*   **Command**: /hello
*   **URL**: [http://YOURAPPNAME.herokuapp.com/hello](http://YOURAPPNAME.herokuapp.com/hello) (Important: WITHOUT TRAILING SLASH!)
*   **Method**: POST
*   Check Show this command in the autocomplete list and add a Description and usage hint

Click in Save integration

### Testing

Go to your slack org chat and type /hello on any chat. You should see the “Hello world!” message printed out.

And that’s it! You can see the app code [here](https://www.github.com/ellisonleao/myslash). If you have any questions or suggestions you can reach me out on [twitter](http://twitter.com/ellisonleao).
