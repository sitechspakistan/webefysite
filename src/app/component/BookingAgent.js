import React from 'react'

function BookingAgent() {
    return (
        <div className='pt-5 bg-white pb-5'>
            <div className='container'>
                <h2 className='text-center'>Why Businesses Love Our Booking Ai Agents</h2>

                <div className='booking_system'>
                    <div className='booking_agent'>
                        <i className="fa-regular fa-clock"></i>
                        <div className='agent_content'>
                            <span>24/7</span>
                            <span>Availability</span>
                        </div>
                    </div>
                    <div className='booking_agent'>
                        <i className="fa-solid fa-calendar-xmark"></i>
                        <div className='agent_content'>
                            <span>No More</span>
                            <span>Missed Bookings</span>
                        </div>
                    </div>
                    <div className='booking_agent'>
                        <i className="fa-solid fa-chart-line"></i>
                        <div className='agent_content'>
                            <span>Higher</span>
                            <span>Conversions</span>
                        </div>
                    </div>
                    <div className='booking_agent'>
                        <i className="fa-solid fa-heart"></i>
                        <div className='agent_content'>
                            <span>Better Customer</span>
                            <span>Experience</span>
                        </div>
                    </div>
                    <div className='booking_agent'>
                        <i className="fa-solid fa-coins"></i>
                        <div className='agent_content'>
                            <span>Save Time &</span>
                            <span>Reduce Costs</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BookingAgent
