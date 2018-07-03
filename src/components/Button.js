import React, { Component } from 'react';
import PropTypes from "prop-types";

const Button = props => {

    const handleOnClick = () =>{
        props.onClick(props.name);
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
