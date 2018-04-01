class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return  {
                visibility: !(prevState.visibility)
            }
        });
    };
    render(){
            return (
                <div>
                    <button onClick={this.handleToggleVisibility}>{(this.state.visibility ? "Hide" : "Show") + " details"}</button>
                    {this.state.visibility?<p>This is the hidden message</p>:""}
                </div>
            )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));