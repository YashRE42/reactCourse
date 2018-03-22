console.log("app.js is working");

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

const templateTwo = (
    <div>
    <h1>Yash Rathore</h1>
    <p>Age: unkown</p>
    <p>Location: Allahabad </p>
    </div>
);

const multiplier = {
    numbers = ['1', '2', '3'],
    multiplyBy = 2,
    muliply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.muliply());

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);