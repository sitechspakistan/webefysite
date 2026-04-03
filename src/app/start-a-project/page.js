import SecondHero from "../component/SecondHero";

export default function StartProject() {
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
                                            <div className="heading-sub fw-semibold effectFade fadeUp">Contact</div>
                                            <div className="heading-title text-gradient-3 effectFade fadeRotateX">
                                                Let’s Build <br /> Intelligent Things
                                            </div>
                                        </div>
                                        <p className="text effectFade fadeUp">combining creativity, technology, and strategy to craft solutions that think, adapt, and inspire. Connect with us to turn visionary ideas into meaningful, data-driven realities.</p>
                                    </div>
                                    <div className="row mb-60">
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
                            <div className="col-lg-6">
                                <form className="form-contact m-0 effectFade fadeUp">
                                    <h4 className="heading fw-semibold">Fill this form below</h4>
                                    <fieldset className="mb-21">
                                        <label className="fw-semibold text-body-3 mb-20">Your Name</label>
                                        <input className="" type="text" placeholder="Enter your full name" required />
                                    </fieldset>
                                    <fieldset className="mb-21">
                                        <label className="fw-semibold text-body-3 mb-20">Your Phone</label>
                                        <input className="" type="text" placeholder="Enter the e-mail" required />
                                    </fieldset>
                                    <fieldset className="mb-18">
                                        <label className="fw-semibold text-body-3 mb-0">More About The Project</label>
                                        <textarea name="text" className=""></textarea>
                                    </fieldset>
                                    <div className="attachment d-flex gap-8 align-items-center">
                                        <i className="icon icon-paperclip-solid fs-24"></i>
                                        <div className="fw-semibold text-body-3">Add an Attachment</div>
                                    </div>
                                    <button type="submit" className="tf-btn w-100">Submit Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}