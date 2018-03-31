class Counter extends React.Component {
    render(){
        return (
            <div>
                <h1>Count: </h1>
                <button>+1</button>
                <button>reset</button>
                <button>-1</button>
            </div>
        )
    }
};

ReactDOM.render(<Counter />, document.getElementById('app'));

// const appRoot = document.getElementById("app");

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={reset}>reset</button>
//             <button onClick={minusOne}>-1</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();