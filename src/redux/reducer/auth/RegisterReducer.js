import { CLEAR_SUCCESSFULLY_REGISTERED, REGISTER_ERROR, SUCCESSFULLY_REGISTERED} from '../../types/ResgisterTypes'

const initialState = {
    SuccessfullyRegister:"",
    registerError:""
};

 const register = (state = initialState, action) =>{
    //  console.log("reducer", action.payload)
   
    switch (action.type) {
        case SUCCESSFULLY_REGISTERED:
            return {...state, SuccessfullyRegister : action.payload};
        case CLEAR_SUCCESSFULLY_REGISTERED:
            return {...state, SuccessfullyRegister : ""};
        case REGISTER_ERROR:
            return {...state, registerError : action.payload};
            
    
        default:
          return  state;
    }
}
export default register;