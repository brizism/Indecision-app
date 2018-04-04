import React from 'react';
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }

  handleDeleteOptions = () => {
      this.setState(() => ({options: []}));
  }

  handleDeleteOption = (option) => {
      //console.log(option)
      // deleting individual options with filter 
      // in filter !== if they are not equal then its an item we dont want to remove
      this.setState((prevState) => ({
          options: prevState.options.filter(el => option !== el)
      }))
  }

  handlePick = () => {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum]
      this.setState(() => ({
          selectedOption: option
      }));
  };

  handleDeleteModal = () => {
      this.setState(() => ({selectedOption: undefined}))
  }
 
  handleAddOption = (option) => {
      // validation
      // if empty string -> !option 
      if(!option){
          return 'Enter valid value to add item';
          // below we checking if option already exists
          // indexOf > -1 means we found a match
      } else if (this.state.options.indexOf(option) > -1){
          return 'This option already exists';
      }

      // we never want to manipulate the state
      // prevState.options.push(option) - that is why we dont use push
      // adding new options to the options array using concat()
      this.setState((prevState) => ({options: prevState.options.concat(option)}))   
  } 
  
  componentDidMount(){
    // catch data if is unvalid
    try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);

        // if localstorage is empty it returns null and JSON.parse will return null too - so we dont want to setState to null - that is why we do conditional
        if(options){
            // returning options obj since is the same as the var above
            this.setState(() => ({options}));
   }
    } catch(e) {
        // Do nothing at all
    }
}

// saving data
componentDidUpdate(prevProps, prevState){
    // checking if options array change
    if(prevState.options.length !== this.state.options.length){
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json)
    }

}
componentWillUnmount(){
    console.log('componentWillUnmount')
}

  render(){
      const subtitle = 'Put your life in the hands of a computer';
      return (
          <div>
              <Header subtitle={subtitle}/>
              <div className="container">
                <Action hasOptions={this.state.options.length > 0} 
                handlePick={this.handlePick} />
                <div className="widget">
                    <Options options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                    />
                    <AddOption handleAddOption={this.handleAddOption} />
                </div>
              </div>
              <OptionModal selectedOption={this.state.selectedOption} handleDeleteModal={this.handleDeleteModal} />
          </div>
      )
  }
}

