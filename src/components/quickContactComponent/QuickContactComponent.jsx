import React from 'react'
import './quickContactComponent.css'

const QuickContactComponent = () => {
  return (
    <div className='quick-contact__container'>
        <h1>Quick Contact</h1>
        <form action="https://formsubmit.co/19b5e0e38fedef472914ab41c836d8c0" method="POST" className='quick-contact__container-form'>
            <input type='text' name='firstName' placeholder='Name:'></input>
            <input type='text' name='email' placeholder='Email:'></input>
            <input type='number' name='number' placeholder='Phone number:'></input>
            <select placeholder='Department:'>
                <option>Corporate Finance</option>
                <option>Corporate Advisory</option>
                <option>Risk Advisory</option>
                <option>Strategic CEO & CFO Services</option>
                <option>Transaction and M & A</option>
                <option>ESG Services</option>
                <option>Technology</option>
            </select>
            <textarea placeholder='Message:'></textarea>
            <input type="submit" value="Send message" id='submit'/>
        </form>
    </div>
  )
}

export default QuickContactComponent