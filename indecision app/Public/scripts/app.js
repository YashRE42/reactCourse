"use strict";

console.log("app.js is working");

var appRoot = document.getElementById("app");

//jsx
var app = {
    title: "Who now?",
    subtitle: "that was painful",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

var removeAll = function removeAll() {
    app.options = [];
    render();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
};

var render = function render() {
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
            "button",
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            " What should I do? "
        ),
        React.createElement(
            "button",
            { onClick: removeAll },
            " Remove all items "
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                " Add option "
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
