import jwt_decode from "jwt-decode";
import { SET_TOKEN, LOGOUT, LOGIN_ERROR, CLEAR_LOGIN_ERROR, SET_USER_TYPE } from '../../types/LoginTypes'
const initialState = {
    SuccessfullyRegister: '',
    loginError: "",
    token:"",
    userType:'',
    user:'',
};
// const verifyToken = (token) =>{
//     let decodeToken = jwt_decode(token);
//     // let expiresIn = new Date(decodeToken.exp * 1000)
//     // if(new Date() > expiresIn){
//     //   localStorage.removeItem('myToken');
//     // }else{
//       return decodeToken;
    
//   }
  let token = localStorage.getItem("myToken");
  if(token){
      console.log("token===>>", token)
    initialState.token = token;
//    const decode =  jwt_decode(token);
//    const { user } = decode;
//    console.log("user", user)
//    initialState.user = user;
  
  }



 const login = (state = initialState, action) =>{
     console.log("reducer", action.payload)
   
    switch (action.type) {
        case SET_TOKEN:
            const decode = jwt_decode(action.payload, { header: true });
            console.log("decode=>", decode)
            const user = decode;
            console.log("userSetToken", user)
            return {...state, token: action.payload ,  user: user, SuccessfullyRegister:""}
        case SET_USER_TYPE: 
            return {...state, userType: action.payload}
        case LOGOUT: 
            return {...state, token: "" , user: "", userType: ""}
        case LOGIN_ERROR: 
            return {...state, loginError: action.payload}
        case CLEAR_LOGIN_ERROR: 
            return {...state, loginError: ""}
            
    
        default:
          return  state;
    }
}
export default login;