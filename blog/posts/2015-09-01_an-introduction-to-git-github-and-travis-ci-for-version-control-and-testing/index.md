---
title: "An introduction to Git, GitHub and Travis CI for version control and testing"
author: "Ellison Leão"
date: 2015-09-01T19:28:08.066Z
lastmod: 2019-09-24T01:05:02-03:00

description: ""

subtitle: "Our way of making sofware has changed a lot since the past days. It was very hard to deliver some good quality code when there was no easy…"

image: "/posts/2015-09-01_an-introduction-to-git-github-and-travis-ci-for-version-control-and-testing/images/1.png" 
images:
 - "/posts/2015-09-01_an-introduction-to-git-github-and-travis-ci-for-version-control-and-testing/images/1.png" 
 - "/posts/2015-09-01_an-introduction-to-git-github-and-travis-ci-for-version-control-and-testing/images/2.jpeg" 
 - "/posts/2015-09-01_an-introduction-to-git-github-and-travis-ci-for-version-control-and-testing/images/3.png" 
 - "/posts/2015-09-01_an-introduction-to-git-github-and-travis-ci-for-version-control-and-testing/images/4.png" 
 - "/posts/2015-09-01_an-introduction-to-git-github-and-travis-ci-for-version-control-and-testing/images/5.png" 


aliases:
    - "/an-introduction-to-git-github-and-travis-ci-for-version-control-and-testing-ac97f158f520"
---

![image](/posts/2015-09-01_an-introduction-to-git-github-and-travis-ci-for-version-control-and-testing/images/1.png)



## An introduction to Git, GitHub and Travis CI for version control and testing

Our way of making sofware has changed a lot since the past days. It was very hard to deliver some good quality code when there was no easy way of testing and make sure everything was working fine. Nowadays, we can say that most of those problems are solved.

For this post, we will show you some of the agile processes steps, by creating an app using git and github for versioning control, along with Travis CI for Continuous integration.




![image](/posts/2015-09-01_an-introduction-to-git-github-and-travis-ci-for-version-control-and-testing/images/2.jpeg)



Git was created by the notorious Linus Torvalds, the creator of Linux, on 2005. It is now the most adopted software for versioning control because it’s so easy to use.

One of the many git features is that every git directory has a full history of what happened while we can still have many code versions in different places, called branches. Also, merging those branches into the main code is very straightforward, because even 100 people are working at the same code and a possible conflict emerge, git will flag the lines and files for you, and you will not be able to merge those changes until you fix those conflicts issues.




![image](/posts/2015-09-01_an-introduction-to-git-github-and-travis-ci-for-version-control-and-testing/images/3.png)



Github is a platform created to host projects which use git as their versioning control system. It has some nice features for code reviewing and contributing.




![image](/posts/2015-09-01_an-introduction-to-git-github-and-travis-ci-for-version-control-and-testing/images/4.png)



Travis CI is a continuous integration service used to build and test projects hosted at GitHub. You can think that travis like a automated service to test your application into multiple environments and languages.

Every time that you push new code into github, travis will automatically pull the latest code and run the tests. If there are any errors you will get notified.

## Our test App

First, let’s create an account on Github and TravisCI. Go to [https://github.com/join](https://github.com/join) , fill the fields, choose the free plan. Second, go to [http://travis-ci.org](http://travis-ci.org/) and click on Sign in with Github. We will head back later to travis when our app is done.

We will create a very basic python app for this post. It will only contain a main function which prints a **_Hello World_** string when called. We will also create a test which ensures that that main function is returning the right string.

Our app will follow the current directory:
`testapp/  
|  
|--.travis.yml  
|--app.py  
|--test_app.py`

On the app.py file put the following code:
`#!/usr/bin/env python  
# encoding: utf-8``def main():  
    return &#39;Hello World!&#39;``if __name__ == &#39;__main__&#39;:  
    main()`

This piece of code, when executed, will print a Hello World! message on the console. On the _test_app.py_ file add the following code:
`#!/usr/bin/env python  
# encoding: utf-8``import unittest  
from app import main``  
class TestApp(unittest.TestCase):  
    def test_main(self):  
        self.assertEqual(main(), &#39;Hello World!&#39;)``  
if __name__ == &#39;__main__&#39;:  
    unittest.main()`

That code will create a simple test for the main method. That piece of will be used for travis to test the app and make sure it is working.

Then, we will need to create a _.travis.yml_ configuration file. Travis will parse this file, install the app and call the tests and print out the results.

On the _.travis.yml_ add the following code:
`language: python  
python:  
    - &#34;2.6&#34;  
    - &#34;2.7&#34;  
    - &#34;3.2&#34;  
    - &#34;3.3&#34;  
    - &#34;3.4&#34;  
    - &#34;pypy&#34;  
script:  
    - &#34;python test_app.py&#34;`

Now let’s create a git directory for our app. After adding these files, execute:

_git init_

Now we need to add the files on the git tree and commit them. Execute the following commands:

_git add . git commit -am ‘Initial Commit’_

Now we are going to Github page to create our repository. Go to [https://github.com/new](https://github.com/new) and fill the repository name with testapp and then click on Create Repository (We will skip the creation of a .gitignore, README and LICENSE).

Github will show you some help on adding that repository on a project that already exists, by adding the remote address our local git directory. To add the new remote repository on the local directory execute the command

_git remote add origin_ [_git@github.com_](mailto:git@github.com)_:YOURUSERNAME/YOURAPPNAME.git_

Then let’s push our code to that new repository. Execute:

_git push origin master_

If everything goes well you can reload the repository page and you should see the code there.

Now, heading back to the travisci page, go to [https://travis-ci.org/profile/](https://travis-ci.org/profile/) . You will need to enable the new app in order to travis to start checking and testing it.

To test if travis will work, let’s make a small change on our code and make a new commit.

Open the _app.py_ and add a small comment. Commit the new change by calling:

_git commit -m ‘Testing travis’  
git push_

If everything goes well, you can see the build on travis dashboard, like the picture below:




![image](/posts/2015-09-01_an-introduction-to-git-github-and-travis-ci-for-version-control-and-testing/images/5.png)



You can check the app code [here](https://github.com/ellisonleao/testapp) . Thanks and seee you guys on the next post.
