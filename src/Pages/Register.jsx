import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';



export default function Register() {
  return (
    <div className="registerNow">
    
        
      <div className="signUp-comeIn">
        <h1 style={{margin:'20px'}}>sign up and 
          come in
        </h1>
        <img src="https://app.pemb.io/img/auth_mockup_design.200d9715.png" alt="picv" style={{width:'300px'}}/>
       
     
      </div>
      <div className="register-page ">
        <div className="content">
          <p className="text-style-update">
            The goal planning tool you'll love . All in one.
          </p>
          <form action="" className="formAction">
            <button className="btn-field-design">
              <FontAwesomeIcon icon={faGoogle}/>
              continue with google</button>
            <br />
            <button className="btn-field-design"><FontAwesomeIcon icon={faFacebook}/>continue with facebook</button>
            <br />
            <button className="btn-field-design-white">
              continue as guest
            </button>
            <hr className="linestyle" />
            <h1 className="text-register"> <Link to="/Login">Have an account? Login here</Link></h1>
          </form>
        </div>
      </div>
    </div>
  );
}
