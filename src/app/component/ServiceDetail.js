export default function ServiceDetail() {
    return (
        <div id="services" className="section-services flat-spacing container-fluid px-0">
            <div className="top">
                <div className="heading-section center mb-48">
                    <h2 className="heading-title text-gradient-3 effectFade fadeRotateX">One Agency, Three Superpowers.
                    </h2>
                </div>
                <p className="text text-center effectFade fadeUp">We combine world-className web development, timeless logo
                    design, and powerful <br /> branding to position your business at the pinnacle of its industry.
                </p>
            </div>

            <div className="service-black-box">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <img src="assets/images/services/web.jpg" className="img-fluid" alt="" />
                        </div>

                        <div className="col-md-6 d-flex flex-column justify-content-between">
                            <h3 className="text-white"><span>(01)</span> Web Development</h3>

                            <p>
                                From sleek landing pages to powerful web applications. We design and develop digital
                                experiences that are fast, scalable, and built to convert. Every pixel is
                                intentional, every line of code is purposeful.
                            </p>

                            <div className="list-tags mb-3">
                                <a href="#" className="tags-item fw-semibold">Custom Web App</a>
                                <a href="#" className="tags-item fw-semibold">UI/UX Design</a>
                                <a href="#" className="tags-item fw-semibold">SEO Optimized</a>
                                <a href="#" className="tags-item fw-semibold">E-commerce</a>
                                <a href="#" className="tags-item fw-semibold">Mobile Responsive</a>
                            </div>

                            <div className="text-body-1 num"><a href="#" className="tf-btn-2">
                                Read more
                                <i className="icon icon-arrow-top-right"></i>
                            </a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-box">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 d-flex flex-column justify-content-between">
                            <h3><span>(02)</span> AI Automation</h3>

                            <p>
                                We integrate intelligent automation
                                into your business workflows eliminating repetitive tasks, reducing errors,
                                and freeing your team to focus on what actually matters. From chatbots to full
                                process automation, we make AI work for you.
                            </p>

                            <div className=" list-tags">
                                <a href="#" className="tags-item fw-semibold">Custom AI Chatbots</a>
                                <a href="#" className="tags-item fw-semibold">Workflow Automation</a>
                                <a href="#" className="tags-item fw-semibold">API Integrations</a>
                                <a href="#" className="tags-item fw-semibold">Data Processing</a>
                                <a href="#" className="tags-item fw-semibold">AI Consulting</a>
                            </div>

                            <div className="text-body-1 num"><a href="#" className="tf-btn-2">
                                Read more
                                <i className="icon icon-arrow-top-right"></i>
                            </a></div>
                        </div>


                        <div className="col-md-6">
                            <img src="assets/images/services/AI.avif" className="img-fluid" alt="" />
                        </div>



                    </div>
                </div>
            </div>

            <div className="service-black-box mb-4">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <img src="assets/images/services/brand.jpg" className="img-fluid" alt="" />
                        </div>

                        <div className="col-md-6 d-flex flex-column justify-content-between">
                            <h3 className="text-white"><span>(03)</span> Branding</h3>

                            <p>
                                Your brand is the first impression
                                and the lasting one. We craft identities that go beyond logos, building a visual
                                language and strategy that communicates who you are, what you stand for, and why
                                you're different.
                            </p>

                            <div className="list-tags">
                                <a href="#" className="tags-item fw-semibold">Logo & Identity</a>
                                <a href="#" className="tags-item fw-semibold">Brand Strategy</a>
                                <a href="#" className="tags-item fw-semibold">Color & Typography</a>
                                <a href="#" className="tags-item fw-semibold">Social Media Kit</a>
                                <a href="#" className="tags-item fw-semibold">Brand Guidelines</a>
                            </div>

                            <div className="text-body-1 num"><a href="#" className="tf-btn-2">
                                Read more
                                <i className="icon icon-arrow-top-right"></i>
                            </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
}