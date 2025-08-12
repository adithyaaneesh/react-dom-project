import React from 'react'

const Contact = () => {
  return (
    <div className='container'>
      <div>
        <h1>Contact Us</h1>
        <p>You're welcome to contact us with any inquiry</p>
        <p> Tel: 98765-43210    |    info@mysite.com</p>
      </div>
      <form>
        <div className='contact'>
          <label>Firstname*</label>
          <input type="text" name="fname" id='fname'/>
          <label>Lastname*</label>
          <input type="text" name="lname" id='lname'/>
          <label>Email*</label>
          <input type="email" name="mail" id='email'/>
          <label>Phone*</label>
          <input type="text" name="phn" id='num'/>
          <label>Message*</label>
          <textarea type="text" name="fname" id='name'></textarea>
          <button type="submit">Submit</button>
        </div>
      </form>   
    </div>
  )
}

export default Contact
