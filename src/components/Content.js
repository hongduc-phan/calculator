import React, { Component } from 'react';
import Button from "./Button";
import Result from "./Result";
import display from "../logic/display";
import {resultCalc } from "../logic/result";
import {calC,isOperator} from "../logic/calc";

class Content extends Component {

    state = {
        result: 0,
        name:'',
        checkIsNumber:true,
        plusMinus: true
    }

    constructor(props) {
          super(props);
    }

    handleClick = (value) => {
        if( isOperator(value)) {
            this.setState({
                checkIsNumber:false
            });

        }
        else {
            this.setState({
                checkIsNumber:true
            });
        }

        let name = this.state.name + display(value).toString()
        if (name === '0'){
            name =''
        }
        this.setState({
            name: name
        })


    }
    handleEqual = () => {

        this.equalActive();
    }
    equalActive = () => {
        const temp = calC(this.state.name, this.state.checkIsNumber);
        let temp2 = parseFloat(temp)
        this.setState({
            name: temp2,
            checkIsNumber: true,
            result: temp2
        });
    }

    handleToggle = () => {
        // this.setState((prevState, props) => {
        //     return {
        //         plusMinus: !prevState.plusMinus,
        //         result: -1 * eval(prevState.name),
        //         name: this.state.result.toString(),
        //     };
        // });

        this.activeToggle();
    }

    activeToggle = () => {
        let isnum = /^\d+$/.test(this.state.name);

        if( !isnum) {
            this.setState({
                name: '-' + this.state.name,
            });
        }
        else {
            let result = -1 * eval(this.state.name)
            let name = result.toString();

            this.setState({
                plusMinus: !this.state.plusMinus,
                result:  (result),
                name: name,
            });
        }
    }


    render() {
        console.log('name',this.state.name)
        console.log('result',this.state.result)
    // let result = this.state.name;
    //     if (this.state.checkIsNumber ) {
    //         let resultFloat = eval(result);
    //         console.log(resultFloat)
    //     }



    return (
      <React.Fragment>
        <Result result = {this.state.result}/>

          <div>
              <Button name="AC" onClick={this.handleClick} />
              <Button name="+/-" onClickToggle={this.handleToggle} />
              <Button name="%" onClick={this.handleClick} />
              <Button name="÷" onClick={this.handleClick}  />
          </div>
          <div>
              <Button name="7" onClick={this.handleClick} />
              <Button name="8" onClick={this.handleClick} />
              <Button name="9" onClick={this.handleClick} />
              <Button name="x" onClick={this.handleClick}  />
          </div>
          <div>
              <Button name="4" onClick={this.handleClick} />
              <Button name="5" onClick={this.handleClick} />
              <Button name="6" onClick={this.handleClick} />
              <Button name="-" onClick={this.handleClick}  />
          </div>
          <div>
              <Button name="1" onClick={this.handleClick} />
              <Button name="2" onClick={this.handleClick} />
              <Button name="3" onClick={this.handleClick} />
              <Button name="+" onClick={this.handleClick}  />
          </div>
          <div>
              <Button name="0" onClick={this.handleClick}  />
              <Button name="." onClick={this.handleClick} />
              <Button name="=" onClickEqual={this.handleEqual}  />
          </div>
      </React.Fragment>
    );
  }
}

export default Content;
