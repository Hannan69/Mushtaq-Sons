import React from 'react'
import './Contact.css'
import contacticon from '../../assets/contact.png'
import emailicon from '../../assets/mail.png'
import phoneicon from '../../assets/phone.png'
import locationicon from '../../assets/location.png'
import arrow1 from '../../assets/arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "51026337-c75d-4bef-a055-6ec3a5af963c");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={contacticon} alt="" /></h3>
            <p>Feel free to reach out through this contact form. We will get back to you ASAP!</p>
            <ul>
                <li>
                   <img src={emailicon} alt="" /> info@mushtaqsons.com.pk
                </li>
                <li>
                    <img src={locationicon} alt="" />
                    Suite #09, Manzoor Market, Nazimabad no.02, Commercial Area, Karachi, Pakistan.
                </li>
            </ul>

            {/* Google Maps Embed Code */}
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe
                        className="gmap_iframe"
                        width="100%"
                        height="400"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://www.google.com/maps/embed/v1/place?q=Mushtaq+%26+Sons,+Suite%2309,+opposite+New+Shahid+Sports,+Block+2+Nazimabad,+Karachi,+Karachi+City,+Sindh+74600&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    ></iframe>
                </div>
            </div>
        </div>

        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your Name' required />
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter your number' />
                <label>Write your Complaint</label>
                <textarea name="message" rows="6" placeholder="Enter Your Complaint" required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={arrow1} className="whiteArrow" alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
