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
    render() {
    
        return (
            <div class={"hint "+this.state.isShowHint}>
                加一分
            </div>
        );
    }
}