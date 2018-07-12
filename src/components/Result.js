import React, { Component } from 'react';
import PropTypes from "prop-types";

const Result = props => {

    let {result} = props;
    result = eval(props.handleResult());
    if (result === undefined) {
        result = props.result;
    }

    return (
      <div className = "Result">
          {result}
        </div>
    )
};

Result.propTypes = {
    //result: PropTypes.number,
}
export default Result;
