import React from 'react'
import emailjs from '@emailjs/browser';
import './connect.css'
import background from '../../assets/contactUs.png'
import logo from '../../assets/contactUs logo img.png'



const Connect = () => {

  /* const [formState, setFormState] = useState({});

  const changeHandler = (event) => { 
    setFormState({...formState, [event.target.name]: event.target.value})
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const config = {
      SecureToken: '35f6872f-0d7d-4618-b1bf-88c08d6352f7',
      To : 'kia.uae.dubai@gmail.com',
      From : 'kiarash.kiasat@gmail.com',
      Subject : `${formState.subject}`,
      Body : `Dear Farukh,
              My Enquiry is, ${formState.message}
              My Email is, ${formState.email}
              My Phone number is, ${formState.phone}
              And my Company is, ${formState.company}
              Thank you,
              ${formState.lastName}, ${formState.name}.`
              
    }
    if(window.Email) {
      window.Email.send(config).then(() => alert('email sent successfully'));
    }
  } */

 /*  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0gkyma6', 'template_5f0wkba', form.current, '96aoosjFBbaHbp9ds')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }; */



  return (
    <div className="connect__container">
      <div className="connect__container-background">
        <img src={background}/>
        </div>
        <div className="connect__container-form-container">
          <div className="connect__container-form">
    <form action="https://formsubmit.co/19b5e0e38fedef472914ab41c836d8c0" method="POST">
      <div className="connect__container-form-contents">
      <div className="connect__container-form-title">
        <h2>Connect with us</h2>
        <p>You have questions? Contact us today, we're here to help</p>
      </div>
      <div className="connect__container-form-inputs">
      <div className="connect__container-form-name">
      <input type="text" name="name" placeholder='First Name:' />
      <input type="text" name="lastName" placeholder='Last Name:' />
      </div>
      <div className="connect__container-form-contact_info">
      <input type="email" name="email" placeholder='Your Email:' />
      <input type="number" name="phone" placeholder='Your Phone:' />
      </div>
      <div className="connect__container-form-company">
      <input type="text" name="company" placeholder='Your Company:' />
      <input type="text" name="subject" placeholder='Subject:' />
        </div>
      </div>
      <div className='connect__container-form-message'>
      <textarea name="message" placeholder='Your Message' />
      </div>
      <div className="connect__container-form-submit">
      <input type="hidden" name="_autoresponse" value="Thank you for your email, We will get back to you shortly"></input>
      <input type="hidden" name="_next" value="http://localhost:3000/"></input>
      <input type="hidden" name="_captcha" value="false"></input>
      <input type="submit" value="Send Email" />
      </div>
      </div>
    </form>
    </div>
    </div>
  {/*   <div className="connect__container-logo">
      <div className="connect__container-logo-container">
      <div className="connect__container-logo-container-contents">
        <h2>Partners</h2>
        <div className="connect__container-logo-img">
        <img src={logo}/>
        <div className="connect__container-logo-description">
              <h1>The Path to COP28</h1>
              </div>
          </div>
          </div>
      
      </div>
        <p>A campaign for 2022/2023 by global ethical fincance initiative</p>

    </div> */}
    </div>
  );
};

export default Connect