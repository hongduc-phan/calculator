import React, { Component } from 'react';
import Button from "./Button";
import Result from "./Result";
import display from "../logic/display";
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

    componentDidMount() {
        if (this.state.name === undefined || isNaN(this.state.result)) {
            this.setState ({
                name:'',
                result: 0
            })
        }
        console.log('test')
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
        if (isNaN(this.state.result)) {
            this.setState ({
                result: 0
            })

        }

        if((this.state.name) === undefined ) {
            this.setState({
                name: 'haha'
            })
            console.log('test',this.state.name)
        }


        let name = this.state.name + display(value).toString()
        if (name === '0'){
            name = ''
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
            name: temp,
            checkIsNumber: true,
            result: temp2
        });
    }

    handleToggle = () => {

        this.activeToggle();
    }

    activeToggle = () => {

        let result = -1 * eval(this.state.name)
        let name = result.toString();

        this.setState({
            plusMinus: !this.state.plusMinus,
            result:  (result),
            name: name,
        });
        console.log('check')
    }

    handleClickAC = () => {
        this.setState({
            result:  0,
            name: '',
        });
    }

    handleClickFloating = () => {
        this.setState((prevState, props) => {
                return {
                    result: prevState.result * 0.1,
                    name: (prevState.result*0.1).toString()
                };
            });
    }

    render() {
        console.log('name',this.state.name)
        console.log('result',this.state.result)




    return (
      <React.Fragment>
        <Result result = {this.state.result}/>

          <div>
              <Button name="AC" handleClickAC={this.handleClickAC} />
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
              <Button name="." handleClickFloating={this.handleClickFloating} />
              <Button name="=" onClickEqual={this.handleEqual}  />
          </div>
      </React.Fragment>
    );
  }
}

export default Content;
