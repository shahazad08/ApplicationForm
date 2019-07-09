import React, { Component } from 'react';
import Personal from './personal';
import { TextField, Button, Card } from '@material-ui/core';
import Steppers from '../components/stepper';
class Home extends Component {
    render() {
        return (
            <div className="myDiv">

                <Steppers />

                {/* <Personal/> */}

            </div>
        )
    }
} export default Home;
