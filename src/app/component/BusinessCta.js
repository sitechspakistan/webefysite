import Link from 'next/link';
import React from 'react'

const ctaData = [
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
];

const BusinessCta = () => {
    return (
        <section className='business-cta bg-white section-hero pb-5 '>
            <div className='container px-5'>
                <div className='row align-items-center'>
                    <div className='col-lg-6'>


                        <div className="content-wrap text-white pt-0 pb-0">

                            <div className="heading-section">
                                <div className="sub fw-semibold effectFade fadeUp mx-0">
                                    Our Automation Process
                                </div>
                            </div>
                            <h2>
                                Let's Automate Your Business
                            </h2>


                            <p className="text effectFade fadeUp">
                                Book a free consultation and let us help you save time, reduce costs and scale faster with smart automations.
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <ul className='cta-lst'>
                            {ctaData.map((feature) => (
                                <li key={feature.id}>
                                    <div className='cta-icon'>
                                        <i className={feature.iconClass}></i>
                                    </div>
                                    <div className='cta-text'>
                                        <strong>{feature.title}</strong>
                                        <p>{feature.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='col-lg-2'>
                        <div className="cta_btn">

                            <Link href="/start-a-project" className="tf-btn">
                                book a demo
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default BusinessCta