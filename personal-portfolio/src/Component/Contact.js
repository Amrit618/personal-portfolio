import React from 'react'
import { useState } from 'react';

const Contact = () => {
const [data, setData] = useState({
  fullname: "",
  phone: "",
  email: "",
  msg: "",
});
const InputEvent = (event) => {
  const {name, value} = event.target;

  setData((preVal) => {
    return {
      ...preVal,
      [name]: value,
    }
  })
} 
  const formSubmit = (e) =>{
    e.preventDefault();
    alert (`My name is ${data.fullname}.and my mobile number is ${data.phone}
    ,email address is ${data.email}. My message is "${data.msg}".  `)


  }
  return (
    <>
    <div className='my-5 font-weight-bold text-center'> 
    <h2>Contact Me</h2> 
    </div>
    <div className='container contact_div col-md-4 col-10 mx-auto'>
      <div className='row'>
        <div className='col-md-12 col-12 mx auto text-center'>
          <form onSubmit = {formSubmit}>
        <div className="mb-3">
  <label for="exampleFormControlInput1" 
  className="form-label">
    Enter your Full Name
    </label>
  <input type="text" 
  className="form-control" 
  id="exampleFormControlInput1" 
  name = "fullname"
  value ={data.fullname}
  onChange = {InputEvent}
  placeholder="Full Name"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" 
  className="form-label">
    Phone Number
    </label>
  <input type="number" 
  className="form-control" 
  id="exampleFormControlInput1" 
  name = "phone"
  value ={data.phone}
  onChange = {InputEvent}
  placeholder="Enter Phone Number"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" 
  className="form-label">
    Email address
    </label>
  <input type="email" 
  className="form-control" 
  id="exampleFormControlInput1" 
  name = "email"
  value ={data.email}
  onChange = {InputEvent}
  placeholder="@example.com"/>
</div>

{/* <div className="mb-3">
  <label
   for="exampleFormControlTextarea1"
    className="form-label">Your message
    </label> */}
  {/* <input type = "textarea" 
   className="form-control" 
   id="exampleFormControlTextarea1"
   rows="3">
   name = "msg"
   {/* onChange = {InputEvent} / */}
   {/* <textarea 
   value ={data.msg}>
     onChange = {InputEvent}
     /</textarea> */}
   
  
{/* </div> */}
<div className="mb-4">
  <label for="exampleFormControlInput1" 
  className="form-label">
    Your message to me
    </label>
  <input type="message" 
  className="form-control1" 
  id="exampleFormControlInput1" 
  name = "msg"
  value ={data.msg}
  onChange = {InputEvent}
  placeholder="Your message here"/>

  
</div>

<div className="col-12">
    <button 
    className="btn btn-outline-primary" 
    type="submit">
      Submit form
      </button>
  </div>
</form>
        </div>
      </div>

    </div>
    </>
  )
}

export default Contact