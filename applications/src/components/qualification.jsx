import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { TextField, Button } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import {Stepper} from 'react-stepper-horizontal'
import Steppers from '../components/stepper';
import { connect } from 'react-redux';
import { NEXT_PERSONAL, INPUT_NAME, INPUT_FNAME, INPUT_LNAME, INPUT_EMAIL, NUMBER, DATE } from '../constants/actionTypes';
import Qualification from './qualification';
import { withRouter } from "react-router-dom"
import DatePicker from 'react-datepicker';
import InputAdornment from '@material-ui/core/InputAdornment';


   
class Personal extends Component {
    constructor(props) {
        super(props)
       

    }
   

    handleChange() {
        // this.props.moveQualification()
        this.props.callbackFromParent('shahazad');
    }

    handlePrevious() {
        this.props.callbackFromParent('previous')
    }
   
    
    render() {
       
        
        return (
            
            <div className="mainDiv">
               
                <div className="mainCard">
               
                    <Card className="styleCard">
                    <div className="myStyle">
                    <div className="insideStyle">Step 2</div>
                </div>
                        <div className="inputBase">
                        
                            <div className="sscinputText">
                            <div className="sscFile">
                            <div>SSC</div>
                            <div className="fileSSC"><input type="file"/></div>
                            
                            </div>
                           
                            <div className="sscFile">
                            <div className="hscFile">
                            <div>HSC/Diploma</div><div className="fileHSC"><input type="file"/></div>
                            </div>
                            </div>

                            <div className="sscFile">
                            <div className="beFile">
                            <div>BE</div><div className="fileBE"><input type="file"/></div>
                            </div>
                            </div>
                            
                            
                          
                        
                               
                              

                            </div>
                          

                        </div>
                        
                     
                        <div className="inputButtons">
                            <div className="buttonPrevious">
                                <Button variant="contained" color="primary" Previous onClick={() => this.handlePrevious()}>
                                    Previous
                                </Button>
                            </div>

                            <div className="buttonNext">
                                <Button variant="contained" color="primary" onClick={() => this.handleChange()}>
                                    Next
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>

            </div>


        )
    }
} export default Personal;
