import Link from 'next/link'
import React from 'react'

const RestaurantCta = () => {
    return (
        <section className='business-cta bg-white section-hero pb-5 ' id='rest-cta'>
            <div className='container px-5'>
                <div className='row align-items-center'>
                    <div className='col-lg-6'>


                        <div className="content-wrap text-white pt-0 pb-0">

                            <h2>
                                Ready to Modernize Your Restaurant?
                            </h2>
                            <p className="text effectFade fadeUp">
                                Let's build a smart digital solution that helps you serve better, operate efficiently and grow your business.
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className="cta_btn text-center">

                            <Link href="/start-a-project" className="tf-btn">
                                Contact Us
                            </Link>
                            <br />
                            <span className='text-center'>No commitment. Just a friendly conversation.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default RestaurantCta