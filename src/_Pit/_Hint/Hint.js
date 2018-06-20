import React, { Component } from 'react';
import css from './Hint.css';

export default class Hint extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div class={"hint "+this.props.visible}>
                HHH
            </div>
        );
    }
}