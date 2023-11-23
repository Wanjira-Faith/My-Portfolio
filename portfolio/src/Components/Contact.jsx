import React, { useState } from "react";
import Swal from 'sweetalert2';
import { FaShareAlt } from "react-icons/fa";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../Css/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "", 
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    Swal.fire({
      title: 'Success!',
      text: 'Message sent successfully!',
      icon: 'success',
      confirmButtonText: 'Nice',
      confirmButtonColor: '#f1cc17',
    });
  };
  

  return (
    <div>
      <Navbar />
      <div className="contact-form-container">
        <h2>Contact Me</h2>
        <p>Feel free to reach out. I'd love to connect with you!</p>

        <div className="contact-info">
          <div className="contact-box">
            <label>
              <FaShareAlt /> Social Profiles
            </label>
            <p>
            <a href="https://github.com/Wanjira-Faith" target="_blank" >
                <i className="fab fa-github-square"></i>
              </a>
              <a href="https://twitter.com/wanjiraq" target="_blank" >
                <i className="fab fa-twitter-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/wanjira-njuguna-8997a3256" target="_blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </p>
          </div>

          <div className="contact-box">
            <label>
              <AiOutlinePhone style={{ transform: "scaleX(-1)" }} /> Call Me
            </label>
            <p>+(254)713753900</p>
          </div>

          <div className="contact-box">
            <label><AiOutlineMail /> Email Me</label>
            <p>wanjirafaith22@gmail.com</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="name-email-container">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
            />
          </div>

          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
          />

          <textarea
            id="message"
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
