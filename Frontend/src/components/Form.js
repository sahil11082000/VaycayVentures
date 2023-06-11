import './FormStyles.css'
import React from 'react'

function Form() {
  return (
    <div className='form-container'>
      <h1>Let's Connect!</h1>
      <form>
         <input placeholder='Name'/>
         <input placeholder='Email'/>
         <input placeholder='Subject'/>
         <textarea placeholder='Message' rows="6"></textarea>
         <button>Send Message!</button>
      </form>
    </div>
  )
}

export default Form
