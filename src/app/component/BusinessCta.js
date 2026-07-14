import Link from 'next/link';
import React from 'react'

const BusinessCta = ({
    subTitle = "Our Automation Process",
    heading = "Let's Automate Your Business",
    description = "Book a free consultation and let us help you save time, reduce costs and scale faster with smart automations.",
    ctaData = [
        {
            id: 1,
            iconClass: "fas fa-check",
            description: "Free Automation Consultation",
        },
        {
            id: 2,
            iconClass: "fas fa-check",
            description: "Custom Workflow Strategy",
        },
        {
            id: 3,
            iconClass: "fas fa-check",
            description: "No Obligation",
        },
        {
            id: 4,
            iconClass: "fas fa-check",
            description: "Expert Implementation",
        },
    ],
    btnText = "book a demo",
    btnLink = "/start-a-project",
    classOne, classtwo, spantxt, classtrd, spanclass
}) => {
    return (
        <section className='business-cta bg-white section-hero pb-5 '>
            <div className='container px-5'>
                <div className='row align-items-center'>
                    <div className='col-lg-6'>
                        <div className="content-wrap text-white pt-0 pb-0">
                            <div className="heading-section">
                                <div className={`sub fw-semibold effectFade fadeUp mx-0 ${classOne} `}>
                                    {subTitle}
                                </div>
                            </div>
                            <h2>{heading}</h2>
                            <p className="text effectFade fadeUp">{description}</p>
                        </div>
                    </div>

                    <div className={`col-lg-4 ${classtwo}`}>
                        <ul className='cta-lst' >
                            {ctaData.map((feature) => (
                                <li key={feature.id}>
                                    <div className='cta-icon'>
                                        <i className={feature.iconClass}></i>
                                    </div>
                                    <div className='cta-text'>
                                        {feature.title && <strong>{feature.title}</strong>}
                                        <p>{feature.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={`col-lg-2 ${classtrd}`}>
                        <div className="cta_btn">
                            <Link href={btnLink} className="tf-btn">
                                {btnText}
                            </Link>
                            <br />
                            <span>{spantxt}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default BusinessCta