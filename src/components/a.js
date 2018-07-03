import React, { Component } from 'react';

const Button1 = props => {

    const handleOnClick = (event) =>{
        const target = event.target;
        const value  = target.value;
        console.log(event.target.value)
    }
    return (
      <button value= {props.value}
              onClick={handleOnClick}>
              {props.children}
      </button>
    )
};

export default Button1;
