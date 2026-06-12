import Link from 'next/link'
import React from 'react'

function ThirdHero() {
    return (
        <div>
            <div className="section-hero" id="third-hero">
                <div className="hero-image"></div>
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className="content-wrap text-white">

                                <div className="heading-section">

                                    <div className="heading-sub fw-semibold effectFade fadeUp">
                                        AI AUTOMATION FOR BOOKINGS & APPOINTMENTS
                                    </div>


                                </div>
                                <div className="title text-display-2 effectFade fadeRotateX">
                                    <h1>
                                        <span className="title1 fw-semibold text-gradient-1">
                                            AI Agents That Book Appointments for You
                                        </span>
                                        <br />

                                        <div className="title2 d-flex gap-20 justify-content-center flex-wrap">
                                            <span className="fw-semibold text-gradient-1">
                                                While You Focus on What Matters
                                            </span>
                                        </div>

                                    </h1>
                                </div>
                                <p className="text effectFade fadeUp">
                                    Our AI agents handle calls, chats, and messages 24/7 to book, reschedule, and manage appointments automatically. Never miss a booking again.
                                </p>

                                <div className="d-flex justify-content-start align-items-center gap-5">
                                    <div>
                                        <Link href="/start-a-project" className="tf-btn">
                                            Book a Demo ⇾
                                        </Link>
                                    </div>
                                    <div className='btn-css'>
                                        <Link href="/start-a-project" className="tf-btn">
                                            See How Its Works
                                        </Link>
                                    </div>
                                </div>


                                <div>
                                    <ul>
                                        <li><img src="/assets/images/products/clock.svg" width={30} height={28}></img>24/7 Availability</li>
                                        <li><img src="/assets/images/products/task.svg" width={30} height={28}></img>No Missed Bookings</li>
                                        <li><img src="/assets/images/products/ai.svg" width={30} height={28}></img>Fully Automated</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                            <img className='hero-img' src="/assets/images/ai-booking.png"></img>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default ThirdHero
