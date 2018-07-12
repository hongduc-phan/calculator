import React, { Component } from 'react';
import Button from "./Button";
import Result from "./Result";
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
        this.addbtn2List(paraName);

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
                    console.log(this.state.result)
                }

                else if (name === '='
                    && this.state.list[this.state.list.length - 1].value !== '='
                    && this.state.name !=='') {

                    const temp2 = [...this.state.list];
                    let temp3 = '';
                    temp2.forEach((item) => {
                        temp3 += item.value.toString();
                    });

                    temp3 += this.state.name
                    let temp4 = eval(temp3);

                    const temp = [
                        {
                            name: 'number',
                            value: this.state.name
                        }
                    ];
                    this.setState((prevState, props) => {
                        return {
                            list: prevState.list.concat(temp),
                            result: parseFloat(temp4)
                        }
                    });



                    this.setState({
                        name:'',
                    })
                }

                else { // click = operator
                    if (name !== '=') {
                        if (name !== '=') {
                            if (this.state.name ) { // add number via name = state.name
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

                            }

                            else {
                                alert(this.state.list -1)
                                let temp = this.state.list;
                                //temp = temp.splice(this.state.list -1,1);
                                temp.pop();
                                console.log(temp)
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
                    }

                    else {
                        if (name !== '=') {
                            this.setState((prevState, props) => {
                                return {
                                    list: prevState.list.concat({
                                        name: 'operator',
                                        value: name
                                    }),
                                }

                            });
                        }

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

    handleUpdateResult = () => {
        if (this.state.list.length > 0) {
            if (this.state.list[this.state.list.length-1].name === 'number') {
                const temp2 = [...this.state.list];
                let temp3 = '';
                temp2.forEach((item) => {
                    temp3 += item.value.toString();
                })
                return eval(temp3)
            }
        }
    }

    handleOnClickFloat = () => {
        this.setState((prevState) =>{
            return {
                result: prevState.result *0.1,
            }
        })

        if (this.state.list.length > 0) {
            const temp = [
                {
                    name: 'operator',
                    value: '*'
                },
                {
                    name: 'number',
                    value: 0.1
                },
            ];

            this.setState((prevState, props) => {
                return {
                    list: prevState.list.concat(temp),
                    name: ''
                }
            });
        }

        else if (this.state.name && !isOperator(this.state.name) ) {
            const temp = [

                {
                    name: 'number',
                    value: parseFloat(this.state.name) * 0.1,
                },

            ];

            this.setState((prevState, props) => {
                return {
                    list: temp,
                    name:''
                }
            });
        }

        else {
            const temp = [

                {
                    name: 'number',
                    value: 0
                },

            ];

            this.setState((prevState, props) => {
                return {
                    list: temp,
                    name:''
                }
            });
        }
    }

    onClickAC = () => {
        this.setState({
            name:'',
            result: 0,
            list: []
        })
    }

    onClickCE = () => {
        if (this.state.list.length > 0) {
            let temp = this.state.list;
            temp.pop();
            this.setState({
                name:'',
                list: temp,
            })
        }

        else {
            this.setState({
                name:'',
                list: [],
                result: 0
            })
        }

    }

    render() {

        return (
            <React.Fragment>
                <Result result = {this.state.result}
                        handleResult = {this.handleUpdateResult}/>

                <div>
                    <Button name="AC" onClickAC={this.onClickAC} />
                    <Button name="+/-" onClick={this.handleOnClick} />
                    <Button name="CE" onClickCE={this.onClickCE} />
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
                    <Button name="." onClickFloat={this.handleOnClickFloat} />
                    <Button name="=" onClick={this.handleOnClick}  />
                </div>
            </React.Fragment>
        );
    }
}

export default Content;
