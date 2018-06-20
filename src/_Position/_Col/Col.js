import React, { Component } from 'react';
import css from './Col.css';

let className;
export default class Col extends Component {
    constructor(props){
        super(props);
        
        
        className = 
            "col"+
            " xs_"  + (this.props.width==undefined?"12":this.props.width) +
            " offset_" + (this.props.offset==undefined?"0":this.props.offset)
    }
    render() {
        return (
            <div class={className} >
                {this.props.children}
            </div>
        );
    }
}
