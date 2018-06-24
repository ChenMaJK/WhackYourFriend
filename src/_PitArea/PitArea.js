import React, { Component } from 'react';
import css from './PitArea.css';
import Pit from './_Pit/Pit';
import Col from '../../src/_Position/_Col/Col';
import Row from '../../src/_Position/_Row/Row';
import Score from './_Score/Score';
import Button from './_Button/Button';
import { setTimeout } from 'timers';

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
        this.getFace = this.getFace.bind(this)
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

        var preview = document.querySelector('#picture');
        var file    = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();
        reader.addEventListener("load",() => {
            preview.src = reader.result;

            let cvs = document.querySelector('canvas');
            var ctx = cvs.getContext('2d');

    
            let imgObj2 = new Image();
            imgObj2.src = "./assert/panda.jpg";
            imgObj2.onload = () => {
                ctx.drawImage(imgObj2, 0, 0);
                let imgObj = new Image();
                imgObj.src = reader.result;
                imgObj.onload = function(){
                   
                                // ctx.drawImage(this, 0, 0,1024,768);//改变图片的大小到1024*768
                    $('#picture').faceDetection({
                        complete: function (faces) {
                            if (faces.length == 0) { //说明没有检测到人脸
                                alert("无人脸")
                            } else {
                                console.log(faces)
                                for (var i in faces) {
                                    // this.draw(faces[i].x, faces[i].y, faces[i].width, faces[i].height);
                                    var rect = document.createElement('div');
                                    document.querySelector('#test').appendChild(rect);
                                    rect.classList.add('rect');
                                    // rect.style.display = "block";
                                    // rect.style.position = "absolute";
                                    rect.style.width = faces[i].width + 'px';
                                    rect.style.height = faces[i].height + 'px';
                                    rect.style.left = (preview.offsetLeft + faces[i].x) + 'px';
                                    rect.style.top = (preview.offsetTop + faces[i].y) + 'px';

                                    ctx.drawImage( imgObj, (preview.offsetLeft + faces[i].x), (preview.offsetTop + faces[i].y),faces[i].width,faces[i].height);//this即是imgObj,保持图片的原始大小：470*480
                                }
                            }
                        },
                        error: function (code, message) {
                            alert("complete回调函数出错"+message)
                        }
                    });

                    
                }   
            } 
            // console.log(url)
        }, false);

        if (file) {
            url = reader.readAsDataURL(file);
        }
        console.log(url)
        // $('#picture').faceDetection({
        //     complete: function (faces) {
        //         console.log(faces);
        //     }
        // });
    }
    getFace(){
        $('#picture').faceDetection({
            complete: function (faces) {
                if (faces.length == 0) { //说明没有检测到人脸
                    alert("无人脸")
                } else {
                    console.log(faces)
                    for (var i in faces) {
                        // this.draw(faces[i].x, faces[i].y, faces[i].width, faces[i].height);
                        var rect = document.createElement('div');
                        document.querySelector('#test').appendChild(rect);
                        rect.classList.add('rect');
                        // rect.style.display = "block";
                        // rect.style.position = "absolute";
                        rect.style.width = faces[i].width + 'px';
                        rect.style.height = faces[i].height + 'px';
                        rect.style.left = (preview.offsetLeft + faces[i].x) + 'px';
                        rect.style.top = (preview.offsetTop + faces[i].y) + 'px';
                    }
                }
            },
            error: function (code, message) {
                alert("complete回调函数出错"+message)
            }
        });
    }
    render() {
        return (
            <div >
                <canvas></canvas>
                <Row>
                    <div id="test">
                        <img id="picture" src=""/>
                    </div>
                    
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