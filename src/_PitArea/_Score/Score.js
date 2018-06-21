import React, { Component } from 'react';
import css from './Score.css';

export default class Score extends Component {
    constructor(props){
        super(props);
        this.state={
            score:0
        }
    }
    render() {
        return (
            <div>
                score:{this.state.score}
            </div>
        );
    }
}