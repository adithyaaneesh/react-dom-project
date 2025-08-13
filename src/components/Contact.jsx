import React, { useState } from 'react'
import '../styles/Contact.css'

const Contact = () => {
 


  return (
    <section>
      <div className='contact-form container'>
        <form>
            <div className='contact'>
              <h1>Contact Us</h1>
              <p>You're welcome to contact us with any inquiry</p>
              <p> Tel: 98765-43210    |    info@mysite.com</p>
            </div>
            <div className="contactform-group">
                <label htmlFor="name">First Name*</label>
                <input 
                  type="text" 
                  id="name"  
                  name='name' 
                  required/>
            </div>
            <div className="contactform-group">
                <label htmlFor="name">Last Name*</label>
                <input 
                  type="text" 
                  id="name"  
                  name='name' 
                  required/>
            </div>
            <div className="contactform-group">
                <label htmlFor="email">Email*</label>
                <input 
                type="email" 
                id="email" name='email'
                required/>
            </div>
            <div className="contactform-group">
                <label htmlFor="phone">Phone number*</label>
                <div className="phone-input-container">
                    <input
                        type= "phonenumber"
                        id="phonenumber"
                        name='phonenumber'
                        required
                    />
                    
                </div>
            </div>
            <div className="contactform-group">
                <label htmlFor="message">Message*</label>
                <textarea
                  type="text" 
                  id="message"  
                  name='message' 
                  required>
                </textarea>
            </div>
            
            <button 
            type="submit" 
            className="sub-button">Submit</button>
        </form>
      </div>     
    </section>

  )
}

export default Contact
