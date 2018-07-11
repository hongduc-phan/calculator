import React, { Component } from 'react';
import PropTypes from "prop-types";

const Button = props => {

    const handleOnClick = () => {
        switch (props.name) {
            case 'x':
                props.onClick('*');
                return ;
            case '÷':
                props.onClick('/');
                return ;
            case '.':
                props.onClick('*0.1');
                return ;
            default:
                props.onClick(props.name);
                return ;
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
