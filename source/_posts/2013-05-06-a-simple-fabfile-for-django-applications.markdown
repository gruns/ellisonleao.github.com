---
layout: post
title: "A simple fabfile for Django applications"
date: 2013-05-06 12:37
comments: true
categories: [Python, Django]
---

Hello people, after so many time working with django projects, i’ve decided to put a simple fabric fabfile to help people easily deploy django projects into dev and production servers.

It supports several tasks, like:

- Get latest dump
- Generate dump from automysqlbackup
- Clear Thumbnails for projects using sorl-thumbnail
- Simple and easy deploy with supervisor

It’s still a initial file, but it already contains a lot of nice features. Hope you guys like it!

Source code available [here](https://github.com/ellisonleao/fabfile-django-bootstrap)
