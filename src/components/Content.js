import React, { Component } from 'react';
import Button from "./Button";
import Result from "./Result";

class Content extends Component {

    state = {
    result: 0,
    name:'demo'
    }

    constructor(props) {
          super(props);
    }

    handleClick = (value) =>{
        this.setState({
            name: value
        })
    }

    render() {
    console.log(this.state.name)

    return (
      <React.Fragment>
        <Result result = {this.state.name}/>

          <div>
              <Button name="AC" onClick={this.handleClick} />
              <Button name="+/-" onClick={this.handleClick} />
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
              <Button name="=" onClick={this.handleClick}  />
          </div>
      </React.Fragment>
    );
  }
}

export default Content;
