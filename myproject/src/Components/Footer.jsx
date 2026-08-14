import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-container">
        <div className="footer-content">

          {/* Logo Section */}
          <div className="footer-logo-section">
            <div className="footer-logo">
              <span className="footer-logo-check">✓</span> KIRAN DIGHE
            </div>
            <p className="footer-description">Building digital solutions with passion and creativity.</p>
          </div>

          {/* Contact Information */}
          <div className="footer-contact">
            <h3>Contact Info</h3>
            <div className="contact-item">
              <MdLocationOn className="contact-icon" />
              <div className="contact-text">
                <p>Kolhewadi, Sangamner,</p>
                <p>Ahilyanagar</p>
              </div>
            </div>
            <div className="contact-item email-item">
              <MdEmail className="contact-icon" />
              <a href="mailto:kirandighe2004@gmail.com" className="contact-link">
                kirandighe2004@gmail.com
              </a>
            </div>
            <div className="contact-item phone-item">
              <MdPhone className="contact-icon" />
              <a href="tel:+919860561254" className="contact-link">
                +91 9860561254
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="social-link" title="Facebook">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="social-link" title="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="social-link" title="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 Kiran Dighe. All Rights Reserved.
          </p>
          <p className="footer-credit">
            Website Created & Hosted By <span className="footer-credit-author">Kiran Dighe</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

 