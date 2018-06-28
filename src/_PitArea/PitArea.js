import React, { Component } from 'react';
import css from './PitArea.css';
import Pit from './_Pit/Pit';
import Col from '../../src/_Position/_Col/Col';
import Row from '../../src/_Position/_Row/Row';
import Score from './_Score/Score';
import Button from './_Button/Button';
import { setTimeout } from 'timers';
// var exImgSrc;
export default class PitArea extends Component {
    constructor(props){
        super(props);
        this.state = {
            // isWhack:0,
            isBegin:0,
            score:0,
            life:3,
            exImgSrc:""
        }
        this.loseLife = this.loseLife.bind(this)
        this.addScore = this.addScore.bind(this)
        this.readImg = this.readImg.bind(this)
        this.sphering = this.sphering.bind(this)
    }
    addScore(){
        // this.setState({isWhack:1})
        this.setState({score:this.state.score+1})
    }
    loseLife(){
        console.log("PA:lose")
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
        let that = this;


        let file    = document.querySelector('input[type=file]').files[0];
        let reader  = new FileReader();
        reader.addEventListener("load",() => {
            //赋值之前读取的图片
            let preview = document.querySelector('#picture');
            preview.src = reader.result;

            //取画布
            let cvs = document.querySelector('canvas');
            var ctx = cvs.getContext('2d');
            let imgObj2 = new Image();
            imgObj2.src = "./assert/panda.jpg";
            imgObj2.onload = () => {
                //加脸
                ctx.drawImage(imgObj2, 0, 0);
                let imgObj = new Image();
                imgObj.src = reader.result;
                imgObj.onload = function(){
                    //jq读取人脸的插件
                    $('#picture').faceDetection({
                        complete: function (faces) {
                            if (faces.length == 0) { //说明没有检测到人脸
                                alert("无人脸")
                            } else {
                                for (var i in faces) {
                                    let w = faces[i].width;
                                    w-=w/10;
                                    let h = faces[i].height;
                                    h-=h/10;
                                    let x = faces[i].x;
                                    x+=w/10;
                                    let y = faces[i].y;
                                    y+=h/5;
                                    
                                    ctx.drawImage( imgObj,x,y,w,h,55,40,90,90);
                                    var imgData =ctx.getImageData(0, 0, cvs.width, cvs.height);
                                    var pxData = imgData.data;
 
                                    for(var i = 0; i < cvs.width * cvs.height; i++){
                                        //二值化
                                        var r = pxData[4*i+0];
                                        var g = pxData[4*i+1];
                                        var b = pxData[4*i+2];
                                        //计算二值化的公式
                                        var grey = 0.3*r + 0.59*g + 0.11*b;
                                        if (grey<90){
                                            grey=0;
                                        }else{
                                            grey=255;
                                        }
                                        pxData[4*i+0] = grey;
                                        pxData[4*i+1] = grey;
                                        pxData[4*i+2] = grey;
                                        
                                    }
                                    ctx.putImageData(imgData, 0, 0);

                                    that.setState({
                                        exImgSrc: document.getElementById("canvas").toDataURL("image/png")
                                    })

                                }
                            }
                        },
                        error: function (code, message) {
                            alert("complete回调函数出错"+message)
                        }
                    });
                }   
            } 
        }, false);

        if (file) {
            url = reader.readAsDataURL(file);
        }

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
    sphering(e){
        //取点击的点
        let cx = e.pageX - $(e.target).offset().left;
        let cy = e.pageY - $(e.target).offset().top;
        cx = (cx/e.target.width)*200
        cy = (cy/e.target.height)*200
        //取图像
        // let imgObj = new Image();
        // imgObj.src = this.state.exImgSrc;
        // imgObj.onload = () =>{
    
        // }
        //取canvas以及其Data
        let cvs = document.querySelector('#canvas');
        let ctx = cvs.getContext('2d');
        let imgData =ctx.getImageData(0, 0, cvs.width, cvs.height);
        let pxData = imgData.data;

        let cvs2 = document.createElement('canvas');
        cvs2.setAttribute("width",cvs.width);
        cvs2.setAttribute("height",cvs.height);
        let ctx2 = cvs2.getContext('2d');
        let imgData2 =ctx2.getImageData(0, 0, cvs2.width, cvs2.height);
        let pxData2 = imgData2.data;


        //初始化变量
        let r=250;
        let dx=0,dy=0,dist=0; // dx，dy XY轴距离 | dist距离
        let nx=0,ny=0,npo=0;//nx,ny新的XY轴距离 |npo新的位置 
        let po=0;//po当前处理位置
        for(let row = 0; row < cvs.height; row++){
            for(let col = 0; col < cvs.width; col++){
                po = (row*cvs.width+col)*4
                dx = col-cx
                dy = row-cy
                dist = Math.sqrt(dx*dx+dy*dy)
                pxData2[po+3] = 255
                if(dist<r){
                    //计算新位置
                    nx = 3.1*dx/2;
                    ny = 2.5*dy/2;
                    nx=nx*(dist/r)
                    ny=ny*(dist/r)
                    nx =Math.round( nx+cx );
                    ny =Math.round( ny+cy);

                    npo = (ny*cvs.width+nx)*4
                    if( nx>cvs.width||nx<0){
                        pxData2[po+0] = 255
                        pxData2[po+1] = 255
                        pxData2[po+2] = 255
                    }
                    else if( ny>cvs.height||ny<0){
                        pxData2[po+0] = 255
                        pxData2[po+1] = 255
                        pxData2[po+2] = 255
                     }else{
                        pxData2[po+0] = pxData[npo+0]
                        pxData2[po+1] = pxData[npo+1]
                        pxData2[po+2] = pxData[npo+2]
                     }
                }else{
                    pxData2[po+0] = pxData[po+0]
                    pxData2[po+1] = pxData[po+1]
                    pxData2[po+2] = pxData[po+2]
                }

            } 
        }

        let image = $(e.target)
        ctx.putImageData(imgData2, 0, 0)
        image.attr("src",cvs.toDataURL("image/png"));
        ctx.putImageData(imgData, 0, 0);

        setTimeout(()=>{
            image.attr("src",cvs.toDataURL("image/png"));
        },500);
    }
    render() {
        return (
            <div class="show_window">
                {/* <canvas id="canvas" width="200" height="200"></canvas> */}
                {/* <Row>
                    <div id="test">
                        <img id="picture" src=""/>
                    </div>
                    
                    <Col width="6" >
                        isBegin:{this.state.isBegin}
                    </Col>
                    
                </Row> */}
                <Row>
                    <Col width="3" >
                    <div class="score_life_show">
                        <Row>  <Button click={()=>{this.begin()}} className ="buttons_length">开始</Button> </Row>
                        <Row>  <Button click={()=>{this.end()}} className="buttons_length">停止</Button></Row>
                        <Row>  <input id="imageReader"type="file" onChange={()=>{this.readImg()}} class="buttons_length"/> </Row>  
                    </div>  
                    </Col>
                    <Col width="6">
                        <div class="pitArea">
                            <Pit 
                                isBegin={this.state.isBegin} 
                                addScore = {()=>{this.addScore()}}
                                loseLife = {()=>{this.loseLife()}}
                                score = {this.state.score}
                                exUrl = {this.state.exImgSrc}
                                sphering = {(e)=>{this.sphering(e)}}
                            />
                            <Pit 
                                isBegin={this.state.isBegin} 
                                addScore = {()=>{this.addScore()}}
                                loseLife = {()=>{this.loseLife()}}
                                score = {this.state.score}
                                exUrl = {this.state.exImgSrc}
                                sphering = {(e)=>{this.sphering(e)}}
                            />
                            <Pit 
                                isBegin={this.state.isBegin} 
                                addScore = {()=>{this.addScore()}}
                                loseLife = {()=>{this.loseLife()}}
                                score = {this.state.score}
                                exUrl = {this.state.exImgSrc}
                                sphering = {(e)=>{this.sphering(e)}}
                            />
                            <Pit 
                                isBegin={this.state.isBegin} 
                                addScore = {()=>{this.addScore()}}
                                loseLife = {()=>{this.loseLife()}}
                                score = {this.state.score}
                                exUrl = {this.state.exImgSrc}
                                sphering = {(e)=>{this.sphering(e)}}
                            />
                            <Pit 
                                isBegin={this.state.isBegin} 
                                addScore = {()=>{this.addScore()}}
                                loseLife = {()=>{this.loseLife()}}
                                score = {this.state.score}
                                exUrl = {this.state.exImgSrc}
                                sphering = {(e)=>{this.sphering(e)}}
                            />
                            <Pit 
                                isBegin={this.state.isBegin} 
                                addScore = {()=>{this.addScore()}}
                                loseLife = {()=>{this.loseLife()}}
                                score = {this.state.score}
                                exUrl = {this.state.exImgSrc}
                                sphering = {(e)=>{this.sphering(e)}}
                            />
                            <Pit 
                                isBegin={this.state.isBegin} 
                                addScore = {()=>{this.addScore()}}
                                loseLife = {()=>{this.loseLife()}}
                                score = {this.state.score}
                                exUrl = {this.state.exImgSrc}
                                sphering = {(e)=>{this.sphering(e)}}
                            />
                            <Pit 
                                isBegin={this.state.isBegin} 
                                addScore = {()=>{this.addScore()}}
                                loseLife = {()=>{this.loseLife()}}
                                score = {this.state.score}
                                exUrl = {this.state.exImgSrc}
                                sphering = {(e)=>{this.sphering(e)}}
                            />
                            <Pit 
                                isBegin={this.state.isBegin} 
                                addScore = {()=>{this.addScore()}}
                                loseLife = {()=>{this.loseLife()}}
                                score = {this.state.score}
                                exUrl = {this.state.exImgSrc}
                                sphering = {(e)=>{this.sphering(e)}}
                            />
                            <Pit 
                                isBegin={this.state.isBegin} 
                                addScore = {()=>{this.addScore()}}
                                loseLife = {()=>{this.loseLife()}}
                                score = {this.state.score}
                                exUrl = {this.state.exImgSrc}
                                sphering = {(e)=>{this.sphering(e)}}
                            />
                            <Pit 
                                isBegin={this.state.isBegin} 
                                addScore = {()=>{this.addScore()}}
                                loseLife = {()=>{this.loseLife()}}
                                score = {this.state.score}
                                exUrl = {this.state.exImgSrc}
                                sphering = {(e)=>{this.sphering(e)}}
                            />
                            <Pit 
                                isBegin={this.state.isBegin} 
                                addScore = {()=>{this.addScore()}}
                                loseLife = {()=>{this.loseLife()}}
                                score = {this.state.score}
                                exUrl = {this.state.exImgSrc}
                                sphering = {(e)=>{this.sphering(e)}}
                            />
                            <Pit 
                                isBegin={this.state.isBegin} 
                                addScore = {()=>{this.addScore()}}
                                loseLife = {()=>{this.loseLife()}}
                                score = {this.state.score}
                                exUrl = {this.state.exImgSrc}
                                sphering = {(e)=>{this.sphering(e)}}
                            />
                            <Pit 
                                isBegin={this.state.isBegin} 
                                addScore = {()=>{this.addScore()}}
                                loseLife = {()=>{this.loseLife()}}
                                score = {this.state.score}
                                exUrl = {this.state.exImgSrc}
                                sphering = {(e)=>{this.sphering(e)}}
                            />
                            <Pit 
                                isBegin={this.state.isBegin} 
                                addScore = {()=>{this.addScore()}}
                                loseLife = {()=>{this.loseLife()}}
                                score = {this.state.score}
                                exUrl = {this.state.exImgSrc}
                                sphering = {(e)=>{this.sphering(e)}}
                            />
                            <Pit 
                                isBegin={this.state.isBegin} 
                                addScore = {()=>{this.addScore()}}
                                loseLife = {()=>{this.loseLife()}}
                                score = {this.state.score}
                                exUrl = {this.state.exImgSrc}
                                sphering = {(e)=>{this.sphering(e)}}
                            />
                        </div>
                    </Col>
                    <Col width="3" >
                        <div class="buttons">
                            <Row class="buttons_length"> score:{this.state.score}</Row>
                            <Row class="buttons_length"> leftLife:{this.state.life}</Row>
                        </div>
                        <div id="test">
                            <img id="picture" src="" style={{height:200}}/>
                        </div>
                        <canvas 
                            id="canvas" 
                            width="200" 
                            height="200" 
                            onClick={(e)=>{this.sphering(e) }}
                        ></canvas>
                    </Col>
                    
                </Row>
        
            </div>
        );
    }
}