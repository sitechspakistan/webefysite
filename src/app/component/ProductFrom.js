"use client";
import React from 'react'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


const ProductFrom = () => {
    const featuresData = [
        {
            id: 1,
            iconClass: "fas fa-file-alt",
            title: "No Obligation",
            description: "100% Free Demo",
        },
        {
            id: 2,
            iconClass: "fas fa-headset",
            title: "Quick Response",
            description: "We'll contact you soon",
        },
        {
            id: 3,
            iconClass: "fas fa-shield-alt",
            title: "Secure & Private",
            description: "Your data is safe",
        },
    ];
    const aiFeaturesData = [
        {
            id: 1,
            iconClass: "fa-solid fa-phone",
            title: "Live AI Voice Agent Demo",
            description: "See how AI handles calls and books appointments",
        },
        {
            id: 2,
            iconClass: "fab fa-whatsapp",
            title: "WhatsApp Booking Workflow",
            description: "Automate conversations and capture bookings",
        },
        {
            id: 3,
            iconClass: "far fa-calendar-alt",
            title: "Calendar Integration Setup",
            description: "Sync with your calendar and manage availability",
        },
        {
            id: 4,
            iconClass: "fas fa-chart-line",
            title: "Industry-Specific Recommendations",
            description: "Get strategies tailored to your business",
        },
        {
            id: 5,
            iconClass: "far fa-clock",
            title: "15-Minute Consultation",
            description: "Quick, focused and completely free",
        },
    ];
    const iconFeatures = [
        {
            id: 1,
            iconClass: 'far fa-clock',
            title: '24/7',
            subtitle: 'availability'
        },
        {
            id: 2,
            iconClass: 'far fa-calendar',
            title: 'No More',
            subtitle: 'Missed Booking'
        },
        {
            id: 3,
            iconClass: 'fas fa-rocket',
            title: 'Setup',
            subtitle: 'In Days'
        },
        {
            id: 4,
            iconClass: 'fas fa-shield-alt',
            title: 'Work With',
            subtitle: 'Existing System'
        }
    ];


    return (
        <section id='product-form' className="section-hero bg-white pb-5">
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                        <div className="content-wrap text-white">

                            <div className="heading-section">

                                <div className="sub fw-semibold effectFade fadeUp">
                                    Book A Free Demo
                                </div>


                            </div>
                            <div className="title text-display-2 effectFade fadeRotateX">
                                <h2>See Ai Booking Agents In Action </h2>
                            </div>
                            <p className="text effectFade fadeUp">
                                Get a personalized demo and see how our AI agents can handle calls, chats and bookings for your business 24/7 – without missing a single appointment.
                            </p>

                            <div className='ai-features'>
                                <ul className='feature-lst'>
                                    {aiFeaturesData.map((feature) => (
                                        <li key={feature.id}>
                                            <div className='feature-icon'>
                                                <i className={feature.iconClass}></i>
                                            </div>
                                            <div className='feature-text'>
                                                <strong>{feature.title}</strong>
                                                <p>{feature.description}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className='main-icon-box'>
                                <div className="row">
                                    {iconFeatures.map((feature) => (
                                        <div className='col-lg-3' key={feature.id}>
                                            <div className='icon-wrapper'>
                                                <i className={feature.iconClass}></i>
                                                <div className='icon_text'>
                                                    <p>
                                                        <strong>{feature.title}</strong> <br />
                                                        {feature.subtitle}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6' id='form'>
                        <div className='form-icon'>
                            <i className='fa-solid fa-calendar-check'></i>
                            <div className='form-title'>
                                <h3>Book Your Demo</h3>
                                <p>Fill in the details below and we'll get back to you to schedule your demo</p>
                            </div>
                        </div>

                        <form>
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
                                            Business Name
                                        </label>
                                        <input
                                            name="business"
                                            type="text"
                                            placeholder="Enter your business name"
                                            required
                                        />
                                    </fieldset>
                                </div>

                                <div className="col-lg-12">
                                    <fieldset className="mb-21">
                                        <label className="fw-semibold text-body-3 mb-20">
                                            Business Type
                                        </label>
                                        <select
                                            name="service"
                                            className="contact-select"
                                        >
                                            <option value="">Select your business type</option>
                                            <option value="Clinic">Clinic</option>
                                            <option value="Dental Clinic">Dental Clinic</option>
                                            <option value="Branding">Veterinary Clinic</option>
                                            <option value="Restaurant">Restaurant</option>
                                            <option value="Salon">Salont</option>
                                            <option value="Gym">Gym</option>
                                            <option value="Consultant">Consultant</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </fieldset>
                                </div>

                                <div className="col-lg-12">
                                    <fieldset className="mb-21">
                                        <label className="fw-semibold text-body-3 mb-20">
                                            Monthly appointment Volume
                                        </label>
                                        <select
                                            name="volume"
                                            className="contact-select"
                                        >
                                            <option value="">Select Approximate Monthly bookings</option>
                                            <option value="0-50">0-50</option>
                                            <option value="50-100">50-100</option>
                                            <option value="100-300">100-300</option>
                                            <option value="300">300+</option>

                                        </select>
                                    </fieldset>
                                </div>
                                <div className="col-lg-12">
                                    <fieldset className="mb-18">
                                        <label className="fw-semibold text-body-3 mb-20">
                                            Tell us about your booking process (optional)
                                        </label>
                                        <textarea
                                            name="message"
                                            placeholder="How do you currently hande booking and appointments?"
                                        ></textarea>
                                    </fieldset>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="tf-btn w-100">
                                <i className='fas fa-arrow-right'></i> Book My Demo
                            </button>
                        </form>

                        <div className='form-lst'>
                            <ul className='form-feature'>
                                {featuresData.map((item) => (
                                    <li key={item.id}>
                                        <div className='icon'>
                                            <i className={item.iconClass}></i>
                                            <div className='form-text'>
                                                <h6>{item.title}</h6>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default ProductFrom



