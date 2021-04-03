import React, { Component, cloneElement } from 'react';
import ReactDOM from 'react-dom';

export default class Test extends Component<{}, {count:number}>{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {count:1};
    }
    handleClick(e){
        this.setState({count: this.state.count+1});
        console.log(this)
    }
    render(){
        return(
            <div>
                <div onClick={this.handleClick}>{this.state.count}</div>
                <ChildElem count={this.state.count+10}></ChildElem>
            </div>
        );
    }
}
class ChildElem extends Component<{count:number}, {count:number}>{
    constructor(props){
        super(props);
        this.state = {count:props.count};
    }
    static defaultProps = {
        count: 0,
    };
    componentWillReceiveProps(nextProps){
        if("count" in nextProps){
            this.setState({count: nextProps.count+10})
        }
    }
    render(){
        return(
            <div>
                <a href="https://www.google.com">{this.state.count}</a>
            </div>
        );
    }
}