
import React, { useState } from 'react'
import Hero2 from '../Hero/Hero2'

import '../../App.css';
import "./Login.css";

const Login = () => {

 const [type,setType] = useState(2);
 const changePageHandler = (type) =>{
    setType(type);
 }
  return (
    <div>
        <div class="maincontent pt-0 pb-0">
        <div class="d-md-flex h-md-100 align-items-center">
            <div class="col-md-6 p-0 h-md-100">		
                <Hero2 subTitle={type === 2? "Login to enjoy the edevours ride of great taste and flavours of authentic cuisine" :
                "Register to enjoy the edevours ride of great taste and flavours of authentic cuisine"}/>		
            </div>
        </div>
        <div className="col-md-6 p-0 h-md-100 loginarea">
            <div className="d-md-flex align-items-center h-md-100 p-3 justify-content-center">
                <form>
                <h3 className="mb-4 text-center signin-text">{type === 2 ? "Sign In" : "Sign Up"} </h3>
                {type === 1 ?<div className="form-group">
                    <input type="text" className="form-control signin-input" id="exampleInputEmail1"  placeholder="Name" required=""/>
                </div> : ""}
                <div className="form-group">
                    <input type="email" className="form-control signin-input" id="exampleInputEmail1"  placeholder="E-mail" required=""/>
                </div>
                {type === 1 ? <div className="form-group">
                    <input type="number" className="form-control signin-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone Number" required=""/>
                </div> : ""}
                <div className="form-group">
                    <input type="password" className="form-control signin-input" id="exampleInputPassword1" placeholder="Password" required=""/>
                </div>
                {type === 1 ? <div className="form-group">
                    <input type="password" className="form-control signin-input" id="exampleInputEmail1" placeholder="Re Type Password" required=""/>
                </div> : ""}
                {type === 2 ? <div class="form-group form-check signin-checkbox">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label small text-muted signin-remeber" for="exampleCheck1">Remember me</label>
                </div>: ""}
                <div className='signin-button-box'>
                     {type === 2 ?<div>
                      <small className="d-block mt-4 text-center "><a className="text-gray" href="#"  style={{color:'orangered',paddingLeft:"10%",marginBottom:"4%",marginTop:"4%"}}>Forgot your password?</a></small>
                    </div> : ""}
                    <div>
                    <button type="submit" className="btn btn-dark btn-round btn-block signin-button">{type === 2 ? "Sign in" : "Sign Up"}</button>
                  </div>
                  <div>
                      <small className="d-block mt-4 text-center ">{type === 2 ? <span className="text-gray" href="#"  style={{color:'black',paddingLeft:"10%",marginBottom:"4%",marginTop:"4%"}}>Don't have Account? <a style={{color:"orangered",cursor:"pointer"}} onClick={()=>changePageHandler(1)}>Sign In</a></span>
                      : <span className="text-gray" href="#"  style={{color:'black',paddingLeft:"10%",marginBottom:"4%",marginTop:"4%"}}>Already have account? <a style={{color:"orangered",cursor:"pointer"}} onClick={()=>changePageHandler(2)}>Sign Up</a></span> }
                      </small>
                    </div>
                </div>
                </form>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Login