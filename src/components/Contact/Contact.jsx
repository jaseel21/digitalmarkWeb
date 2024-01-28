// src/components/ContactPage.jsx
import {React,useState} from 'react';
import $ from "jquery"
import Swal from "sweetalert2"

const ContactPage = () => {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    message:""
  })

  const handleAlert=()=>{
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
console.log(formData);
    $.ajax({
      url: 'https://script.google.com/macros/s/AKfycbxehEH7c3SYvWjgyKijwQjHPYfuPfkPiqt5o7ZJSyqnO6Djb-Mrf-ZxCVlvb1mgoGGb/exec', // Add your API endpoint or URL here
      data: $("#submit-form").serialize(),
      method: 'post',
      success: function (response) {
        handleAlert();
        
        // window.location.href = "https://google.com";
        setFormData({
         name:"",
         email:"",
         message:""})
        
      },
      error: function (err) {
        alert('Something Error');
      },
    });
      

  }
  return (
    
<div className="p-4 bg-gray-900 text-white min-h-screen pb-16 flex flex-col md:flex-row items-center justify-center">
<section id='about-section'>
      <div className=" mx-auto text-center md:w-1/2">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-lg mb-8">
          <span className='font-bold text-green-500'>

           I'm Thashfeque jazeel
          </span>
           <br />
          Feel free to reach out if you have any questions or inquiries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Email</h2>
            <p className="text-sm">thashfeeq123 @gmail.com</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Phone</h2>
            <p className="text-sm">+91 9961633885</p>
          </div>
        </div>
      </div>
      </section>

      <section id='contact-section'></section>
      <div className="max-w-lg mx-auto mt-8 p-6 bg-gray-800 md:w-1/2 rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-6 text-white">Message for Us</h1>

      <form id='submit-form' onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
            Your Name
          </label>
          <input
          class=""
            type="text"
            id="name"
            
            name="name"
            value={formData.name}
            className="text-black w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:border-blue-400"
            placeholder="John Doe"
            onChange={(e)=>setFormData({...formData,name:e.target.value})}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e)=> setFormData({...formData,email:e.target.value})}
            name="email"
            className="text-black w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:border-blue-400"
            placeholder="john@example.com"
            
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={(e)=> setFormData({...formData,message:e.target.value})}
            rows="4"
            className="text-black w-full px-4 py-2 border border-gray-600 rounded-md resize-none focus:outline-none focus:border-blue-400"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
        >
          Send Message
        </button>
      </form>
    </div>
    </div>
   
    
  );
};

export default ContactPage;
