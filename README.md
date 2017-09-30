# Exploration2
CS4830 Exploration 2 Assignment: Installing Nodejs, Modules, Extending

Explorer: Joe Wong

Course: CS4830

Date: 9/29/2017

## Sources
* [How to install Nodejs on Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04)
* [Troubleshooting installation of Nodejs on EC2](https://vijayasankarn.wordpress.com/2016/12/30/running-nodejs-in-amazon-ec2/)
* [Guru99 - Node.js NPM Tutorial: Create, Publish, Extend & Manage](https://www.guru99.com/node-js-modules-create-publish.html)
* [A CONSISE GUIDE TO NODEJS AND EXPRESS RUNNING ON AMAZON AWS](http://www.superunrelated.com/2014/09/a-consise-guide-to-nodejs-and-express-running-on-amazon-aws/)
* [Wikipedia:Continuation Passing Style](https://en.wikipedia.org/wiki/Continuation-passing_style)
* [W3Schools: Nodejs Tutorial](https://www.w3schools.com/nodejs/)
* [Node.js Tutorial – Step-by-Step Guide For Getting Started](https://www.airpair.com/javascript/node-js-tutorial)
* [PHP vs Nodejs](https://www.sitepoint.com/sitepoint-smackdown-php-vs-node-js/)

## Components Explored
* [What is Nodejs?](#what-is-nodejs?)
* How is Nodejs different from PHP?
* How to install Nodejs
* How to use Modules
* How to Extend Modules

#### What is Nodejs?
Nodejs is an open-source backend platform that takes front-end javascript and applies it to the server. Like PHP, Nodejs handles requests
sent from the client and gives web applications a dynamic feel. Nodejs is best used for applications where the core algorithms are simple
and non-taxing to the server's CPU. Basically if you have a ton of users who just need to do something simple like logging in or sending
form data and it is likely that the server will get multiple requests at the same time, Nodejs will be able to handle that type of load.

#### How is Nodejs Different from PHP?
When you send a request to the server using PHP, PHP will block all other incoming requests until it sends a response back to the client.
PHP has to finish the request before moving on with the next. This creates a problem when millions of users are sending simultaneous
requests to the same server. Nodejs handles this in a different way. Nodejs will receive the request and pass a callback to the server.
Basically Nodejs is saying to the server, "Hey, here's the request and by the way, whenever you finish with it, put the result into
this callback function and send it back to the client." Since Nodejs doesn't have to wait on a response, it will immediately be able to
handle the next request.

#### How to install Nodejs
First you will need to ssh into your ec2 instance. Once at the home directory type:
```Shell
sudo apt-get install nodejs
```
Now we also want NPM which is Node Package Manager so type:
```Shell
sudo apt-get install npm
```
Now if you try to type "node" into your command line you will likely get the following error: “The program ‘node’ is currently not 
installed. You can install it by typing: sudo apt install nodejs-legacy”. To fix this we need to type:
```Shell
which nodejs
```
This will bring up a path to nodejs. It should look similar to:
```Shell
/usr/bin/nodejs.
```
Run:
```Shell
sudo ln -s /usr/bin/nodejs /usr/bin/node
```
Now you should be all set. If you have further questions, be sure to consult this [guide](https://vijayasankarn.wordpress.com/2016/12/30/running-nodejs-in-amazon-ec2/).

#### How to use Modules
Nodejs has libraries called "Modules" that can be included into your .js files with the keyword "require". For example:
```Javascript
var http = require('http');
var dns = require('dns');
```
Now we can call our variables as objects and use any functions that are included in the modules.

