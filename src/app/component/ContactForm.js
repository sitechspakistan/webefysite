"use client";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ContactForm() {
  const [service, setService] = useState("");
  const [phone, setPhone] = useState("");

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
              <form className="form-contact effectFade fadeUp">
                <h4 className="heading fw-semibold">
                  {" "}
                  Have a project in mind?
                </h4>
                <div className="row">
                  <div className="col-lg-6">
                    <fieldset className="mb-21">
                      <label className="fw-semibold text-body-3 mb-20">
                        Your Name
                      </label>
                      <input
                        className=""
                        type="text"
                        placeholder="Enter your full name"
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
                        className=""
                        type="email"
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
                        className="contact-select"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                      >
                        <option value="">Choose a Service</option>
                        <option value="web">Web Development</option>
                        <option value="ai">AI Automation</option>
                        <option value="branding">Branding</option>
                      </select>
                    </fieldset>
                  </div>
                  <fieldset className="mb-18">
                    <label className="fw-semibold text-body-3 mb-0">
                      More About the Project
                    </label>
                    <textarea name="text" className=""></textarea>
                  </fieldset>
                </div>
                {/* <div className="attachment d-flex gap-8 align-items-center">
                                    <i className="icon icon-paperclip-solid fs-24"></i>
                                    <div className="fw-semibold text-body-3">Add an Attachment</div>
                                </div> */}
                <button type="submit" className="tf-btn w-100">
                  Submit Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
