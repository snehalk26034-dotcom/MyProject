import React, { useState } from "react";
import "../css/Applications.css";

const Applications = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    specialRequests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Application submitted successfully!");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      comments: "",
      specialRequests: "",
    });
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (

    <div className="applications-page">
       <section className="vendor-application-hero">
      <div className="vendor-application-overlay"></div>

      <div className="vendor-application-content">
        <h1>Vendor Applications</h1>

        <p>
          For Craft &amp; Food Vendors, please provide the following
          information to register for our next event.
        </p>
      </div>
    </section>

      {/* FORM SECTION */}
      <main className="application-container">
        <form onSubmit={handleSubmit}>

          {/* FIRST NAME */}
          <div className="form-group">
            <label htmlFor="firstName">
              First Name<span>*</span>
            </label>

            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          {/* LAST NAME */}
          <div className="form-group">
            <label htmlFor="lastName">
              Last Name<span>*</span>
            </label>

            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          {/* EMAIL */}
          <div className="form-group">
            <label htmlFor="email">
              Email<span>*</span>
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* COMMENTS */}
          <div className="form-group">
            <label htmlFor="comments">
              Comments and/or Questions
            </label>

            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
            />
          </div>

          {/* SPECIAL REQUESTS */}
          <div className="form-group">
            <label htmlFor="specialRequests">
              Any special requests?
            </label>

            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
            />
          </div>

          {/* SUBMIT */}
          <div className="submit-area">
            <button type="submit">
              Submit
            </button>
          </div>

        </form>
      </main>

      {/* SCROLL TO TOP */}
      <button
        className="application-scroll-top"
        onClick={scrollTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>

    </div>
  );
};

export default Applications;