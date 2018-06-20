// import React, { Component } from 'react';
// import { render } from 'react-dom';

// render(
//     <div>Hello React!</div>,
//     document.getElementById('app')
// );
import React from 'react';
import { render } from 'react-dom';
import Col from '../src/_Position/_Col/Col';
import Row from '../src/_Position/_Row/Row';
import Pit from '../src/_Pit/Pit';
import PitArea from '../src/_Pit/_PitArea/PitArea';
render(
    <div >
        <Row>
            <Col offset="2"width="8" >
                <PitArea/>
            </Col>
        </Row>
   </div>
    ,
    document.getElementById('app')
);
