import React, { useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import "./style.css";

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleContact = async (e) => {
    e.preventDefault();
    const info = {
      firstName,
      lastName,
      phone,
      email,
      message,
    };
    try {
      await axios.post("/api/contact", info);
      toast.success("Your Message is Sent");
    } catch (error) {
      console.log(error);
    }
    console.log(info);
  };

  return (
    <Layout>
      <section id="contact">
        <h1 class="section-header">Contact Us</h1>

        <div class="contact-wrapper">
          {/* the form section */}
          <form
            id="contact-form"
            class="form-horizontal"
            onSubmit={handleContact}
          >
            <input
              name="first_name"
              type="text"
              class="feedback-input"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              name="last_name"
              type="text"
              class="feedback-input"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              name="phone"
              type="number"
              class="feedback-input"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              name="email"
              type="text"
              class="feedback-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name="text"
              class="feedback-input"
              placeholder="If you are interested in our products and want to know more details, please leave a message here, we will reply you as soon as we can"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <input className="contact-submit" type="submit" value="SUBMIT" />
          </form>

          {/* the right section */}
          <div class="direct-contact-container">
            <ul class="contact-list">
              <li class="list-item">
                <i class="fa fa-map-marker fa-2x">
                  <span class="contact-text place">Dubai, UAE</span>
                </i>
              </li>

              <li class="list-item">
                <i class="fa fa-phone fa-2x">
                  <span class="contact-text phone">
                    <a href="tel:1-212-555-5555" title="Give me a call">
                      +971 423 463 74
                    </a>
                  </span>
                </i>
              </li>

              <li class="list-item">
                <i class="fa fa-envelope fa-2x">
                  <span class="contact-text gmail">
                    <a href="mailto:#" title="Send me an email">
                      info@Thageralrafedain.ae
                    </a>
                  </span>
                </i>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
