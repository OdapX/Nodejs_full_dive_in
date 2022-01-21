# What's this part about ?

### Before starting to build web server on any framework available out there, it's essential to go through how to build a bare server with pure built-in Node.js abilities.

### The server here counts the visits , and show when was the last visit .

# Event Emitter :

### http.createServer() is an event Emitter note that http.createServer((req,res)=>{}) is convenience syntax of server.on(request,(req,res)=>{}) -> the request is the event ,triggering the callback
