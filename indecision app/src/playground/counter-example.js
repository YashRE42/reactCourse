class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleAddOne(){
        console.log(this);
    }
    handleMinusOne(){
        console.log(this);
    }
    handleReset(){
        console.log(this);
    }    
    render(){
        return (
            <div>
                <h1>Count: </h1>
                <button onClick = {this.handleAddOne}>+1</button>
                <button onClick = {this.handleMinusOne}>reset</button>
                <button onClick = {this.handleReset}>-1</button>
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