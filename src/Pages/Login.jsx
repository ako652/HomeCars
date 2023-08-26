import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='loginPage'>
    <h1 className='text'>sign Up</h1>
    <p className='text-style'> Welcome back, Enter your details</p>
    <form action="" className='formAction'>
      <input type="text" placeholder='Email' className='input-field-design' /><br/>
      <input type="text" placeholder='Password' className='input-field-design'/><br/>
      <button className='btn-field-design'>sign In</button><br/>
      <hr className='linestyle'/>
      <button className='btn-field-design'>   <FontAwesomeIcon icon={faGoogle}/>continue with google</button><br/>
      <button className='btn-field-design'><FontAwesomeIcon icon={faFacebook}/>continue with facebook</button>
      <hr className='linestyle'/>
       <h1 className='text-register'><Link to="/register">Register account</Link></h1>
       <p className='text-style'> forget password ?</p>

    </form>
      
    </div>
  )
}
