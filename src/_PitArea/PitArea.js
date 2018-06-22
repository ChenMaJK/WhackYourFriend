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
            life:3,
            score:0
        })
    }
    end(){
        alert("end");
        this.setState({
            isBegin:0,
            life:0,
            score:0
        })
    }
    readImg(){
        let url ;

        var preview = document.querySelector('img');
        var file    = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();
      
        reader.addEventListener("load", function () {
          preview.src = reader.result;
        }, false);

        if (file) {
            url = reader.readAsDataURL(file);
        }
      
        // $('#picture').faceDetection({
        //     complete: function (faces) {
        //         console.log(faces);
        //     }
        // });
    }
    render() {
        return (
            <div >
                <Row>
                    <img id="picture" src=""/>>
                    <Col width="6" >
                        isBegin:{this.state.isBegin}
                    </Col>
                    <Col width="6" >
                        leftLife:{this.state.life}
                    </Col>
                </Row>
                <Row>
                    <Col width="4" >
                        score:{this.state.score}
                    </Col>
                    <Col width="8" >
                        <Button click={()=>{this.begin()}}>开始</Button>
                        <Button click={()=>{this.end()}}>停止</Button>
                        <input id="imageReader"type="file" onChange={()=>{this.readImg()}}/>   
        
                    </Col>
                </Row>
                <div class="pitArea">
                    <Pit 
                        isBegin={this.state.isBegin} 
                        addScore = {()=>{this.addScore()}}
                        loseLife = {()=>{this.loseLife()}}
                        score = {this.state.score}
                    />
                    <Pit 
                        isBegin={this.state.isBegin} 
                        addScore = {()=>{this.addScore()}}
                        loseLife = {()=>{this.loseLife()}}
                        score = {this.state.score}
                    />
                    <Pit 
                        isBegin={this.state.isBegin} 
                        addScore = {()=>{this.addScore()}}
                        loseLife = {()=>{this.loseLife()}}
                        score = {this.state.score}
                    />
                    <Pit 
                        isBegin={this.state.isBegin} 
                        addScore = {()=>{this.addScore()}}
                        loseLife = {()=>{this.loseLife()}}
                        score = {this.state.score}
                    />
                    <Pit 
                        isBegin={this.state.isBegin} 
                        addScore = {()=>{this.addScore()}}
                        loseLife = {()=>{this.loseLife()}}
                        score = {this.state.score}
                    />
                    <Pit 
                        isBegin={this.state.isBegin} 
                        addScore = {()=>{this.addScore()}}
                        loseLife = {()=>{this.loseLife()}}
                        score = {this.state.score}
                    />
                    <Pit 
                        isBegin={this.state.isBegin} 
                        addScore = {()=>{this.addScore()}}
                        loseLife = {()=>{this.loseLife()}}
                        score = {this.state.score}
                    />
                    <Pit 
                        isBegin={this.state.isBegin} 
                        addScore = {()=>{this.addScore()}}
                        loseLife = {()=>{this.loseLife()}}
                        score = {this.state.score}
                    />
                    <Pit 
                        isBegin={this.state.isBegin} 
                        addScore = {()=>{this.addScore()}}
                        loseLife = {()=>{this.loseLife()}}
                        score = {this.state.score}
                    />
                    <Pit 
                        isBegin={this.state.isBegin} 
                        addScore = {()=>{this.addScore()}}
                        loseLife = {()=>{this.loseLife()}}
                        score = {this.state.score}
                    />
                    <Pit 
                        isBegin={this.state.isBegin} 
                        addScore = {()=>{this.addScore()}}
                        loseLife = {()=>{this.loseLife()}}
                        score = {this.state.score}
                    />
                    <Pit 
                        isBegin={this.state.isBegin} 
                        addScore = {()=>{this.addScore()}}
                        loseLife = {()=>{this.loseLife()}}
                        score = {this.state.score}
                    />
                    <Pit 
                        isBegin={this.state.isBegin} 
                        addScore = {()=>{this.addScore()}}
                        loseLife = {()=>{this.loseLife()}}
                        score = {this.state.score}
                    />
                    <Pit 
                        isBegin={this.state.isBegin} 
                        addScore = {()=>{this.addScore()}}
                        loseLife = {()=>{this.loseLife()}}
                        score = {this.state.score}
                    />
                    <Pit 
                        isBegin={this.state.isBegin} 
                        addScore = {()=>{this.addScore()}}
                        loseLife = {()=>{this.loseLife()}}
                        score = {this.state.score}
                    />
                    <Pit 
                        isBegin={this.state.isBegin} 
                        addScore = {()=>{this.addScore()}}
                        loseLife = {()=>{this.loseLife()}}
                        score = {this.state.score}
                    />
                </div>
            </div>
        );
    }
}