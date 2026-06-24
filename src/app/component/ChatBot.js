"use client"
import React, { useState } from 'react'

const ChatBot = () => {

    const [mode, setMode] = useState("teaser");


    return (
        <div>


            {mode === "teaser" && (
                <div className="wb-chat-teaser d-none">

                    <span
                        className="wb-close"
                        onClick={() => setMode("minimized")}
                    >
                        ✖
                    </span>

                    <div className="wb-gift"><img src='/assets/images/robot.png' /></div>

                    <h4>Hey there!</h4>

                    <p>
                        I'm Webefy AI Assistant.
                        How can I help you today?
                    </p>

                    <button
                        className="wb-chat-btn"
                        onClick={() => setMode("chat")}
                    >
                        Chat with me
                    </button>

                </div>
            )}

            {mode === "chat" && (
                <div className="wb-chat-window">

                    <div className="wb-header">

                        <div className="wb-avatar"><img src='/assets/images/robot.png' /></div>

                        <div>
                            <h4>Webefy AI Assistant</h4>
                            <span><i className='fas fa-circle'></i>Online</span>
                        </div>

                        <span
                            className="wb-close"
                            onClick={() => setMode("minimized")}
                        >
                            ✖
                        </span>

                    </div>

                    <div className="wb-body">

                        <div className="wb-bot">
                            Hi there 👋 What can we help you with?
                        </div>

                        <div className="wb-services">
                            <button>🌐 Web Design & Development</button>
                            <button>⚡ AI Automation</button>
                            <button>🎨 Branding & Identity</button>
                            <button>💬 Other Inquiries</button>
                        </div>

                        <div className="wb-user">
                            I need a website for my business.
                        </div>

                        <div className="wb-bot">
                            Great! What type of business?
                        </div>

                        <div className="wb-suggestions">
                            <button>Restaurant</button>
                            <button>Clinic</button>
                            <button>Ecommerce</button>
                            <button>Agency</button>
                        </div>

                    </div>

                    <div className="wb-footer">
                        <input type="text" placeholder="Type your message..." />
                        <button>➤</button>
                    </div>

                </div>
            )}

            {mode === "minimized" && (
                <div
                    className="wb-minimized"
                    onClick={() => setMode("chat")}
                >
                    <img src='/assets/images/robot.png' />
                </div>
            )}

        </div>
    )
}

export default ChatBot