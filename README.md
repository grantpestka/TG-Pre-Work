# TG-Pre-Work

## When we hit https://www.techtonicgroup.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.
(1) My browser (the client) attempts to make contact with the server. (2) The server responds and starts looking for the file. (3) If that goes well, the client responds and asks for the webpage. (4) The server sends the data.  The client sends confirmation that the file has been received. 5) If that goes well, the browser decodes the data and displays it to the user.  If not, back to step 3.

## From start to finish how does that data reach you to be rendered in the browser?
While in the browser any client-side processes are done to the data. Then browser passes it to the PC where it is turned into packets.  These packets are sent to the router which forwards them to my ISP (Internet Service Provider which looks up the address in a DNS server. With that information, the packets are sent to the server that hosts the website.  There the packets are reassembled and any server-side processes are executed. Then the response is broken into packets again, sent back to the ISP, forwarded to the client router, and reassembled by the client pc. After that the browser executes any other client-side processes and renders the new or updated webpage for the user.

## What code is rendered in the browser?
HTML, CSS, JavaScript

## What is the server-side code’s main function?
The main function of server-side code is to process client requests. Processing a request the server to simply return a requested resource, or it could require complicated programming. The website might need to be customized for different users. Users might be entering and interacting with personal data or a web application(1). The server-side code make any of this happen and prepares the HTMl that is returned to the user (2).

(1) source: https://developer.mozilla.org/en-US/docs/Learn/Server-side)
(2) source: https://www.mulesoft.com/resources/api/microservices-vs-monolithic)

## What is the client-side code’s main function?
The main function of client-side code generally is managing the appearance of the webpage and how it responds to user interaction.  This includes sending GET and POST requests,  accurately displaying the data received from the server and managing browser compatibility.

source: https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?
I'm guessing 1 per request.  

I did not see this in the recommend reading and struggled to find an answer online.

## How many instances of the server-side code are available at any given time?
I'm guessing 1 per request.  

I did not see this in the recommend reading and struggled to find an answer online.

## What is runtime?
Runtime is when a particular program is actively being used. Generally when we are interested in runtime, we want to know about the environment of existing code that supports our code or errors in our code caused be being executed in that runtime environment. This includes the operation system or language specific resources like the JRE (Jave Runtime Environment).

## How many instances of the the databases connected to the server application are created?
I'm guessing 1 per request.  

I did not see this in the recommend reading and struggled to find an answer online.
