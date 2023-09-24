import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout>
      <h1 className="text-center text-4xl">Contact Us</h1>
      <div className="row contactus ">
        
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "90%" }}
          />
        </div>
        <div className="col-md-4 rounded-lg border-2 p-3">
          
        <label htmlFor="name" className="text-xl pr-1">First Name: </label>
        
        <input placeholder="First Name" type="text" id="name" className=" p-3 m-2 rounded-lg
                    border-2 border-grey-400 bg-white-100
                    focus:outline-none" />
        <br />
        <label htmlFor="lastName" className="text-xl px-1">Last name: </label>
        <input
            placeholder="Last Name"
            type="text"
            name="lastName"
            className=" p-3 m-2 rounded-lg
                    border-2 border-grey-400 bg-white-100
                    focus:outline-none"
            tabIndex="2"
            id="lastName"
       />
       <br />
       <label htmlFor="email" className="text-xl pl-1 pr-11">Email:   </label>
<input
     type="email"
     name="email"
     id="email"
     className="placeholder-gray-400 p-3 m-2 rounded-lg
     border-2 border-grey-400 bg-white-100
     focus:outline-none"
     placeholder="example@gmail.com"
     tabIndex="3"
/>
<br />
<div className="w-96">
<label htmlFor="message" className="text-2xl">Message: </label>
  <div className="relative w-full min-w-[200px]">
    
    <textarea
      id="message"
      className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=""
    ></textarea>
    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      Message
    </label>
  </div>
</div>

<br />
<button className="px-auto bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 rounded border-blue-700 hover:border-blue-500 rounded">
  Submit
</button>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
