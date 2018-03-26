const appRoot = document.getElementById("app");

let visible = false;

const toggleVisibility = () => {
    visible=!visible;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1> Visibility toggle </h1>
            <button onClick={toggleVisibility}>{( visible ? "Hide" : "Show") + " details"}</button>
            {visible && <p> these are your hidden details </p>}
        </div>
    )

    ReactDOM.render(template,appRoot);
}

render();