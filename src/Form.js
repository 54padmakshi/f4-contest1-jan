import React, { useState } from 'react'

function Form() {
  
const [user,setUser] =useState({email:"", name:"",password:"",confirmpassword:""})
//const {email,name,password,confirmpassword} =user;
const validationEmail =new RegExp( "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");

const handleChange=(event)=>{
   // console.log("event.target.id=",event.target.id);
setUser({...user,[event.target.id]:event.target.value})
}

const handleSubmit= (event)=>{
     event.preventDefault();
  //console.log("Submitted");
   if(user.email === ""||user.name===""|| user.password===""|| user.confirmpassword==="" ){
    
    document.getElementById("error").textContent = "Error: All input fields must be filled."
    document.getElementById("success").textContent="";
  }
  else if(!validationEmail.test(user.email)) {
       console.log(validationEmail);
       document.getElementById("error").textContent = "Error: email should contain[a-z or A-Z or 0-9] @[0-9].[a-zorA-Z]";
       document.getElementById("success").textContent="";
}
  else if (user.password !== user.confirmpassword ) {
    document.getElementById("error").textContent = "Error :password and confirm password must be same and should not be empty either."
    document.getElementById("success").textContent="";
  }
 else if (user.password === user.confirmpassword && handleChange(event) !=="" && validationEmail.test(event.target.email.value) )
  {
       document.getElementById("success").textContent ="Success ! Your Signup form is created." ;
       document.getElementById("error").textContent="";
  }
 
 
   
 }



  return (
    <div>
    <form onSubmit={handleSubmit}>
   
   <h1> SignUp </h1> 
   <div>
   <label htmlFor='name'> </label>
    <p><input type="text" id="name" placeholder='Full Name' onChange={handleChange} /></p>
   </div>
   <div>
    <label htmlFor='email'> </label>
    <p><input type="text" id="email" placeholder='Email' onChange={handleChange} /></p>
    </div>
   
   <div>
   <label htmlFor='password'></label>
   <p> <input type="password" id="password" placeholder='Password' onChange={handleChange}/></p>
   </div>
   <div>
   <label htmlFor='confirmpassword'> </label>
   <p> <input type="password" id="confirmpassword" placeholder='Confirm Password'onChange={handleChange}/></p>
   </div>

   <div style={{color:"red" ,fontSize:"20px"}} id="error" onSubmit={handleSubmit}></div>
   <div style={{color:"green" ,fontSize:"20px"}} id ="success" onSubmit={handleSubmit}></div>
   <div>
    <button type='submit' >Click Me to SignUp!</button>
   </div>
   
    </form>
    </div>
  )
}

export default Form
