import React, { Component } from 'react';
import css from './PitArea.css';
import Pit from '../Pit';

export default class PitArea extends Component {
    constructor(props){
        super(props);
        this.state = {
            isWhack:0
        }
        this.whack = this.whack.bind(this)
    }
    whack(){
        this.setState({isWhack:1})
    }
    render() {
        return (
            <div 
                class="pitArea"
            >
                <Pit whack = {()=>{this.whack()}}/>
                <Pit whack = {()=>{this.whack()}}/>
                <Pit whack = {()=>{this.whack()}}/>
                <Pit whack = {()=>{this.whack()}}/>
                <Pit whack = {()=>{this.whack()}}/>
                <Pit whack = {()=>{this.whack()}}/>
                <Pit whack = {()=>{this.whack()}}/>
                <Pit whack = {()=>{this.whack()}}/>
            
            </div>
        );
    }
}