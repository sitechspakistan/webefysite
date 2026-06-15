import React from 'react'

function AiAgent() {
    return (
        <section className='ai-agent'>
            <div className='container-fluid bg-white'>
                <div className='container text-center pt-5'>
                    <h2>Multiple Ai Agents. One Goal: More Booking.</h2>

                    <div className='row pt-4'>

                        <div className='col-lg-4'>
                            <div className='ai-main-box'>
                                <div className='row'>
                                    <div className='col-lg-3'>
                                        <div className='icon'>
                                            <i className="fa-solid fa-phone"></i>
                                        </div>
                                    </div>
                                    <div className='col-lg-9'>
                                        <div className='content'>
                                            <h4>AI Voice Agent</h4>
                                            <p>Handles calls like a human</p>
                                            <ul className='list-text type-check'>
                                                <li ><i className="icon icon-check-solid"></i>Answers calls 24/7</li>
                                                <li ><i className="icon icon-check-solid"></i>Understands and responds naturally</li>
                                                <li ><i className="icon icon-check-solid"></i>Books, reschedules, or cancels</li>
                                                <li ><i className="icon icon-check-solid"></i>Calendar & CRM integration</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='ai-main-box'>
                                <div className='row'>
                                    <div className='col-lg-3'>
                                        <div className='icon'>
                                            <i className="fa-brands fa-whatsapp"></i>
                                        </div>
                                    </div>
                                    <div className='col-lg-9'>
                                        <div className='content'>
                                            <h4>AI WhatsApp Agent</h4>
                                            <p>Books appointments on WhatsApp</p>
                                            <ul className='list-text type-check'>
                                                <li ><i className="icon icon-check-solid"></i>Instant replies 24/7</li>
                                                <li ><i className="icon icon-check-solid"></i>Natural conversations</li>
                                                <li ><i className="icon icon-check-solid"></i>Shares availability & links</li>
                                                <li ><i className="icon icon-check-solid"></i>Reminders & follow-ups</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4' id='purple-box'>
                            <div className='ai-main-box'>
                                <div className='row'>
                                    <div className='col-lg-3'>
                                        <div className='icon'>
                                            <i className="fa-solid fa-comment"></i>
                                        </div>
                                    </div>
                                    <div className='col-lg-9'>
                                        <div className='content'>
                                            <h4>AI Chatbot</h4>
                                            <p>Captures & converts on your website</p>
                                            <ul className='list-text type-check'>
                                                <li ><i className="icon icon-check-solid"></i>Engages visitors instantly</li>
                                                <li ><i className="icon icon-check-solid"></i>Answers questions</li>
                                                <li ><i className="icon icon-check-solid"></i>Books appointments</li>
                                                <li ><i className="icon icon-check-solid"></i>Works 24/7</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AiAgent
