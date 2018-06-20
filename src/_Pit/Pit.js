import React, { Component } from 'react';
import css from './pit.css';
import EX from './_EX/EX.js';
import Hint from './_Hint/Hint.js';
import { setTimeout } from 'timers';

export default class Pit extends Component {
    constructor(props){
        super(props);
        this.state={
            isHint:"no"
        }
    }
    handleClick(){
        this.props.whack();
        if(this.checkEX()){
            this.showHint();
        }
    }
    checkEX(){
        this.refs["ex"].setState({
            isShowEX:1
            })
        return 1;
    }
    showHint(){
        this.setState({
            isHint:"yes"
        })
        setTimeout(()=>this.setState({
                    isHint:"no"
                }),1000)
    }
    render() {
        return (
            <div  class="pitBox">
                <Hint visible={this.state.isHint}/>
                <div 
                    class="pit"  
                    onClick={() => this.handleClick()}
                >
                    <EX ref="ex"></EX>
                    <img class="pitImg" src="./assert/pit.png"/>
                </div>
            </div>
        );
    }
}