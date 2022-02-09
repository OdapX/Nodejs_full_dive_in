//Reference https://nodejs.org/api/events.html#class-eventemitter
const EventEmitter = require("events");
const Emitter = new EventEmitter();

Emitter.on("Pushed", () => {
  console.log("pushed event triggered");
});

Emitter.on("Sort", (...args) => {
  args.sort();
  console.log(args);
});

Emitter.emit("Pushed");
Emitter.emit("Sort", 7, 5, 9, 4);
