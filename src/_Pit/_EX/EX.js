import React, { Component } from 'react';
import css from './EX.css';

export default class EX extends Component {
    constructor(props){
        super(props);
        this.state = {
            isShowEX:0
        }
    }
    handleClick(e){
        e.preventDefault();
        console.log('The link was clicked.');
    }
    checkClick(){
        return this.state.isShowEX;
    }
    random(){
        random = Math.floor(Math.random()*10+1);
        if(random==6){
            this.setState({
                isShowEX:1
            })
        }
    }
    render() {
        return (
            
            <div 
                class ="ex" 
                onClick={(e) => this.handleClick(e)}
            >
            {this.state.isShowEX}
            </div>
        );
    }
}