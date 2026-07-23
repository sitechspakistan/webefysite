import Link from 'next/link'
import React from 'react'
// import PhoneInput from "react-phone-input-2";
import { Palette, Search, Zap, Smartphone, ShieldCheck, CheckCircle } from 'lucide-react';
const heroFeatures = [
    { id: 1, iconClass: Palette, spanText: "Custom Design" },
    { id: 2, iconClass: Search, spanText: "SEO Optimized" },
    { id: 3, iconClass: Zap, spanText: "Lightning Fast" },
    { id: 4, iconClass: Smartphone, spanText: "Mobile First" },
];

const trustPoints = [
    { id: 1, icon: ShieldCheck, text: "No spam" },
    { id: 2, icon: CheckCircle, text: "Free consultation" },
    { id: 3, icon: CheckCircle, text: "No obligation" },
];


function HeroForm() {
    return (
        <div>
            <div id="third-hero" className="section-hero">
                <div className="hero-image"></div>
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className="content-wrap text-white">

                                <div className="heading-section">
                                    <div className="sub fw-semibold effectFade fadeUp">
                                        Website Development in Dallas, TX
                                    </div>
                                </div>

                                <div className="title text-display-2 effectFade fadeRotateX">
                                    <h1>
                                        <span className="title1 fw-semibold text-gradient-1">
                                            Website Development
                                        </span>
                                        <br />
                                        <div className="title2 d-flex gap-20 flex-wrap">
                                            <span className="fw-semibold text-gradient-1">
                                                Company in
                                            </span>
                                        </div>
                                        <div className="title2 d-flex gap-20 flex-wrap">
                                            <span className="fw-semibold " style={{ color: "#ffaaff" }}>
                                                Dallas, TX
                                            </span>
                                        </div>
                                    </h1>
                                </div>

                                <p className="text effectFade fadeUp">
                                    We build high-performance websites that help Dallas businesses attract more customers, rank higher on Google, and grow faster online.
                                </p>
                                <div className="d-flex gap-3 py-3">
                                    {heroFeatures.map((item) => (
                                        <div className="d-flex align-items-center gap-2" key={item.id}>
                                            <item.iconClass className="w-5 h-5 text-purple-600" />
                                            <span className="whitespace-nowrap">{item.spanText}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="third_hero_btn">
                                    <div>
                                        <Link href="#contact" className="tf-btn">
                                            View Our Work ➔
                                        </Link>
                                    </div>
                                    <div className='btn-css'>
                                        <Link href="/start-a-project" className="tf-btn">
                                            Book Free Call
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 pt-5 d-flex justify-content-center align-items-center'>
                            <div id="contact" className="flat-spacing">
                                <div className="section-contact  section-project p-0">

                                    <div className="row">
                                        <form
                                            className="form-contact effectFade fadeUp"
                                        >
                                            <h4 className="heading fw-semibold pb-2 mb-0">
                                                Get Your Free Website Quote
                                            </h4>
                                            <p className="text effectFade fadeUp pb-3">
                                                Tell us about your project and we'll get back within 24 hours.
                                            </p>



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
                                                <div className="col-lg-6">
                                                    <fieldset className="mb-21">
                                                        <label className="fw-semibold text-body-3 mb-20">
                                                            Website IP / URL
                                                        </label>
                                                        <input
                                                            name="text"
                                                            type="text"

                                                            placeholder="https://yourwebsite.com"
                                                            required
                                                        />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6">
                                                    <fieldset className="mb-21">
                                                        <label className="fw-semibold text-body-3 mb-20">
                                                            Budget Range
                                                        </label>
                                                        <select
                                                            name="service"
                                                            className="contact-select"

                                                        >
                                                            <option value="">Choose a Service</option>
                                                            <option value="$500-$1000">
                                                                $500-$1000
                                                            </option>
                                                            <option value="$500-$1000">$500-$1000</option>
                                                            <option value="$500-$1000">$500-$1000</option>
                                                            <option value="$500-$1000">$500-$1000</option>
                                                        </select>
                                                    </fieldset>
                                                </div>
                                                <fieldset className="mb-18">
                                                    <label className="fw-semibold text-body-3 mb-20">
                                                        Tell us about your project
                                                    </label>
                                                    <textarea
                                                        name="message"

                                                        placeholder="Write a few details about your project..."
                                                    ></textarea>
                                                </fieldset>
                                            </div>

                                            <button
                                                type="submit"
                                                className="tf-btn w-100" style={{ background: "#dd006f" }}>
                                                Submit Message

                                            </button>

                                            <div className="d-flex gap-5 mx-auto justify-content-center pt-3 text-gray-500">
                                                {trustPoints.map((item) => (
                                                    <div className="d-flex align-items-center gap-1" key={item.id}>
                                                        <item.icon className="w-4 h-4" />
                                                        <span>{item.text}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroForm