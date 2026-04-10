export const metadata = {
    title: "Contact Us | Webefy Today",
    description: "Trexa – AI Agency & SaaS HTML Template",
    alternates: {
        canonical: "https://webefytoday.com/contact",
    },
    icons: {
        icon: "/assets/images/webefy-lgo/about-shape1_2.png",
    }
};

export default function ContactUs() {

    return (

        <>
            <div id="contact" className="flat-spacing pb-5">
                <div className="box-black section-contact">
                    {/* <div className="contact-image">
                </div> */}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="col-left">
                                    <div className="heading-section mb-48">
                                        <h2 className="heading-title effectFade fadeRotateX">
                                            Let’s Build <br /> Intelligent Things
                                        </h2>

                                        <p className="pt-4 text-white">Got a project, an idea, or just want to brainstorm something cool?<br />
                                            Ping us - we are all ears and always ready to turn thoughts into tech magic!</p>
                                    </div>
                                    {/* <div>
                                        <div className="contact-item mb-20 effectFade fadeRotateX">
                                            <i className="icon icon-envelope-solid"></i>
                                            <div className="content text-dark">
                                                <div className="title fw-semibold mb-2">E-mail address</div>
                                                <div className="text">hello@webefytoday.com</div>
                                            </div>
                                        </div>
                                        <div className="contact-item effectFade fadeRotateX" data-delay="0.1">
                                            <i className="icon icon-headset-solid"></i>
                                            <div className="content text-dark">
                                                <div className="title fw-semibold mb-2">Phone number</div>
                                                <div className="text">+1 (302) 779-1338</div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <form className="form-contact effectFade fadeUp">
                                    {/* <h4 className="heading fw-semibold">We'd Love to Hear From You</h4> */}
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <fieldset className="mb-21">
                                                {/* <label className="fw-semibold text-body-3 mb-20">Your Name</label> */}
                                                <input className="" type="text" placeholder="First Name*" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset className="mb-21">
                                                <input className="" type="text" placeholder="Last Name*" required />
                                            </fieldset>
                                        </div>
                                        <fieldset className="mb-21">
                                            <input className="" type="text" placeholder="Company Name (Optional)*" required />
                                        </fieldset>
                                        <div className="col-lg-6">
                                            <fieldset className="mb-21">
                                                {/* <label className="fw-semibold text-body-3 mb-20">Your E-mail</label> */}
                                                <input className="" type="email" placeholder="E-mail*" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset className="mb-21">
                                                {/* <label className="fw-semibold text-body-3 mb-20">Your E-mail</label> */}
                                                <input className="" type="tel" placeholder="Phone Number*" required />
                                            </fieldset>
                                        </div>
                                    </div>
                                    <fieldset className="mb-18">
                                        <label className="fw-semibold text-body-3 mb-0">Describe Your Project Goal</label>
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