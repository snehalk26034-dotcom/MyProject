import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import contactBg from "../assets/contact_bg_img.png";

const initialFormData = { firstName: "", lastName: "", email: "", message: "" };

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((currentData) => ({ ...currentData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({ type: "error", message: "Email service is not configured yet. Add the EmailJS IDs to your .env.local file." });
      return;
    }

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.send(serviceId, templateId, {
        to_email: "kirandighe1945@gmail.com",
        from_name: `${formData.firstName} ${formData.lastName}`.trim(),
        from_email: formData.email,
        reply_to: formData.email,
        message: formData.message,
      }, { publicKey });
      setFormData(initialFormData);
      setStatus({ type: "success", message: "Thanks! Your message has been sent successfully." });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message: error?.text || error?.message || "Your message could not be sent. Please try again shortly.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div>
      <section className="contact-section" style={{ backgroundImage: `url(${contactBg})` }}>
        <div className="contact-overlay" />
        <div className="contact-content"><h1>Contact Us</h1></div>
      </section>

      <p className="text">888 Griffiths Way, Themeland ML 12345 <br />Tel: (987) 654-3210 <br />Email: kirandighe1945@gmail.com</p>
      <p className="text">Open Hours: <br />Monday-Friday: 9:00AM-7:00PM <br />Saturday: 10:30AM-8:00PM <br />Sunday: Closed</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="firstName"><b>First Name*</b></label>
          <input id="firstName" type="text" name="firstName" className="inp" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-field">
          <label htmlFor="lastName"><b>Last Name*</b></label>
          <input id="lastName" type="text" name="lastName" className="inp" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="form-field">
          <label htmlFor="email"><b>Email*</b></label>
          <input id="email" type="email" name="email" className="inp" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-field">
          <label htmlFor="message"><b>Message*</b></label>
          <textarea id="message" name="message" className="inp_last" value={formData.message} onChange={handleChange} required />
        </div>

        <button type="submit" className="button1" disabled={isSending}>{isSending ? "Sending..." : "Submit"}</button>
        {status.message && <p className={`form-status ${status.type}`} role="status">{status.message}</p>}
      </form>

      <div className="map">
        <iframe src="https://www.google.com/maps?q=Selu,Maharashtra&output=embed" title="Selu Maharashtra Map" loading="lazy" />
      </div>
    </div>
  );
};

export default Contact;
