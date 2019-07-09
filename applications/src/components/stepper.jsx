import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TextField,  Button,Card } from '@material-ui/core';
import Stepper from 'react-stepper-horizontal'
import Personal from './personal';
import Qualification from './qualification';
import Address from './Address';
import { NEXT_PERSONAL } from '../constants/actionTypes';
import {connect} from 'react-redux';

// const mapDispatchToProps = dispatch => ({
//   inputStep:(value) => dispatch({
//       type: NEXT_PERSONAL,payload:value
//   }),
// })

function mapStateToProps(state){
  console.log("In Stepper Component",state.stepper.personal);
  // if(state.stepper.personal){
  //   this.s
  // }
  return({
      personal:state.stepper.personal
  })
}



class Steppers extends Component {
  constructor() {
    super();
    this.state = {
      cnt:0,
      steps: [{
        title: 'Personal Details',
        // href: 'http://example1.com',
        onClick: (e) => {
          
          e.preventDefault()
        //   this.props.history.push('qualification')
          console.log('onClick', 1)

        }
      }, {
        title: 'Academic Qualification',
        href: 'http://example2.com',
        onClick: (e) => {
          e.preventDefault()
          console.log('onClick', 2)
        }
      
      }, {
        title: 'Address Details',
        href: 'http://example3.com',
        onClick: (e) => {
          e.preventDefault()
          console.log('onClick', 3)
        }
      }],
      currentStep: 0,
    };
    this.onClickNext = this.onClickNext.bind(this);
    this.onClickPrevious=this.onClickPrevious.bind(this);
  }

  onClickNext() {
    const { steps, currentStep } = this.state;
    // this.props.inputStep(currentStep+1)
    this.setState({
      currentStep: currentStep + 1,
    });
  }
  myCallback = (dataFromChild) => {
    if(dataFromChild=='shahazad'){
      this.onClickNext()}
    if(dataFromChild=='previous'){
      this.onClickPrevious()
    }
    if(dataFromChild=="previousQualification"){
      this.onClickPrevious()
    }
    if(dataFromChild=="nextAddress"){
      this.onClickNext()
    }
    if(dataFromChild=="Previous"){
      this.onClickPrevious()
    }
}
  onClickPrevious() {
    const { steps, currentStep } = this.state;
    this.setState({
      currentStep: currentStep - 1,
    });
    // this.setState({
    //   cnt:1
    // })
  }

  render() {
    const { steps, currentStep } = this.state;
    console.log("My status",this.state.currentStep+1);
   
    const buttonStyle = { background: '#E0E0E0', width: 200, padding: 16, textAlign: 'center', margin: '0 auto', marginTop: 32 };

    return (
      <div className="stepperDiv">
        <Stepper steps={ steps } activeStep={ currentStep } disabledSteps={ [3] } />
        <div>
          {this.state.currentStep==0?
        
          (
            <Personal 
            value={this.cnt} callbackFromParent={this.myCallback} />
           
          ):null}
          {
            this.state.currentStep==1?
            (
              <Qualification
              callbackFromParent={this.myCallback}/>
            ):
            null}
          
          {
            this.state.currentStep==2?
            (
              <Address
              callbackFromParent={this.myCallback}/>
            ):null}
          
         
      </div>
          
        </div>
      
    

    );
  }
};
export default connect(mapStateToProps,null)(Steppers);


