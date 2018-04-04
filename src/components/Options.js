import React from 'react';
import Option from './Option'

const Options = (props) => (

    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button 
              className="button button--link"
              onClick={props.handleDeleteOptions}
              >
              Remove All
            </button>
        </div>
    
        {/* if options array is empty show msg */}
        {props.options.length === 0 && <p className="widget-header__message">Please add an option to get started!</p>}
        {
            props.options.map((el, i) => (
            <Option key={el}
            optionText={el}
            count={i + 1}
            handleDeleteOption={props.handleDeleteOption}
            />
            ))
        }
    </div>
)

export default Options;