import React,{useState} from "react";
import login from "../../assets/images/login.jpg";
import './Auth.css'
import {useDispatch,useSelector} from 'react-redux'
import { loginAction } from "../../redux/action/auth/LoginAction";
import {CLEAR_LOGIN_ERROR} from '../../redux/types/LoginTypes'
import { Link } from "react-router-dom";
function Login(props) {
  const dispatch = useDispatch()
  const [state, setState] = useState({
    email:"",
    password:""
  });

  const [formError, setFormError] = useState({});

  const {token, loginError} = useSelector(state => state.login);
  const userType = localStorage.getItem('userType');

 if(userType == '2'){
   props.history.push('/services')
 }else if(userType == '1'){
    props.history.push('/dashboard')
 }
  console.log(token)
  const handleChange = (event) =>{
    event.preventDefault();
    const {name, value} = event.target;
    setState({...state, [name]: value});
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    setFormError(validate(state));
  console.log(state)
    const obj = {
      email: state.email,
      password: state.password
    }
    dispatch(loginAction(obj))
    dispatch({type: CLEAR_LOGIN_ERROR})
  }

  const validate = (values) =>{
    const errors = {};
    const regex =
      /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/;
    if(!values.email){
      errors.email = "Email is required"
    }else if(!regex.test(values.email)){
      errors.email = "This is not valid Email format..!!";
    }
    if(!values.password){
      errors.password = "Password is required"
    }
    return errors;

  };
  return (
    <>
      <div className="container-fluid auth">
        <div className="row">
        <div className="col-md-6">
            <div className="bgRegister">
                   <img src={login} alt="sdafds" />
            </div>
        </div>
          <div className="col-md-6 p-5">
            <div className="section-title mt-3">
              <h2 className="title text-center mb-4 ">Login</h2>
              
              {loginError ? (<div className="alert alert-danger text-center" role="alert">
                {loginError.toUpperCase()} 
                </div>
                 ): "" }
              <form onSubmit={handleSubmit} >
                <div className="form-group p-2">
                  <div className="row">
                    <div className="col-md-6 offset-md-3">
                      <input
                        placeholder="Email"
                        id="email"
                        type="text"
                        className="form-control"
                        // required
                        name="email"
                           value={state.email}
                           onChange={handleChange}
                      />
                      <span>{formError.email}</span>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 offset-md-3">
                  <div className="form-group p-2">
                    <input
                      placeholder="Password"
                      id="password"
                      type="password"
                      className="form-control"
                      // required
                      name="password"
                         value={state.password}
                         onChange={handleChange}
                    />
                     <span>{formError.password}</span>
                  </div>
                </div>

                <div className="col-md-6 offset-md-3 mt-3">
                
                  <button
                    type="submit"
                    className="primary-btn submit loginBtn"
                    
                  >
                    Submit
                  </button>
                  <span className="mt-4">
                      <Link to="/register" className="text-decoration-none mt-4">
                        Don't have any Account ? Sign Up
                      </Link>
                    </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
