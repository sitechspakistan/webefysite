"use client";
import { useState, useRef, useEffect } from "react";

const services = [
    {
        id: 1,
        title: "Website Development",
        num: "(01)",
        img: "assets/images/section/service-1.jpg",
        text: "Building responsive websites that combine stunning design with flawless functionality to create seamless user experiences, drive conversions, and establish your powerful online presence that grows with your business needs.",
    },
    {
        id: 2,
        title: "AI Automation",
        num: "(02)",
        img: "assets/images/section/service-2.jpg",
        text: "Save time and scale faster with intelligent automation that learns, adapts, and works for you 24/7.",
    },
    {
        id: 3,
        title: "Branding",
        num: "(03)",
        img: "assets/images/section/service-3.jpg",
        text: "Developing cohesive brand identities that tell your story through strategic visual elements, consistent messaging, and authentic positioning to build trust, recognition, and emotional connections with customers who matter most.",
    },
];

// ✅ Alag ServiceItem component — har item ka apna ref
function ServiceItem({ service, isOpen, onToggle }) {
    const contentRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (isOpen) {
            setHeight(contentRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    return (
        <div
            className="accordion-faq_item effectFade fadeUp"
            role="presentation"
        >
            <div
                className={`accordion-action services-image-btn ${isOpen ? "active-img" : "collapsed"}`}
                data-img={service.img}
                role="button"
                onClick={() => onToggle(service.id)}
            >
                <h3 className="accordion-title">
                    {service.title}
                    <div className="text-body-1 num">{service.num}</div>
                </h3>
            </div>

            {/* ✅ Height animate hogi */}
            <div
                ref={contentRef}
                style={{
                    height: `${height}px`,
                    overflow: "hidden",
                    transition: "height 0.4s ease",
                }}
            >
                <div className="accordion-content">
                    <div className="text-body-3 text-neutral-300 text">
                        {service.text}
                    </div>
                    <a href="blog-single.html" className="tf-btn-2">
                        Read more
                        <i className="icon icon-arrow-top-right"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function HomeService() {
    const [openIndex, setOpenIndex] = useState(1);

    const toggle = (id) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        <div className="box-white">
            <div id="services" className="section-services flat-spacing">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xxl-5 col-lg-6">
                            <div className="d-flex justify-content-between align-items-center h-100">
                                <div className="col-left">
                                    <div className="heading-section mb-30">
                                        <h2 className="heading-title text-gradient-3 effectFade fadeRotateX">
                                            The Services That Turn Vision Into Reality.
                                        </h2>
                                    </div>
                                    <p className="effectFade fadeUp">
                                        We combine world-class web development, timeless logo design,
                                        and powerful branding to position your business at the pinnacle
                                        of its industry.
                                    </p>
                                    <a href="/services" className="tf-btn-2 mt-4">
                                        Our Services
                                        <i className="icon icon-arrow-top-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-6 col-lg-6">
                            <div className="accordion-faq_list">
                                {services.map((service) => (
                                    <ServiceItem
                                        key={service.id}
                                        service={service}
                                        isOpen={openIndex === service.id}
                                        onToggle={toggle}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}