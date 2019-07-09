import React,{Component} from 'react';
import {Button,TextField, Card} from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
class Address extends Component{
    constructor(props){
        super(props);
        this.state={
            yes:"",
            no:""
        }
    }
    handleYes(event){
       
        this.setState({
            yes:"yes"
        })
        console.log("Selected yes",this.state.yes);
    }
    handleNo(){
        this.setState({
            no:'no'
        })
        console.log("Selected No",this.state.no);
    }

    handlePrevious(){
            this.props.callbackFromParent('Previous')
    }
    render(){
        return(
            <div className="addressDiv">
                <Card>
                    <div className="myStyle">
                    <div className="insideStyle">
                        Step3
                    </div>
                    </div>
                    <div className="addrinputText">
                    <div>
                
                    <TextField 
                       
                        label="Permanent Address"
                        placeholder="Permanent Address"
                        margin="normal"
                        variant="outlined"
                        multiline='true'
                        maxline={3}
                        required={true}
                       
                        
                />
                </div>
                 <TextField
                        label="Correspondence Address"
                        placeholder="Correspondence Address"
                        margin="normal"
                        variant="outlined"
                        multiline='true'
                        required={true}
                />
                    </div>
                <div className="addrinputText">
                <TextField
                        label="Pin Code"
                        placeholder="Pin Code"
                        margin="normal"
                        variant="outlined"
                        required={true}
                />
                <TextField
                        label="Pin Code"
                        placeholder="Pin Code"
                        margin="normal"
                        variant="outlined"
                        required={true}
                />
                </div>
                <div className="myradioGroup">
                    <h4>Are you satisfied with the aggrement</h4>
                    <div className="radioGroup">
                    <RadioGroup
                    aria-label="Yes"
                    >
                    <div className="yesDiv">
          <FormControlLabel
            value="yes"
            control={<Radio color="primary"  onClick={(event)=>this.handleYes(event)}/>}
            label="Yes"
            labelPlacement="start"
          />
          <FormControlLabel
            value="no"
            control={<Radio color="primary" onClick={(event)=>this.handleNo(event)}/>}
            label="No"
            labelPlacement="start"
          />
             </div>
        </RadioGroup>
                </div>
                </div>
                <div className="addrinputButtons">
                <div className="buttonPrevious">
                <Button variant="contained" color="primary" onClick={()=>this.handlePrevious()}>
                                    Previous
                                </Button>
                                </div>

                <div  className="buttonNext">
                <Button variant="contained" color="primary">
                                    Next
                </Button>
                </div>
                </div>
                </Card>
            </div>
        )
    }
}export default Address