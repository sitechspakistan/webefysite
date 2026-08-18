import React from 'react'
import { Clock, DollarSign, ChartNoAxesColumn } from 'lucide-react';
import Link from 'next/link';
const heroFeatures = [
    { id: 1, iconClass: Clock, spanText: "Save Time" },
    { id: 2, iconClass: DollarSign, spanText: "Reduce Costs" },
    { id: 3, iconClass: ChartNoAxesColumn, spanText: "Scale Effortlessly" },
];

const HeroFormTwo = () => {
    return (
        <div>
            <div id="third-hero" className="section-hero hero-form-two">
                <div className="hero-image"></div>
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-6 p-relative left-sticky'>

                            <div className="content-wrap text-white">

                                <div className="heading-section">
                                    <div className="sub fw-bold effectFade fadeUp">
                                        AI Automation
                                    </div>
                                </div>

                                <div className="title text-display-2 effectFade fadeRotateX">
                                    <h1>
                                        <span className="title1 fw-bold text-gradient-1">
                                            Work Smarter.
                                        </span>
                                        <br />
                                        <div className="title2 d-flex gap-20 flex-wrap">
                                            <span className="fw-bold text-gradient-1">
                                                Scale Faster.
                                            </span>
                                        </div>
                                    </h1>
                                </div>

                                <p className="text effectFade fadeUp">
                                    We build AI-powered systems that automate repetitive tasks, reduce manual work, and help your business grow 24/7 so you can focus on what truly matters.
                                </p>


                                <div className="third_hero_btn">
                                    <div>
                                        <Link href="#calculator" className="tf-btn">
                                            See How It Works
                                        </Link>
                                    </div>
                                    {/* <div className='btn-css'>
                                        <Link href="/start-a-project" className="tf-btn">
                                            Book Free Call
                                        </Link>
                                    </div> */}
                                </div>
                                <div className="d-flex gap-3 py-3 city-icons">
                                    {heroFeatures.map((item) => (
                                        <div className="d-flex align-items-center gap-2" key={item.id}>
                                            <item.iconClass id="city-icon" />
                                            <span className="whitespace-nowrap">{item.spanText}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-6 pt-lg-5 pt-3 d-flex justify-content-center align-items-center'>
                            <div id="contact" className="flat-spacing">
                                <div className="section-contact  section-project p-0">

                                    <div className="row">
                                        <form
                                            className="form-contact effectFade fadeUp"
                                        >
                                            <h4 className="heading fw-semibold pt-2 pb-2 mb-0">
                                                Get Your Free AI Automation Audit
                                            </h4>
                                            <p className="text effectFade fadeUp pb-4">
                                                Tell us about your business we&apos;ll map the automation opportunities.
                                            </p>



                                            <div className="row">
                                                <div className="col-lg-6 col-6">
                                                    <fieldset className="mb-21">
                                                        <label className="fw-semibold text-body-3 mb-20">
                                                            Full Name*
                                                        </label>
                                                        <input
                                                            name="name"
                                                            type="text"
                                                            placeholder="Enter your full name"
                                                            required
                                                        />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6 col-6">
                                                    <fieldset className="mb-21">
                                                        <label className="fw-semibold text-body-3 mb-20">
                                                            Work Email*
                                                        </label>
                                                        <input
                                                            name="email"
                                                            type="email"

                                                            placeholder="Enter the e-mail"
                                                            required
                                                        />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6 col-6">
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
                                                <div className="col-lg-6 col-6">
                                                    <fieldset className="mb-21">
                                                        <label className="fw-semibold text-body-3 mb-20">
                                                            Company Name*
                                                        </label>
                                                        <input
                                                            name="text"
                                                            type="text"

                                                            placeholder="Acme Inc."
                                                            required
                                                        />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6">
                                                    <fieldset className="mb-21">
                                                        <label className="fw-semibold text-body-3 mb-20">
                                                            Company Size
                                                        </label>
                                                        <select
                                                            name="service"
                                                            className="contact-select"

                                                        >
                                                            <option value="">Select Size</option>
                                                            <option value="1-10">
                                                                1-10
                                                            </option>
                                                            <option value="11-50">11-50</option>
                                                            <option value="51-200">51-200</option>
                                                            <option value="200">200+</option>
                                                        </select>
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6">
                                                    <fieldset className="mb-21">
                                                        <label className="fw-semibold text-body-3 mb-20">
                                                            What do you want to automate?
                                                        </label>
                                                        <select
                                                            name="service"
                                                            className="contact-select"

                                                        >
                                                            <option value="">Select an Option</option>
                                                            <option value="lead generation">
                                                                Lead Generation
                                                            </option>
                                                            <option value="customer-support">Customer Support</option>
                                                            <option value="internal-operation">Internal operations</option>
                                                            <option value="reporting-data">Reporting & Data</option>
                                                        </select>
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-12">
                                                    <fieldset className="mb-21">
                                                        <label className="fw-semibold text-body-3 mb-20">
                                                            Estimated Budget
                                                        </label>
                                                        <select
                                                            name="service"
                                                            className="contact-select"

                                                        >
                                                            <option value="">Select Budget Range</option>
                                                            <option value="$2000">
                                                                Under $2000
                                                            </option>
                                                            <option value="$2000-$5000">$2000-$5000</option>
                                                            <option value="$5000-$15000">$5000-$15000</option>
                                                            <option value="$15000">$15000+</option>
                                                        </select>
                                                    </fieldset>
                                                </div>
                                                <fieldset className="mb-18">
                                                    <label className="fw-semibold text-body-3 mb-20">
                                                        Describe your biggest challenge*
                                                    </label>
                                                    <textarea
                                                        name="message"

                                                        placeholder="E.g. We spend too much time on manual data entry..."
                                                    ></textarea>
                                                </fieldset>
                                            </div>

                                            <button
                                                type="submit"
                                                className="tf-btn w-100" style={{ background: "#dd006f" }}>
                                                Get My Free Audit

                                            </button>

                                            {/* <div className="city-icons-two d-flex gap-5 mx-auto justify-content-center pt-3 text-gray-500">
                                                {trustPoints.map((item) => (
                                                    <div className="d-flex align-items-center gap-1 city-icon-two" key={item.id}>
                                                        <item.icon className="w-4 h-4" />
                                                        <span>{item.text}</span>
                                                    </div>
                                                ))}
                                            </div> */}
                                            <p className='text-center pt-2 fs-lg-6'>No spam. No obligation. We respect your privacy.</p>
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

export default HeroFormTwo
