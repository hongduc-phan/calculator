import React, { Component } from 'react';
import Button from "./Button";
import Result from "./Result";
import display from "../logic/display";
import {returnNamebtn,isOperator} from "../logic/calc";

class Content extends Component {

    state = {
        result: 0,
        name:'',
        list: []
    }

    constructor(props) {
        super(props);
    }

    handleOnClick = (name) => {
        let paraName = name;
        console.log(paraName)
        this.addbtn2List(paraName)

    }

    addbtn2List = (name) => {




        if (this.state.list.length > 0) {
            if ((this.state.list[this.state.list.length - 1].name === 'operator')) { // last of elm list = operator
                if (!isOperator(name)) { // click = number
                    let addName = this.state.name + name.toString();
                    this.setState({
                        name: addName,
                        result: parseFloat(addName)
                    })
                    alert('1')
                    console.log(this.state.result)
                }

                else if (name === '='
                    && this.state.list[this.state.list.length - 1].value !== '='
                    && this.state.name !=='') {
                    const temp = [
                        {
                            name: 'number',
                            value: this.state.name
                        }
                    ];
                    this.setState((prevState, props) => {
                        return {
                            list: prevState.list.concat(temp)
                        }
                    });
                    this.setState({
                        name:''
                    })

                    alert('10')


                }

                else { // click = operator
                    if (name !== '=') {
                        if (name !== '=') {
                            if (this.state.name ) {
                                const temp = [
                                    {
                                        name: 'number',
                                        value: this.state.name
                                    },
                                    {
                                        name: 'operator',
                                        value: name
                                    }
                                ];

                                this.setState((prevState, props) => {
                                    return {
                                        list: prevState.list.concat(temp),
                                    }
                                });
                                this.setState({
                                    name: ''
                                })

                                alert('2')
                            }

                            else {
                                let temp = this.state.list.splice(this.state.list -1,1);
                                temp = temp.concat({
                                    name: 'operator',
                                    value: name
                                })
                                this.setState((prevState, props) => {
                                    return {
                                        list: temp

                                    }

                                });
                                this.setState({
                                    name:''
                                })
                                alert('3')
                            }
                        }
                    }


                }
            }


            else { // last list = number
                if (!isOperator(name) && name !== '=') { // click = number
                    let addName = this.state.name + name.toString();
                    this.setState({
                        name: addName,
                        result: parseFloat(addName)
                    })
                    alert('4')
                }
                else { // click = operator
                    if (this.state.name && name !== '=') {
                        let temp = [
                            {
                                name: 'number',
                                value: this.state.name
                            },
                            {
                                name: 'operator',
                                value: name
                            }
                        ];
                        this.setState( {
                            list:temp,
                            name: ''
                        });
                        alert('5')
                    }

                    else {
                        this.setState((prevState, props) => {
                            return {
                                list: prevState.list.concat({
                                    name: 'operator',
                                    value: name
                                }),
                            }

                        });
                        alert('6')
                    }
                }
            }
         }

         else { // list = empty
            if (!isOperator(name)) { // click = number
                let addName = this.state.name + name.toString();
                this.setState({
                    name: addName,
                    result: parseFloat(addName)
                })
                alert('7')
            }
            else { // click = operator
                if (this.state.name && name !== '=') {
                    let temp = [
                        {
                            name: 'number',
                            value: this.state.name
                        },
                        {
                            name: 'operator',
                            value: name
                        }
                    ];
                    this.setState({
                        list:temp,
                        name: ''
                    });
                    alert('8')
                }

                // else {
                //     this.setState((prevState, props) => {
                //         return {
                //             list: prevState.list.concat({
                //                 name: 'operator',
                //                 value: name
                //             }),
                //         }
                //
                //     });
                //     alert('9')
                // }
            }
        }
    }

    handleUpdateResult = (result) => {
        if (this.state.list.length > 0) {
            if (this.state.list[this.state.list.length-1].name === 'number') {
                console.log(this.state.list)
                const temp2 = [...this.state.list];
                let temp3 = '';
                temp2.forEach((item) => {
                    temp3 += item.value.toString();
                })
                console.log(typeof (temp3))
                console.log( eval(temp3))
                result =  eval(temp3);
                return result
            }
        }

    }

    render() {
        console.log(this.state.result)

        return (
            <React.Fragment>
                <Result result = {this.state.result}
                        handleResult = {this.handleUpdateResult}/>

                <div>
                    <Button name="AC" onClick={this.handleOnClick} />
                    <Button name="+/-" onClick={this.handleOnClick} />
                    <Button name="%" onClick={this.handleOnClick} />
                    <Button name="÷" onClick={this.handleOnClick}  />
                </div>
                <div>
                    <Button name="7" onClick={this.handleOnClick} />
                    <Button name="8" onClick={this.handleOnClick} />
                    <Button name="9" onClick={this.handleOnClick} />
                    <Button name="x" onClick={this.handleOnClick}  />
                </div>
                <div>
                    <Button name="4" onClick={this.handleOnClick} />
                    <Button name="5" onClick={this.handleOnClick} />
                    <Button name="6" onClick={this.handleOnClick} />
                    <Button name="-" onClick={this.handleOnClick}  />
                </div>
                <div>
                    <Button name="1" onClick={this.handleOnClick} />
                    <Button name="2" onClick={this.handleOnClick} />
                    <Button name="3" onClick={this.handleOnClick} />
                    <Button name="+" onClick={this.handleOnClick}  />
                </div>
                <div>
                    <Button name="0" onClick={this.handleOnClick}  />
                    <Button name="." onClick={this.handleOnClick} />
                    <Button name="=" onClick={this.handleOnClick}  />
                </div>
            </React.Fragment>
        );
    }
}

export default Content;
