import React, { Component } from 'react';
import css from './pit.css';
import EX from './_EX/EX.js';
import Hint from './_Hint/Hint.js';
import { setTimeout } from 'timers';

export default class Pit extends Component {
    constructor(props){
        super(props);
        this.state={
            isHint:"no",
        }
    }
    handleClick(e){
        e.preventDefault();

        if(this.refs["ex"].checkEX()){
            this.props.addScore();
            this.setState({
                isHint:"yes"
            })
            setTimeout(()=>this.setState({
                isHint:"no"
            }),1000)
        }else{
            this.props.loseLife();
        }
    }
    render() {
        return (
            <div class="pitBox">
                <Hint visible={this.state.isHint}/>
                <div 
                    class="pit"  
                    onClick={(e) => this.handleClick(e)}
                >
                    <EX isBegin={this.props.isBegin} ref="ex"></EX>
                    <img class="pitImg" src="./assert/pit.png"/>
                </div>
            </div>
        );
    }
}