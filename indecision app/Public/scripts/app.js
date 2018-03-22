"use strict";

console.log("app.js is working");

//jsx
var app = {
    title: "Who now?",
    subtitle: "that was painful",
    options: ["One", "Two"]
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        " ",
        app.subtitle,
        " "
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 0 ? "here are your options" : "You have no options :("
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item 1"
        ),
        React.createElement(
            "li",
            null,
            "Item 2"
        )
    )
);

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Yash Rathore"
    ),
    React.createElement(
        "p",
        null,
        "Age: unkown"
    ),
    React.createElement(
        "p",
        null,
        "Location: Allahabad "
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
