import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'

export default class Konnek extends React.Component {
    state = {
        options:[],
        selectedOption: undefined
    }
    handleClearSelectedOption = () =>{
        this.setState(()=>({selectedOption:undefined}))

    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        this.setState(()=>({selectedOption:option}))
    }
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))

    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        } else {

            this.setState((prevState) => ({ options: prevState.options.concat([option]) }))

        }



    }
    componentDidMount= () =>{
        try {
            console.log('Fetched data');
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)

            if (options) {
                this.setState(() => ({ options }))
            }

        } catch (e) {


        }


    }
    componentDidUpdate=(prevProps, prevState) =>{
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
            console.log('saved data');

        }


    }
    componentWillUnMount=()=> {
        console.log('Componentwillumnountxs');

    }

    render() {

        const subTitle = "The smart way to set meeting times"


        return (
            <div>
                <Header subTitle={subTitle} />

                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}

                    />

                    <div className="widget">
                    
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                   
                
                </div>
              
                <OptionModal
                    selectedOption ={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                    
                />
            </div>
        )
    }
}
