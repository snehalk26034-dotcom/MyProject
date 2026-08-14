import React from "react";
import "./Contact.css";
import contactBg from "../assets/contact_bg_img.png";

const Contact = () => {
  return (
    <div>
      <section
        className="contact-section"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="contact-overlay"></div>

        <div className="contact-content">
          <h1>Contact Us</h1>
        </div>
      </section>

      <p className="text">
        888 Griffiths Way, Themeland ML 12345 <br />
        Tel: (987) 654-3210 <br />
        Email: kirandighe1945@gmail.com
      </p>



      <p className="text">
        Open Hours: <br />
        Monday-Friday: 9:00AM-7:00PM <br />
        Saturday: 10:30AM-8:00PM <br />
        Sunday: Closed
      </p>


      <div style={{ marginLeft: '10%', marginTop: '30px' }}>
        <label htmlFor=""><b>First Name*</b></label>
        <br />
        <input type="text" className="inp" />
      </div>

      <div style={{ marginLeft: '10%', marginTop: '30px' }}>
        <label htmlFor=""><b>Last Name*
        </b></label>
        <br />
        <input type="text" className="inp" />
      </div>

      <div style={{ marginLeft: '10%', marginTop: '30px' }}>
        <label htmlFor=""><b>Email*
        </b></label>
        <br />
        <input type="text" className="inp" />
      </div>

      <div style={{ marginLeft: '10%', marginTop: '30px' }}>
        <label htmlFor=""><b>Message*</b></label>
        <br />
        <input type="text" className="inp_last" />
      </div>

      <button type="submit" className="button1">Submit</button>

      <div className="map">
        <iframe
          src="https://www.google.com/maps?q=Selu,Maharashtra&output=embed"
          title="Selu Maharashtra Map"
          loading="lazy"
        >
        </iframe>
      </div>

    </div>
  );
};

export default Contact;