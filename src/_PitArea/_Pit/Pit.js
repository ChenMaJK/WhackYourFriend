import React, { Component } from 'react';
import css from './pit.css';
import EX from './_EX/EX.js';
import Hint from './_Hint/Hint.js';
import { setTimeout } from 'timers';

export default class Pit extends Component {
    constructor(props){
        super(props);
        this.state={
            isShowHint:"no",
        }
    }
    showHint(){
        this.refs.hint.showHint();
    }
    changeSpeed(flag){
        this.refs.ex.changeSpeed(flag);
    }
    render() {
        return (
            <div class="pitBox">
                <Hint ref="hint"/>
                <EX 
                    ref="ex" 
                    isBegin={this.props.isBegin} 
                    addScore = {()=>{this.props.addScore();this.changeSpeed(1)}}
                    loseLife = {()=>{this.props.loseLife();this.changeSpeed(-1)}}
                    showHint = {()=>{this.showHint()}}
                    socre = {this.props.score}
                />
                <img class="pitImg" src="./assert/pit.png"/>
            </div>

        );
    }
}