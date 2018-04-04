import React from 'react';


export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
  
  handleAddOption = (e) => {
      e.preventDefault();
      console.log('testing');
      const option = e.target.elements.option.value.trim();
      const error = this.props.handleAddOption(option);
      
      // the error message is specific to this form, so it's the only place it needs to live - that is why we set the state in this child component 
      // in ES6 if the obj property has the same name as the variable we can just use as below
      // error: error - will be the same as shorthand syntax below
      this.setState(() => ({ error }))        
      
      // clearing the input if there is no error
      if(!error){
          e.target.elements.option.value = '';
      }
  }   
  render(){
      return (
      <div>
      {/* conditional rendering below renders the error msg */}
          {this.state.error && <p className="add-option-error">{this.state.error}</p>}
          <form className="add-option" onSubmit={this.handleAddOption}>
              <input className="add-option__input" type="text" name="option" />
              <button className="button">Add option</button>
          </form>
      </div>
      )
  }
}
