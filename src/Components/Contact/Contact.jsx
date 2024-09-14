import './Contact.css'
import React from 'react'
import theme from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location from '../../assets/location_icon.svg'
import call from '../../assets/call_icon.svg'

const Contact = () => {
 
    
  const onSubmit = async (event) => {
 
     
    event.preventDefault();
    const formData = new FormData(event.target);
    const accessKey = import.meta.env.VITE_ACCESS_KEY;
    formData.append("access_key",accessKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      // console.log("Success", res);
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
     
        <div className="c-title">
            <h1>Get in touch</h1>
            <img src={theme} alt="" />
        </div>
      <div className="c-sec">
        <div className="c-left">
            <h1>Lets talk</h1>
            <p>I'm currently available to take on new projects </p>
            <div className="c-details">
                <div className="c-detail">
<img src={mail_icon} alt="" /><p>dharanishselvarajk@gmail.com</p>
                </div>
                {/* <div className="c-detail">
<img src={call} alt="" /><p>112345679</p>
                </div> */}

                <div className="c-detail">
                    <img src={location} alt="" /><p>coimbatore,Tamil Nadu,India</p>
                </div>

            </div>
        </div>
        <form onSubmit={onSubmit}className="c-right"action="">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your email</label>
            <input type="text" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write your message</label>
            <textarea name="message" id="" cols="30" rows="10" placeholder='Enter your messsage'></textarea>
            <button type='submit' className="c-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
