
// import { useState } from 'react';
// // import "./Style.css"
// const Hire = () => {
// const [hire, setHire] = useState({
//     mail: "",
//     proposal: "",
//   document: ""
  
// });
// const InputEvent = (event) => {
//   const {name, value} = event.target;

//   setHire((preVal) => {
//     return {
//       ...preVal,
//       [name]: value,
//     }
//   })
// } 
//   const formSubmit = (e) =>{
//     e.preventDefault();
//     alert (`You have received a proposal and documentation from ${hire.mail} `)


//   }
// // import { NavLink } from 'react-router-dom';


// // import Images from "./src/Component/Images/profile.jpg";


//   return (
//     <>
//     <form onSubmit = {formSubmit}>
//     <div className="row justify-content-center">
//     <div className="col-4">
//     <div className="mb-3">
//   <label for="exampleFormControlInput1" className="form-label">Work-mail</label>
//   <input type="email" className="form-control" 

//   id="exampleFormControlInput1"
//   name = "mail"
//   value ={hire.mail}
//   onChange = {InputEvent} 
//   placeholder="name@example.com"/>
//   </div>
//   </div>

//   </div>
//   <div className="row justify-content-center">
//     <div className="col-4 ">
//     <div className="mb-3">
//   <label for="formFile" className="form-label"> Attach your Proposal Letter</label>
//   <input className="form-control " type="file" 
//     name = "proposal"
//     value ={hire.proposal}
//     onChange = {InputEvent}
//   id="formFile"/>
//   </div>
//   </div>
// </div>
// {/* <div className="row justify-content-center">
// <div className="col-4">
// <div className="mb-3">
//   <label for="formFileMultiple" className="form-label">Attach your Documentation</label>
//   <input className="form-control" type="file" 
//   id="formFileMultiple" multiple
//   name = "documentation"
//   value ={data.document}
//   onChange = {InputEvent}/>
// </div>
// </div>
// </div> */}
// <div className="row justify-content-center">
// <div className="col-1">
// <div className="mb-4">
// <button type="button" className="btn btn-success">Done</button>
// </div>
// </div>
// </div>
// </form>
//     </>
//   )
//   }
// export default Hire;

  
import React from 'react'
import { useState } from 'react';

const Contact = () => {
const [data, setData] = useState({
  fullname: "",
  phone: "",
  email: "",
  document: "",
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
    alert (`You have received a documentation from ${data.email}. Details are below  Name: ${data.fullname} Phone Number: ${data.phone} File Name: ${data.document}`)


  }
  return (
    <>
    <div className='my-5 font-weight-bold text-center'> 
    <h2>Hire Me</h2> 
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
{/* <div className="mb-4">
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

  
</div> */}
<div className="mb-3">
  <label for="exampleFormControlInput1" 
  className="form-label">
    Attach your documentation
    </label>
  <input type="file" 
  className="form-control" 
  id="exampleFormControlInput1" 
  name = "document"
  value ={data.document}
  onChange = {InputEvent}
  placeholder="Attach your documentation"/>
</div>

<div className="col-12">
    <button 
    className="btn btn-outline-success" 
    type="submit">
      Done
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

