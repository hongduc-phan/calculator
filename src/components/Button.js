import React, { Component } from 'react';
import PropTypes from "prop-types";

const Button = props => {

    const handleOnClick = () =>{
        // if (props.name ==='=')
        //     props.onClickEqual();
        // else if (props.name === '+/-') {
        //     props.onClickToggle();
        // }
        //
        // else
        //     props.onClick(props.name);

        switch (props.name) {
            case '=':
                props.onClickEqual();
                break;
            case '+/-':
                props.onClickToggle();
                break;
            case 'AC':
                props.handleClickAC();
                break;
            case '.':
                props.handleClickFloating();
                break;
            default:
                props.onClick(props.name);
                break;
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
