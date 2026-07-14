import Link from 'next/link'
import React from 'react'
const heroFeatures = [
    { id: 1, iconClass: "fa-solid fa-bullseye", title: "All-in-One Platform", subtitle: "Everything in one place" },
    { id: 2, iconClass: "fa-solid fa-cloud", title: "Easy to Use", subtitle: "Simple for your team" },
    { id: 3, iconClass: "fa-solid fa-chart-line", title: "Boost Revenue", subtitle: "More orders & bookings" },
    { id: 4, iconClass: "fa-solid fa-award", title: "24/7 Support", subtitle: "We're here for you" },
];
function FourthHero() {
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
                                        RESTAURANT MANAGEMENT SOLUTION
                                    </div>
                                </div>

                                <div className="title text-display-2 effectFade fadeRotateX">
                                    <h1>
                                        <span className="title1 fw-semibold text-gradient-1">
                                            Everything Your
                                        </span>
                                        <br />
                                        <div className="title2 d-flex gap-20 flex-wrap">
                                            <span className="fw-semibold text-gradient-1">
                                                Restaurant Needs.
                                            </span>
                                        </div>
                                        <div className="title2 d-flex gap-20 flex-wrap">
                                            <span className="fw-semibold " style={{ color: "#ffaaff !important" }}>
                                                One Smart Digital Solution.
                                            </span>
                                        </div>
                                    </h1>
                                </div>

                                <p className="text effectFade fadeUp">
                                    From beautiful websites and table reservations to QR menus, online ordering, kitchen displays, and AI automation—we help restaurants run smarter and serve more customers.
                                </p>

                                <div className="third_hero_btn">
                                    <div>
                                        <Link href="#contact" className="tf-btn">
                                            Book Free Demo →
                                        </Link>
                                    </div>
                                    <div className='btn-css'>
                                        <Link href="/start-a-project" className="tf-btn">
                                            View Features
                                        </Link>
                                    </div>
                                </div>

                                <div className="hero-feature-row">
                                    {heroFeatures.map((item) => (
                                        <div className="hero-feature-item" key={item.id}>
                                            <i className={item.iconClass}></i>
                                            <div className="hero-feature-text">
                                                <strong>{item.title}</strong>
                                                <p>{item.subtitle}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                            <img className='hero-img' src={`/assets/images/restaurant/hero-img.png`}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FourthHero