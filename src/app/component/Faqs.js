"use client";
import { useState } from "react";

const faqs = [
    {
        id: 1,
        question: "What does Webefy Today actually do?",
        answer:
            "We are a full-service digital agency offering web development, AI automation, and branding helping businesses grow smarter and faster.",
        defaultOpen: true,
    },
    {
        id: 2,
        question: "How do I know which service is right for me?",
        answer:
            "Book a free consultation and we'll assess your business needs and recommend the best solution for you.",
    },
    {
        id: 3,
        question: "Do you work with startups or only established businesses?",
        answer:
            "Both! We work with startups, small businesses, and growing companies at every stage.",
    },
    {
        id: 4,
        question: "How long does a typical project take?",
        answer:
            "It depends on the scope. A branding project can take 2–3 weeks, while a full web app may take 6–12 weeks.",
    },
    {
        id: 5,
        question: "Do you offer packages or custom pricing?",
        answer:
            "We offer both. Custom quotes are available based on your specific requirements.",
    },
    {
        id: 6,
        question: "Can I hire you for just one service?",
        answer:
            "Absolutely. You can hire us for a single service or combine all three for maximum impact.",
    },
];

export default function Faqs() {
    const [openId, setOpenId] = useState(1);

    const toggle = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="section-faqs flat-spacing">
            <div className="container">
                <div className="heading-section center mb-64">
                    <div className="heading-sub fw-semibold effectFade fadeUp">FAQs</div>
                    <h2 className="heading-title text-gradient-3 effectFade fadeRotateX">
                        Frequently Asked <br />
                        Questions
                    </h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="accordion-asked">
                            {faqs.map((faq, index) => (
                                <div
                                    key={faq.id}
                                    className="accordion-asked-item effectFade fadeRotateX"
                                    data-delay={index * 0.1}
                                >
                                    <div className="accordion-asked-title">
                                        <button
                                            className={`accordion-button text-body-1 fw-semibold ${openId === faq.id ? "" : "collapsed"
                                                }`}
                                            type="button"
                                            onClick={() => toggle(faq.id)}
                                            aria-expanded={openId === faq.id}
                                        >
                                            {faq.question}
                                            <span className="right-icon"></span>
                                        </button>
                                    </div>

                                    {openId === faq.id && (
                                        <div className="accordion-collapse">
                                            <div className="accordion-body">{faq.answer}</div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}