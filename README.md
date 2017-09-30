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
* [What is Nodejs?](#what-is-nodejs)
* [How is Nodejs different from PHP?](#how-is-nodejs-different-from-php)
* How to install Nodejs
* How to install Express
* How to use Modules
* How to Extend Modules

#### What is Nodejs?
Nodejs is an open-source backend platform that takes front-end javascript and applies it to the server. Like PHP, Nodejs handles requests sent from the client and gives web applications a dynamic feel. Nodejs is best used for applications where the core algorithms are simple and non-taxing to the server's CPU. Basically if you have a ton of users who just need to do something simple like logging in or sending form data and it is likely that the server will get multiple requests at the same time, Nodejs will be able to handle that type of load.

#### How is Nodejs Different from PHP?
When you send a request to the server using PHP, PHP will block all other incoming requests until it sends a response back to the client. PHP has to finish the request before moving on with the next. This creates a problem when millions of users are sending simultaneous requests to the same server. Nodejs handles this in a different way. Nodejs will receive the request and pass a callback to the server. Basically Nodejs is saying to the server, "Hey, here's the request and by the way, whenever you finish with it, put the result into this callback function and send it back to the client." Since Nodejs doesn't have to wait on a response, it will immediately be able to handle the next request.

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
installed. You can install it by typing: sudo apt install nodejs-legacy”. I spent quite a while trying to figure out why my installation wasn't working. Finally I found the answer. To fix this we need to type:
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

#### How to install Express
The code to install Express locally is:
```Shell
npm install express
```
Some sources online recommend installing local versions of express in order to allow version control. I decided it was probably not a big deal for me to install express globally and have it apply to all directories in the server so I used:
```Shell
npm install express -g
```

#### How to use Modules
Nodejs has libraries called "Modules" that can be included into your .js files with the keyword "require". For example:
```Javascript
var http = require('http');
var dns = require('dns');
```
Now we can call our variables as objects and use any functions that are included in the modules. Let's use this to create "Hello World".
Navigate to your desired directory such as /user/Exploration2/ and create a file named app.js. Insert the following:
```Javascript
// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
 response.writeHead(200, {"Content-Type": "text/plain"});
 response.end("Hellod\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Servering at http://127.0.0.1:8000/");
```
Now we need to initiate the server. Type:
```Javascript
node app.js
```
This basically makes our server listen to port 8000. In order to allow access to port 8000, we need to configure our security on 
AWS. From your EC2 dashboard look on the left side and find "Security Groups". Click it and select the instance you are running. Now
find "Incoming" from the bottom and add a rule on port 8000.

Now we can navigate to our EC2 from a web browser and if we add :8000 to the web url we should see our Hello World page.

#### How to extend modules
I am still trying to understand how this part works, so far I could get the modules to call functions separately but the tutorial calls
for nesting the functions within each other. I could never get it to work this way. If someone can point out what is going on with my code I would greatly appreciate it!

## Journal
For this Exploration I decided to try something from the backend. I spend quite a while researching Nodejs and found many articles
regarding its usage and performance. I did more reading than coding for this exploration which explains why my code is so short but I felt like understanding what Nodejs is capable of and why we should use it is just as important as exploring how to use it. Much of my time was spent troubleshooting why my installation of Node resulted in errors. I did find a solution eventually and posted it in this readme. I spent some time reading about Express and learning how to install and use it. The code I posted is just some exercises from the tutorials.

