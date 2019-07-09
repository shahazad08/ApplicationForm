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

const mapDispatchToProps = dispatch => ({
    moveQualification: () => dispatch({
        type: NEXT_PERSONAL
    }),
    inputName:(value)=>dispatch({
        type:INPUT_NAME,payload:value
    }),
    inputFname:(value)=>dispatch({
        type:INPUT_FNAME,payload:value
    }),
    inputLname:(value)=>dispatch({
        type:INPUT_LNAME,payload:value
    }),
    inputEmail:(value)=>dispatch({
        type:INPUT_EMAIL,payload:value
    }),
    inputNumber:(value)=>dispatch({
        type:NUMBER,payload:value
    }),
    inputDate:(date)=>dispatch({
        type:DATE,payload:date
    })
    
})

function mapStateToProps(state){
    
    return({
        personal: state.stepper.personal,
        // name:state.Personal.name
        // success:state.Note.success
    })
}
class Personal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            optional: "",
            nameError:"",
            fnameError:"",
            lnameError:"",
            emailError:"",
            phoneError:"",
            numberError:"",
            date:"",
            dateError:""
        }

    }
    handleNameChange(event){
       let a=event.target.value
        if(a.length===0){
            this.setState({
                nameError:"required"
            })}
        
    
        else if(a.length<=3){
            this.setState({
                nameError:"Name Should not be less than 3 char "
            })
        }
        else if(a.length>8){
            this.setState({
                nameError:"Name Should not more than 8 char"
            })
        }
        else{
            this.setState({
                nameError:""
            })
        }
        this.props.inputName(event.target.value)
    }
    handleFnameChange(event){
        let b=event.target.value
        if(b.length===0){
            this.setState({
                fnameError:"required"
            })}
            else if(b.length<=3){
                this.setState({
                    fnameError:"Name Should not be less than 3 char "
                })
            }
            else if(b.length>8){
                this.setState({
                    fnameError:"Name Should not more than 8 char"
                })
            }
            else{
                this.setState({
                    fnameError:""
                })
            }

        this.props.inputFname(event.target.value)
    }
    handleLnameChange(event){
        let c=event.target.value
        if(c.length===0){
            this.setState({
                lnameError:"required"
            })}

            else if(c.length<=3){
                this.setState({
                    lnameError:"Name Should not be less than 3 char "
                })
            }
            else if(c.length>8){
                this.setState({
                    lnameError:"Name Should not more than 8 char"
                })
            }
            else{
                this.setState({
                    lnameError:""
                })
            }
        this.props.inputLname(event.target.value)
    }

    handleEmailChange(event){
        let d=event.target.value
        if(d.length===0){
            this.setState({
                emailError:"required"
            })}
            else if((!d.includes("@") || (!d.includes(".")))){
                this.setState({
                    emailError:"Invalid"
                })
            }
            else if(d.length>=10){
                this.setState({
                    emailError:""
                })
            }
        this.props.inputEmail(event.target.value)
    }

    handlePhoneNumber(event){
        let e=event.target.value
        if(e.length===0){
            this.setState({
                phoneError:"required"
            })}
            else if(e.length<10){
                this.setState({
                    phoneError:" Only 10 Nos are required"
                })}
            else if(e.length>10){
                this.setState({
                    phoneError:"Min 10 Nos are required"
                })
            }
            else if(isNaN(e))
            {
                this.setState({
                    phoneError:"Enter Valid Nos Only"
                })
            }
            else if((e.charAt(0)!=9) && (e.charAt(0)!=8) && (e.charAt(0)!=7)){
                this.setState({
                    phoneError:"Numbers should start with 9,8,7"
                })
            }
            else{
                this.setState({
                    phoneError:""
                })
            }
        this.props.inputNumber(event.target.value)   
    }


    handleDateChange(event){
        console.log("Dateeeee",event.target.value);

        var todayDate=new Date();
        console.log("Today Date",todayDate);
       
        let date=event.target.value
        //  let date=date.toString()
      
       
        var year = String(date.substr(0, 4));
        var month = String(date.substr(5, 2)) ;
        var day = String(date.substr(7,3));
        // var day="08"
        let age = todayDate.getFullYear() - year;
        if(age<18){
            this.setState({
                dateError:"Age Should be more than 18 years"
            })
        }
        else if(date.length===0){
            this.setState({
                dateError:"required"
            })
        }
        else{
            this.setState({
                dateError:""
            })
        }
        console.log("Myu age",age)
        console.log("Year",year);
        console.log("Month",month);
        console.log("Day",day); 
        // if 
        //     (todayDate.getMonth() < month || (todayDate.getMonth() == month && todayDate.getDate() < day)) {
               
        //         // age--;
        // }
        
        // this.setState({
        //     date:event.target.value
        // })
        // if(todayDate>18)
        this.props.inputDate(date)
    }

    handleChange() {
        this.props.moveQualification()
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
                    <div className="insideStyle">Step 1</div>
                </div>
                        <div className="inputBase">
                            <div className="inputText">
                                <TextField
                                    label="Enter the Name"
                                    placeholder="Name"
                                    margin="normal"
                                    
                                    variant="outlined"
                                    onChange={(event)=>this.handleNameChange(event)}
                                    error={this.state.nameError}
                                    helperText={this.state.nameError}
                                />
                                <TextField
                                    label="Enter the First Name"
                                    placeholder="First Name"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={(event)=>this.handleFnameChange(event)}
                                    error={this.state.fnameError}
                                    helperText={this.state.fnameError}
                                />

                                <TextField
                                    label="Enter the Last Name"
                                    placeholder="Last Name"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={(event)=>this.handleLnameChange(event)}
                                    error={this.state.lnameError}
                                    helperText={this.state.lnameError}
                                />
                            </div>
                          

                        </div>
                        
                        <div className="inputTexts">
                            <TextField
                                // label="Enter the Date of Birth"
                                style={{
                                    width:'231px'                           
                                    }}
                                placeholder="Date of Birth"
                                margin="normal"
                                variant="outlined"
                               
                                error={this.state.dateError}
                                helperText={this.state.dateError}
                                
                                type="date"
                                value={this.props.date}
                                onChange={(event)=>this.handleDateChange(event)}/>
                                
                                {/* // InputProps={{
                                //     endAdornment: <img className="myImage" src={require('../assests/dates.png')} alt="Dates" 
                                //     // value={this.state.date}
                                //     onChange={(event)=>this.handleDateChange(event)}/>
                                //   }}
                            // />
                           */}
                             
                    
                   
                            <TextField
                                label="Enter the Email"
                                placeholder="Email"
                                margin="normal"
                                variant="outlined"
                                onChange={(event)=>this.handleEmailChange(event)}
                                error={this.state.emailError}
                                helperText={this.state.emailError}
                            />
                            <TextField
                                label="Enter the Phone Number"
                                placeholder="Phone Number"
                                margin="normal"
                                variant="outlined"
                                onChange={(event)=>this.handlePhoneNumber(event)}
                                error={this.state.phoneError}
                                helperText={this.state.phoneError}
                            />
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
} export default connect(mapStateToProps, mapDispatchToProps)(Personal);
