import { INPUT_NAME, INPUT_FNAME, INPUT_LNAME, INPUT_EMAIL, DATE } from "../constants/actionTypes";

export default (state={
    name:"",
    fname:"",
    lname:"",
    email:"",
    date:""
},action)=>{
    switch(action.type){
        case INPUT_NAME:
        return{
            ...state,
            name:action.payload
        }
        case INPUT_FNAME:
        return{
            ...state,
            fname:action.payload
        }
        case INPUT_LNAME:
        return{
            ...state,
            lname:action.payload
        }
        case INPUT_EMAIL:
        return{
            ...state,
            email:action.payload
        }
        case DATE:
        return{
            ...state,
            date:action.payload
        }
        default:
            return state
}}