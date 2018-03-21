"use strict";

console.log("app.js is working");

//jsx

var template = React.createElement(
  "h1",
  null,
  "Hi dude"
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
