import React, { Component } from 'react';
import PropTypes from "prop-types";

const Result = props => {

    let {result} = props;
    return (
      <div className = "Result">
          {result}
        </div>
    )
};

Result.propTypes = {
    result: PropTypes.number,
}
export default Result;
