import React, { Component } from 'react';
import css from './Row.css';

export default class Row extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (

            <div class="row">
                {this.props.children}
            </div>
        );
    }
}
