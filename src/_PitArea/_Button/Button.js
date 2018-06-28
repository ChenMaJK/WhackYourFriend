import React, { Component } from 'react';
import css from './Button.css';

export default class Button extends Component {
    constructor(props){
        super(props);
        //
        this.state = {
            class: "button"
        };
        //绑定点击事件
        this.handleClick = this.handleClick.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);

 
    }
    render() {
        return this.getChild();
    }


    getChild (){
        let Child = (
            <a 
                onMouseEnter={this.onMouseEnter} 
                onMouseLeave={this.onMouseLeave}
                class={this.state.class}
            >
                {this.props.children}
            </a>
        )   
        if(this.props.href!=undefined){
            Child = (
                <a 
                    onMouseEnter={this.onMouseEnter} 
                    onMouseLeave={this.onMouseLeave}
                    class={this.state.class}
                    href={this.props.href}
                >
                    {this.props.children}
                </a>
            )   
        }
        if(this.props.click!=undefined){
            Child = (
                <button 
                    onMouseEnter={this.onMouseEnter} 
                    onMouseLeave={this.onMouseLeave}
                    class={this.state.class+" "}
                    onClick={this.props.click}
                >
                    {this.props.children}
                </button>
            )
        }
        return Child;
    }
    handleClick (){
        this.props.click();
    }
    onMouseEnter (){
        this.setState(prevState =>({
            class : this.state.class+ " hover"
        }));
    }
    onMouseLeave(){
        this.setState(prevState =>({
            class : this.state.class.replace(" hover","")
        }));
    }
}
