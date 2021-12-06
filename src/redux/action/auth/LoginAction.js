import axios from "axios";
import { SET_TOKEN, LOGIN_ERROR, SET_USER_TYPE} from '../../types/LoginTypes'


export const loginAction = (state) =>{
    return async (dispatch) =>{
     const config = {
       headers: {
         "Content-Type": "application/json",
       },
     };
     try {
    //    dispatch({ type: SET_LOADER });
       const {data} = await axios.post('https://event-planner12.herokuapp.com/auth/signin', state, config);
       console.log("datafromLoginAction", data)
    //    dispatch({type: CLOSE_LOADER});
       localStorage.setItem('myToken', data.access_token);
       localStorage.setItem('userType', data.user_type);
       dispatch({type: SET_TOKEN, payload: data.access_token});
       dispatch({type: SET_USER_TYPE, payload: data.user_type});
       
     } catch (error) {
       dispatch({type: LOGIN_ERROR, payload: error.response.data})
       console.log("error==>", error.response.data)
     }
    }
 };