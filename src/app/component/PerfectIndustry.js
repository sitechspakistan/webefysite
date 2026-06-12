import React from 'react'

function PerfectIndustry() {
    return (
        <section className='perfect-industry bg-white pt-4 pb-4'>
            <div className='container-fluid text-center'>
                <span>BUILT FOR EVERY APPOINTMENT-BASED BUSINESS</span>
                <h2>Perfect for Industries That Run on Appointments</h2>
            </div>
            <div className='container industries-container'>
                <div className="industry-item">
                    <div className="icon-box">🩺</div>
                    <p className="industry-text">Clinics & Healthcare</p>
                </div>
                <div className="industry-item">
                    <div className="icon-box" id='pur-col'>🩺</div>
                    <p className="industry-text">Dental Clinics</p>
                </div>
                <div className="industry-item">
                    <div className="icon-box">🩺</div>
                    <p className="industry-text">Veterinary Clinics</p>
                </div>
                <div className="industry-item" >
                    <div className="icon-box" id='org-col'>🩺</div>
                    <p className="industry-text">Restaurants & Cafes</p>
                </div>
                <div className="industry-item">
                    <div className="icon-box">🩺</div>
                    <p className="industry-text">Salons & Spas</p>
                </div>
                <div className="industry-item">
                    <div className="icon-box">🩺</div>
                    <p className="industry-text">Gyms & Fitness</p>
                </div>
                <div className="industry-item">
                    <div className="icon-box" id='org-col'>🩺</div>
                    <p className="industry-text">Consultants & Coaches</p>
                </div>
                <div className="industry-item">
                    <div className="icon-box">🩺</div>
                    <p className="industry-text">And Many More...</p>
                </div>
            </div>
        </section >
    )
}

export default PerfectIndustry
