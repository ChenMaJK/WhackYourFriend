import React, { Component } from 'react';
import css from './EX.css';
import { clearInterval,setTimeout, setInterval } from 'timers';
// import man from './man.jpg';

let interval;
export default class EX extends Component {
    constructor(props){
        super(props);
        this.state = {
            isShowEX:0,
            speed:2000
        }

        setTimeout(()=>{this.random()},0);
    }
    changeSpeed(flag){
        if(this.state.speed-flag*500>0){
            this.setState({
                speed: this.state.speed-flag*300
            })
        }

    }
    handleClick(e){
        e.preventDefault();

        if(this.state.isShowEX){
            this.props.sphering(e);
            this.props.addScore();
            this.props.showHint();
        }else{
            console.log("lose")
            this.props.loseLife();
        }
    }
    render() {
        return (
            <div 
                class="exDiv"
                onClick={(e) => this.handleClick(e)}
            >
                <img
                src={this.props.exUrl}
                class ={"ex  _"+this.state.isShowEX} 
                style = {{background:"exUrl"}}
                
                />
            </div>

        );
    }
    random(){
        interval = setInterval(()=>{
            if(this.props.isBegin){
                let randomNum = Math.floor(Math.random()*10+1);
                if(randomNum==6){
                    this.setState({
                        isShowEX: 2
                    });
                    setTimeout(()=>{
                        this.setState({
                            isShowEX: 0
                        });
                    },this.state.speed)
                }
            }else{
                return;
            }
        },1000);
    }
}