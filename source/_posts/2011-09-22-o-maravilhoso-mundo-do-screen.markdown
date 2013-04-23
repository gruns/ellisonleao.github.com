---
layout: post
title: The wonderful world of Screen
date: 2011-09-22 00:47
comments: true
external-url:
categories: [Dev]
published: true
---
According to the manual, "Screen is a full-screen window manager that multiplexes a physical terminal between several processes, typically interactive shells," in other words, imagine having multiple terminals open in the same ssh session, with each one having their separate processes (with other ssh connections). Have you Imagined? Now imagine that you can keep that session active in the server connected by the time you want. Therefore, your tasks will be active on the server as long as you want and there be no problem if  a connection failure happens. In this post, I will show some of the characteristics of the screen and teach a simple script that generates a session with 3 "tabs" opened for one project.

# Installing Screen

To install screen, for Ubuntu and Debian users, open a terminal and just type:
{% codeblock lang:bash %}
~# sudo apt-get install screen
{% endcodeblock %}

To other distros, you can download screen in the [official site](http://www.gnu.org/software/screen/)

# Configuring a .screenrc file

We can configure a simple but cool visual interface for screen, modifying our .screenrc file . Open your favorite text editor and edit the file ~/.screenrc:

{% codeblock lang:bash %}
hardstatus alwayslastline
hardstatus string '%{= kG}[ %{G}%H %{g}][%= %{= kw}%?%-Lw%?%{r}(%{W}%n*%f%t%?(%u)%?%{r})%{w}%?%+Lw%?%?%= %{g}][%{B} %d/%m %{W}%c %{g}]'
vbell on
defscrollback 1024
startup_message off
autodetach on
defutf8 on
{% endcodeblock %}

Now let's open our screen. Go to the terminal and type *screen*. You should see a screen like this:

![](http://2.bp.blogspot.com/_iWsqNoMkfno/TIJkuLOBtnI/AAAAAAAAAOg/I9ehKHxgI1w/s1600/screen.png)

Here  we can find some useful informations:

* Left side: Host name that you're connected
* Center:  Actual "Tab"
* Right side: Server Date/Time

Screen uses the command "Ctrl-A" as a signal to send commands to screen instead of the shell.

Some basics commands on screen:

* (Ctrl+A) + C - Creates new "Tab"
* (Ctrl+D) - Remove current "Tab"
* (Ctrl+A) + D - Detach the screen session

Between "Tabs":

* (Ctrl+A) + N - Go to the next "tab"
* (Ctrl+A) + P - Go to the previous "tab"
* (Ctrl+A) + NUM - Go to "tab" number = NUM

For more commands just type (Ctrl+A) + ? for help.

# A general script to create a development environment

Now it's time to create a cool script that allow us to call screen with 3 pre-opened tabs, each one with its own functionality. 
In my projects i use to put one tab for run general services (web servers, etc), another tab for VIM editor and another tab with a bash for general commands. The script was created with (Uncle Paul's)[http://vimnox.wordpress.com/] help.

Let's call the script *newscreen* . Create a file *newscreen* and put the following code:

{% codeblock lang:bash %}
source $HOME/.screenrc
screen -t server
screen -t vim
screen -t bash
{% endcodeblock %}

Save the file on __/usr/local/bin/__ . That script is gonna be called by another script that we'll call *createscreen*. Create anothe file called *createscreen* and put the following code:

{% codeblock lang:bash %}

#!/bin/bash

if [ &amp;quot;$#&amp;quot; -ne 1 ]
then
echo &amp;quot;Digite o nome do projeto&amp;quot;
else
screen -RR $1 -c /usr/local/bin/newscreen
fi

{% endcodeblock %}

Also save this file on __/usr/local/bin/__ . After all set and done, give the execution permissions to *createscreen* file (chmod +x). Now we can use the script by typing:

{% codeblock lang:bash %}
~# /usr/local/bin newscreen PROJECTNAME
{% endcodeblock %}


And that's it! See you at next post!
