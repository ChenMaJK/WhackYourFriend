import React, { Component } from 'react';
import css from './EX.css';
import { clearInterval,setTimeout, setInterval } from 'timers';

let interval;
export default class EX extends Component {
    constructor(props){
        super(props);
        this.state = {
            isShowEX:0
        }

        setTimeout(()=>{this.random()},0);
        // this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
    }
    random(){
        setInterval(()=>{
            if(this.props.isBegin){
                console.log("im random");
                let randomNum = Math.floor(Math.random()*10+1);
                if(randomNum==6){
                    console.log("im ss");
                    this.setState({
                        isShowEX: 2
                    });
                    setTimeout(()=>{
                        this.setState({
                            isShowEX: 0
                        });
                    },800)
                }
            }else{
                return;
            }
        },1000);
    }
    checkEX(){
        return this.state.isShowEX;
    }
    render() {
        return (
                <div 
                    class ={"ex _"+this.state.isShowEX} 
                    // class="ex _2"
                >
                123
                </div>

        );
    }
}