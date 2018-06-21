import React, { Component } from 'react';
import css from './PitArea.css';
import Pit from './_Pit/Pit';
import Col from '../../src/_Position/_Col/Col';
import Row from '../../src/_Position/_Row/Row';
import Score from './_Score/Score';
import Button from './_Button/Button';

export default class PitArea extends Component {
    constructor(props){
        super(props);
        this.state = {
            // isWhack:0,
            isBegin:0,
            score:0,
            life:3,
        }
        this.loseLife = this.loseLife.bind(this)
        this.addScore = this.addScore.bind(this)
    }
    addScore(){
        // this.setState({isWhack:1})
        this.setState({score:this.state.score+1})
    }
    loseLife(){
        if(this.state.isBegin){
            if(this.state.life!=0){
                this.setState({life:this.state.life-1})
            }else{
                this.end();
            }
           
        }

    }
    begin(){
        alert("begin");
        this.setState({
            isBegin:1,
            life:3
        })
    }
    end(){
        alert("end");
        this.setState({isBegin:0})
    }
    render() {
        return (
            <div  class="pitArea">
                isBegin:{this.state.isBegin}
                leftLife:{this.state.life}
                <Row>
                    <Col width="4" >
                        score:{this.state.score}
                    </Col>
                    <Col width="4" >
                        <Button click={()=>{this.begin()}}>开始</Button>
                    </Col>
                    <Col width="4" >
                        <Button click={()=>{this.end()}}>停止</Button>
                    </Col>
                </Row>
                <Pit 
                    isBegin={this.state.isBegin} 
                    addScore = {()=>{this.addScore()}}
                    loseLife = {()=>{this.loseLife()}}
                />
                <Pit 
                    isBegin={this.state.isBegin} 
                    addScore = {()=>{this.addScore()}}
                    loseLife = {()=>{this.loseLife()}}
                />
                <Pit 
                    isBegin={this.state.isBegin} 
                    addScore = {()=>{this.addScore()}}
                    loseLife = {()=>{this.loseLife()}}
                />

                <Pit 
                    isBegin={this.state.isBegin} 
                    addScore = {()=>{this.addScore()}}
                    loseLife = {()=>{this.loseLife()}}
                />
                <Pit 
                    isBegin={this.state.isBegin} 
                    addScore = {()=>{this.addScore()}}
                    loseLife = {()=>{this.loseLife()}}
                />
                <Pit 
                    isBegin={this.state.isBegin} 
                    addScore = {()=>{this.addScore()}}
                    loseLife = {()=>{this.loseLife()}}
                />

                <Pit 
                    isBegin={this.state.isBegin} 
                    addScore = {()=>{this.addScore()}}
                    loseLife = {()=>{this.loseLife()}}
                />
                <Pit 
                    isBegin={this.state.isBegin} 
                    addScore = {()=>{this.addScore()}}
                    loseLife = {()=>{this.loseLife()}}
                />
                <Pit 
                    isBegin={this.state.isBegin} 
                    addScore = {()=>{this.addScore()}}
                    loseLife = {()=>{this.loseLife()}}
                />
            </div>
        );
    }
}