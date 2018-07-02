import React, { Component } from 'react';

const Button = props => {
console.log(props)
let {value} = props;
    return (
        <button  value = {value} type="button">
          {props.children}
        </button>
    )
};

export default Button;
