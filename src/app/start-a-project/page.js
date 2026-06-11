"use client";
import { useState } from "react";
import SecondHero from "../component/SecondHero";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


// export const metadata = {
//     title: "Start A Project | Webefy Today ",
//     description: "Built for the bold, made for the brave. Start your journey with Webefy Today. From design and development to automation, let's build your next big project.",
//     alternates: {
//         canonical: "https://webefytoday.com/start-a-project",
//     },
//     icons: {
//         icon: "/assets/images/webefy-lgo/about-shape1_2.png",
//     }
// };

export default function StartProject() {
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
        <>
            <SecondHero Subheading={"Start Your Journey"} Heading1={"Built for the Bold."} Heading2={"Made for the Brave."}
                Description=
                {<>
                    We don't follow the path we forge it. Strength, speed,<br /> and unstoppable power, all in one place.
                </>} />
            <div id="contact" className="flat-spacing">
                <div className="section-contact  section-project p-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 lg-mb-24">
                                <div className="col-left p-0">
                                    <div className="mb-24">
                                        <div className="heading-section mb-48">
                                            {/* <div className="heading-sub fw-semibold effectFade fadeUp">Contact</div> */}
                                            <div className="heading-title text-gradient-3 effectFade fadeRotateX">
                                                Let's Turn Your <br /> Idea Into Reality
                                            </div>
                                        </div>
                                        <p className="text effectFade fadeUp">Your Next Big Project Starts Here.
                                            Tell us about your goals, and we'll craft a strategy tailored to your business. From design to development to automation we build it all.</p>
                                    </div>
                                    <div className="row mb-lg-60 mb-md-4">
                                        <div className="col-md-6 md-mb-24">
                                            <div className="box-contact-item text-center effectFade fadeUp">
                                                <i className="icon icon-envelope-solid"></i>
                                                <h6 className="title fw-semibold">E-mail address</h6>
                                                <a className="text" href="mail:hello@youraiagency.com">
                                                    hello@webefytoday.com
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-6 md-mb-24">
                                            <div className="box-contact-item text-center effectFade fadeUp" data-delay="0.1">
                                                <i className="icon icon-headset-solid"></i>
                                                <h6 className="title fw-semibold">Phone number</h6>
                                                <a href="tel: +1 (647) 555 0172" className="text">
                                                    +1 (302) 779-1338
                                                </a>
                                            </div>
                                        </div>
                                        {/* <div className="col-md-4">
                                            <div className="box-contact-item text-center effectFade fadeUp" data-delay="0.2">
                                                <i className="icon icon-map-marker-solid"></i>
                                                <h6 className="title fw-semibold">Our Location</h6>
                                                <p className="text">
                                                    USA, New York – 1060 Str.
                                                </p>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="tf-social-1 gap-24 effectFade fadeRotateX">
                                        <a href="https://x.com/" target="_blank" className="text-body-1 fw-semibold">
                                            Twitter / X
                                            <div className="social-item">
                                                <i className="icon icon-twitter-x"></i>
                                            </div>
                                        </a>
                                        <a href="https://www.facebook.com/" target="_blank" className="text-body-1 fw-semibold">
                                            Facebook
                                            <div className="social-item">
                                                <i className="icon icon-facebook-f"></i>
                                            </div>
                                        </a>
                                        <a href="https://www.instagram.com/" target="_blank" className="text-body-1 fw-semibold">
                                            Instagram
                                            <div className="social-item">
                                                <i className="icon icon-instagram"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 pt-lg-0 pt-3">
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
        </>
    );
}