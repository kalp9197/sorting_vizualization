import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    // Send feedback over mail logic
    emailjs.sendForm('service_qdszzei', 'template_7cxjbij', form.current, '4PGCka87R1EClPpRx')
      .then((result) => {
          console.log(result.text)

          // Show success message 
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
      })
      .catch((error) => {
          console.log(error.text);

          // Show error message 
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          });
      });
  };

  return (
    // feedback form
    <>
    <div className="container mt-5 mb-5 pb-5 text-dark">
      <div className='border border-3 border-secondary rounded p-5'>
      <h2 className='fs-1 text-center mb-3' >Feedback Form</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group mb-4">
          <label htmlFor="name"><h5> Name:</h5></label>
           <input
            type="text"
            className="form-control"
            name="user_name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="email"><h5> Email:</h5></label>
          <input
            type="email"
            className="form-control"
            name="user_email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="query"><h5> Query:</h5></label>
          <textarea
            className="form-control"
            name="message"
            rows="4"
            placeholder="Enter your query"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-outline-primary mt-3">
          Submit
        </button>
      </form>
      </div>
    </div>
    </>
  );
};

export default Contact;