---
layout: post
title: "Debug all the Components of a Unity3D GameObject"
date: 2013-05-08 00:34
comments: true
categories: [Game Development, Unity3D, Protip] 
---

Hello people! This is a quick post about how can you get all the
Components of a Unity GameObject. Sometimes you need to call a
function inside a script that belongs to another GameObject. Getting
this script component is one of the ways of doing it. So here's the code

{% codeblock lang:csharp %}
Component[] components = YOURGAMEOBJECT.GetComponents<Component>();
foreach (Component component in components){
	Debug.Log("@@@@" + YOURGAMEOBJECT.name +"\t["+c.name+"] "+"\t"+c.GetType() +"\t"+c.GetType().BaseType);
}
{% endcodeblock %}

And that's it. Call this code inside a script and see all the components
in the Debug console. Hope it helps! See you next post!
