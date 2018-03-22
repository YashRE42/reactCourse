console.log("app.js is working");

const appRoot = document.getElementById("app");

//jsx
const app = {
    title : "Who now?",
    subtitle : "that was painful",
    options: ["One", "Two"]
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p> {app.subtitle} </p>}
        <p>{app.options.length > 0 ? "here are your options" : "You have no options :("}</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
);