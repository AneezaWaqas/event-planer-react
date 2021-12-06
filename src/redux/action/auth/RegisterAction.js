import axios from "axios";
import {
  SET_TOKEN,
  REGISTER_ERROR,
  SUCCESSFULLY_REGISTERED,
} from "../../types/ResgisterTypes";

export const registerAction = (state) => {
  console.log("Action", state);
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      let data = await axios.post(
        "https://eventplannerpk.herokuapp.com/auth/signup",
        state,
        config
      );
      dispatch({ type: SUCCESSFULLY_REGISTERED, payload: data.data.message });
      dispatch({ type: REGISTER_ERROR, payload: data.data.error });
      console.log("data", data);
    } catch (error) {
      console.log("error", error);
      // dispatch({ type: CLOSE_LOADER });
      // dispatch({ type: REGISTER_ERROR, payload: error.response.data.error });
      // console.log("error.response.data.errors=>", error.response.data.error);
    }
  };
};
