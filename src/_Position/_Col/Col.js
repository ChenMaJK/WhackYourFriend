import React, { Component } from 'react';
import css from './Col.css';


export default class Col extends Component {
    constructor(props){
        super(props);
    
    }
    render() {
        return (
            <div class={ "col"+
            " xs_"  + (this.props.width==undefined?"12":this.props.width) +
            " offset_" + (this.props.offset==undefined?"0":this.props.offset)} >
                {this.props.children}
            </div>
        );
    }
}
