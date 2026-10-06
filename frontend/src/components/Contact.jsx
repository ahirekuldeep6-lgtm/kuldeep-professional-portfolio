import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully! ✅");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message ❌");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Server connection failed ❌");
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">

        <div className="section-title">
          <p>Get In Touch</p>
          <h2>
            Contact <span>Me</span>
          </h2>
        </div>

        <div className="contact-content">

          <div className="contact-info">
            <h3>Let's Work Together</h3>

            <p>
              If you have a project, opportunity or any query, feel free to
              contact me. I would be happy to connect with you.
            </p>

            <div className="contact-item">
              <h4>Email</h4>
              <p>ahirekuldeep6@gmail.com</p>
            </div>

            <div className="contact-item">
              <h4>Location</h4>
              <p>Dhule, Maharashtra, India</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="primary-btn">
              Send Message
            </button>

            {status && <p className="form-status">{status}</p>}

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;

