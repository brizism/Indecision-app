import React from 'react';

const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
        <button 
            className="button button--link"
        // passing an inline func thats gonna get called with the e argument when the button gets clicked and we are going to called the handleDeleteOption with the correct data - explicitly pass optionText
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
        >
        remove
        </button>
    </div>
)

export default Option;