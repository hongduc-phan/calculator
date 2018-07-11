import React, { Component } from 'react';
import PropTypes from "prop-types";

const Button = props => {

    const handleOnClick = () => {

        if (props.name === 'x') {
            props.onClick('*');
        }
        else if (props.name === '÷') {
            props.onClick('/');
        }
        else {
            props.onClick(props.name);
        }


    }

    return (
        <button value= {props.name}
                onClick={handleOnClick}>
            {props.name}
        </button>
    )
};

Button.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;
