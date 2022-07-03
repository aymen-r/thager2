import React, { useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import "./style.css";

const GetEstimate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [need, setNeed] = useState("");
  const [message, setMessage] = useState("");

  const handleContact = async (e) => {
    e.preventDefault();
    const info = {
      name,
      email,
      phone,
      need,
      message,
    };
    try {
      await axios.post("/api/contact/estimate", info);
      toast.success("Your demand of an estimate is Sent");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <Layout>
      <section id="contact">
        <h1 class="section-header">GET AN ESTIMATE</h1>

        <div class="estimate-wrapper">
          {/* the form section */}
          <form
            id="contact-form"
            class="estimate-horizontal"
            onSubmit={handleContact}
          >
            <input
              name="name"
              type="text"
              class="feedback-input"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              name="email"
              type="text"
              class="feedback-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              name="phone"
              type="number"
              class="feedback-input"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label className="op1">Need an estimate on?</label>
            <select
              className="feedback-input"
              value={need}
              onChange={(e) => setNeed(e.target.value)}
            >
              <option className="option_estimate" value=""></option>
              <option className="option_estimate" value="CONSUMPTION MEASURING">
                CONSUMPTION MEASURING
              </option>
              <option className="option_estimate" value="RESIDENTIAL SOLAR">
                RESIDENTIAL SOLAR
              </option>
              <option className="option_estimate" value="SAMLL BUSINESS SOLAR">
                SMALL BUSINESS SOLAR
              </option>
              <option className="option_estimate" value="COMMERCIAL SOLAR">
                COMMERCIAL SOLAR
              </option>
              <option className="option_estimate" value="INDUSTRIAL SOLAR">
                INDUSTRIAL SOLAR
              </option>
              <option className="option_estimate" value="AGRICULTURE SOLAR">
                AGRICULTURE SOLAR
              </option>
              <option className="option_estimate" value="SOLAR COMPONENTS">
                SOLAR COMPONENTS
              </option>
            </select>
            <textarea
              name="text"
              class="feedback-input est"
              placeholder="Supply some detail on your needs*"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <input className="contact-submit" type="submit" value="SUBMIT" />
          </form>

          {/* the right section */}
        </div>
      </section>
    </Layout>
  );
};

export default GetEstimate;
