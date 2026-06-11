"use client";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ContactForm() {
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!formData.name.trim() || !formData.email.trim()) {
      setError("Please fill all the required fields first! ⚠️");
      return;
    }
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: phone,
        service: formData.service,
        message: formData.message,
      }),
    });

    const data = await res.json();

    if (data.success) {
      setSuccess(true);
      setError("");
      setFormData({ name: "", email: "", service: "", message: "" });
      setPhone("");
    } else {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div id="contact" className="flat-spacing pb-5">
      <div className="section-contact">
        <div className="contact-image"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="col-left">
                <div className="heading-section mb-48">
                  <div className="heading-sub fw-semibold effectFade fadeUp">
                    Contact
                  </div>
                  <h2 className="heading-title effectFade fadeRotateX">
                    Let’s Build <br /> Intelligent Things
                  </h2>
                </div>
                <div>
                  <div className="contact-item mb-20 effectFade fadeRotateX">
                    <i className="icon icon-envelope-solid"></i>
                    <div className="content">
                      <div className="title fw-semibold mb-2">
                        E-mail address
                      </div>
                      <div className="text">hello@webefytoday.com</div>
                    </div>
                  </div>
                  <div
                    className="contact-item effectFade fadeRotateX"
                    data-delay="0.1"
                  >
                    <i className="icon icon-headset-solid"></i>
                    <div className="content">
                      <div className="title fw-semibold mb-2">Phone number</div>
                      <div className="text">+1 (302) 779-1338</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <form onSubmit={handleSubmit} className="form-contact effectFade fadeUp">
                <h4 className="heading fw-semibold">
                  Have a project in mind?
                </h4>

                {/* {success && <p className="text-success mb-3 fw-semibold">Your message has been sent successfully! 🎉</p>} */}
                {error && <p className="text-danger mb-3 fw-semibold">{error}</p>}

                <div className="row">
                  <div className="col-lg-6">
                    <fieldset className="mb-21">
                      <label className="fw-semibold text-body-3 mb-20">
                        Your Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset className="mb-21">
                      <label className="fw-semibold text-body-3 mb-20">
                        Your E-mail
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter the e-mail"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6 custom-phone-input">
                    <fieldset className="mb-21">
                      <label className="fw-semibold text-body-3 mb-20">
                        Your Phone Number
                      </label>
                      <PhoneInput
                        country={"pk"}
                        value={phone}
                        onChange={(value) => setPhone(value)}
                        placeholder="Enter phone number"
                        inputProps={{
                          name: "phone",
                          required: true,
                        }}
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset className="mb-21">
                      <label className="fw-semibold text-body-3 mb-20">
                        Select Service
                      </label>
                      <select
                        name="service"
                        className="contact-select"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Choose a Service</option>
                        <option value="Web Development">Web Development</option>
                        <option value="AI Automation">AI Automation</option>
                        <option value="Branding">Branding</option>
                        <option value="Website care">Website Care</option>
                      </select>
                    </fieldset>
                  </div>
                  <fieldset className="mb-18">
                    <label className="fw-semibold text-body-3 mb-20">
                      More About the Project
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us details about your project"
                    ></textarea>
                  </fieldset>
                </div>

                <button
                  type="submit"
                  className={`tf-btn w-100 ${success ? 'btn-success-active' : ''}`}
                  disabled={loading || success}
                  style={{
                    background: success ? '#28a745' : '',
                    borderColor: success ? '#28a745' : '',
                    color: success ? '#fff' : '',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {loading ? (
                    <span>Sending... </span>
                  ) : success ? (
                    <span>Message Sent Successfully!</span>
                  ) : (
                    "Submit Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}