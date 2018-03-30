class IndecisionApp extends React.Component {
    render() {
        const title = "indecision";
        const subtitle = "Put your hands in the life of a computer";
        const options = ["Thing one", "Thing two", "Thing four"];

        return (
            <div>
                <Header title = {title} subtitle = {subtitle} />
                <Action />
                <Options options = {options} />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                Options component here
                {
                    this.props.options.map((option)=>{
                    return <p key={option}>{option}</p>
                })
                }
                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>
                option component here
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                AddOptions component here
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));