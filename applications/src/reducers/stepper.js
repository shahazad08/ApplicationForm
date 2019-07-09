import { NEXT_QUALIFICATON, NEXT_PERSONAL } from "../constants/actionTypes";

export default (state={
    qualification:false,
    personal:false
},action)=>{
    switch(action.type){
        case NEXT_PERSONAL:
        return{
            ...state,
            personal:true
        }
        default:
            return state
    }}