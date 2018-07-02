import React, { Component } from 'react';

const Result = props => {

    let {result} = props;
    return (
      <div className = "Result">
          {result}
        </div>
    )
};

export default Result;
