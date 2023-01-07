import React, { useState } from 'react'

function Form() {
const [user,setUser] =useState({email:"", name:"",password:"",confirmpassword:""})
const {email,name,password,confirmpassword} =user;

const handleChange=(event)=>{
    console.log("event.target.id=",event.target.id);
setUser({...user,[event.target.id]:event.target.value})
}

const handleSubmit= (event)=>{
     event.preventDefault();
  //console.log("Submitted");
  if (event.target.password.value === event.target.confirmpassword.value)
  {
     alert("error");
  }
 }



  return (
    <div>
    <form onSubmit={handleSubmit}>
   
   <h3>Login Form Credentials </h3> 
   <div>
    <label htmlFor='email'>Email : </label>
    <input type="text" id="email" placeholder='email' onChange={handleChange} />
   </div>
   <div>
   <label htmlFor='name'>Name : </label>
    <input type="text" id="name" placeholder='name' onChange={handleChange} />
   </div>
   <div>
   <label htmlFor='password'>Password : </label>
    <input type="password" id="password" placeholder='password' onChange={handleChange}/>
   </div>
   <div>
   <label htmlFor='confirmpassword'>Confirm Password : </label>
    <input type="password" id="confirmpassword" placeholder='confirm password'onChange={handleChange}/>
   </div>

   <div style={{color:"red" ,fontSize:"20px"}}>Error : </div>
   <div>
    <button type='submit' >Click Me to SignUp!</button>
   </div>
   
    </form>
    </div>
  )
}

export default Form
