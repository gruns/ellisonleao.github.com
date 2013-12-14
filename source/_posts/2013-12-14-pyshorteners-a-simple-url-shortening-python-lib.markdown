---
layout: post
title: "pyshorteners - A simple url shortening python lib"
date: 2013-12-14 15:45
comments: true
categories: python
---

Hello Guys!

This month i've released a new python lib called pyshorteners. The main goal is
to abstract some url shorteners API's into one simple call to short and expand
urls. 

Some API's already implemented are:

* Goo.gl
* Bit.ly
* Tinyurl.com
* and others..

Here's an example of usage:

	from pyshorteners import Shortener

	shortener = Shortener('GoogleShortener')

	url = 'http://myniceurl.com'
	shorten = shortener.short(url)
	print 'My shorten url is {}'.format(shorten)

	# Expanding
	short_url = 'http://goo.gl/AsCe'
	print 'My expanded url is {}'.format(shortener.expand(short_url))

You can find all the source code on the
[official github repo](http://github.com/ellisonleao/pyshorteners/)


See you guys next post!
