import React, { Component } from 'react';
import css from './Hint.css';

export default class Hint extends Component {
    constructor(props){
        super(props);
        this.state={
            isShowHint:"no"
        }
    }
    showHint(){
        this.setState({
            isShowHint:"yes"
        })
        setTimeout(()=>{
            this.setState({
                isShowHint:"no"
            })
        },1000)
    }
    randomWord(){
        let arr = [
            "求求你原谅我",
            "我配不上你",
            "嘤嘤嘤",
            "我是王八蛋",
            "我错也",
            "放过我",
            "你最美"
        ]
        return arr[Math.floor(Math.random()*arr.length)];
    }
    render() {
    
        return (
            <div class={"hint "+this.state.isShowHint}>
                {this.randomWord()}
                <div class="trangle">
                </div>
            </div>
        );
    }
}