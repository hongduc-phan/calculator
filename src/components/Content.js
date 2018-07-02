import React, { Component } from 'react';
import Button from "./Button";
import Result from "./Result";

class Content extends Component {

  state = {
    result: 0,
    name:''
  }
  constructor(props) {
          super(props);
      }

 handleOnClick = (event) =>{
   const target = event.target;
       const value  = target.value;

       this.setState({
           name: value
       });
  }

  render() {
    console.log(this.state.name)

    return (
      <React.Fragment>
        <Result result = {this.state.name}/>

        <button value = '8' onClick = {this.handleOnClick} >8 </button>

        <Button value = '2' onClick = {this.handleOnClick}> 2</Button>
        <Button  value = '3' onClick = {this.handleOnClick}> 3</Button>
        <Button  value = '5' onClick = {this.handleOnClick}> 5</Button>
        <Button  value = '+' onClick = {this.handleOnClick}> + </Button>
      </React.Fragment>
    );
  }
}

export default Content;
