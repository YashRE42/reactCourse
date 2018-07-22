import React from "react";
import AddOption from "./AddOption";
import Header from "./Header"
import Action from "./Action"
import Options from "./Options"
import OptionModal from "./OptionModal"


export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const selectedOption = this.state.options[randomNum];
        this.setState(()=>({selectedOption}));
    };

    handleClearSelectedOption = () => {
        this.setState(()=>({selectedOption:false}));
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter a valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'this option already exists';
        }
        this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (error) {
            //do nothing 
        }
    }

    componentDidUpdate(prevProp, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        const subtitle = "Put your hands in the life of a computer";
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        )
    }
};