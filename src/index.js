// import React, { Component } from 'react';
// import { render } from 'react-dom';

// render(
//     <div>Hello React!</div>,
//     document.getElementById('app')
// );
import React from 'react';
import { render } from 'react-dom';

import css from './index.css';

import Col from '../src/_Position/_Col/Col';
import Row from '../src/_Position/_Row/Row';


import PitArea from '../src/_PitArea/PitArea';
import Score from '../src/_PitArea/_Score/Score';

import Pit from '../src/_PitArea/_Pit/Pit';
import Button from '../src/_PitArea/_Button/Button';

render(
    <div >
        <Row>
            <Col width="12"  >
                <PitArea/>
            </Col>
        </Row>
   </div>
    ,
    document.getElementById('app')
);
