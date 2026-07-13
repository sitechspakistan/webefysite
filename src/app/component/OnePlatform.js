"use client"
import { Weight } from 'lucide-react';
import React, { useRef, useState } from 'react'

const OnePlatform = () => {
    const automations = [
        {
            bgcolor: "#f88181",
            title: "Professional Webstie",
            // desc: "Automate lead capture, follow-ups, and pipeline updates. Sync data smoothly between tools.",
            image: "img.jpg",
            icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_2230_475" maskUnits="userSpaceOnUse" x="1" y="1" width="38" height="38" style={{ maskType: "luminance" }}>
                        <path d="M1.66602 1.66683H38.3327V38.3335H1.66602V1.66683Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_2230_475)">
                        <path d="M30.5527 3.23727C32.7492 2.67731 35.1046 2.36572 37.6168 2.38362C37.6347 4.89586 37.3232 7.25133 36.7632 9.44775" stroke="white" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16.3852 29.6918H16.3844L12.1577 30.8813L9.11914 27.8427L10.3087 23.616V23.6153" stroke="white" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.11888 33.9197C8.27956 34.7583 2.38281 37.6172 2.38281 37.6172C2.38281 37.6172 5.24167 31.7204 6.08027 30.8811C6.9196 30.0418 8.27956 30.0418 9.11888 30.8811C9.9582 31.7204 9.9582 33.0804 9.11888 33.9197Z" stroke="white" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21.3721 18.6279C19.6963 16.9522 19.6963 14.2272 21.3721 12.5514C23.0479 10.8757 25.7728 10.8757 27.4486 12.5514C29.1244 14.2272 29.1244 16.9522 27.4486 18.6279C25.7728 20.3037 23.0479 20.3037 21.3721 18.6279Z" stroke="white" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M36.7631 9.44775H36.7624C35.1905 9.39189 33.6365 8.76376 32.4362 7.56422C31.2367 6.36396 30.6086 4.80992 30.5527 3.23805V3.23727" stroke="white" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17.9033 22.0962L13.3457 26.6538" stroke="white" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M23.4945 27.9998C24.9118 30.4626 24.5673 33.6631 22.4618 35.7686L17.9043 31.211" stroke="white" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.78802 22.0962L4.23047 17.5386C6.33594 15.4332 9.53568 15.0887 11.9992 16.5053" stroke="white" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M33.1197 17.2099C32.8403 16.9305 32.8403 16.4766 33.1197 16.1971C33.3991 15.9177 33.8531 15.9177 34.1325 16.1971C34.4118 16.4766 34.4118 16.9305 34.1325 17.2099C33.8531 17.4893 33.3991 17.4893 33.1197 17.2099Z" fill="white" />
                        <path d="M36.7623 9.44748C36.3637 11.0125 35.8394 12.497 35.2188 13.8999" stroke="white" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M32.0012 19.4878C29.3782 23.1357 26.2324 25.972 23.4729 27.9709C21.1719 29.6388 19.1394 30.7238 17.9041 31.2114L8.78906 22.0963C9.27812 20.8582 10.3632 18.8257 12.0296 16.5262C15.5939 11.6069 21.8171 5.4624 30.5527 3.23812" stroke="white" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                </svg>
            )
        },
        {
            bgcolor: "#f700907c",
            title: "Marketing Automation",
            desc: "Automate email campaigns, lead nurturing, onboarding, and customer journeys.",
            image: "img-s-1.jpg",
            icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.1659 25.2949C22.1659 26.6188 21.1569 27.6919 19.9124 27.6919H14.9512" stroke="white" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M31.426 28.1045L33.9418 26.3729C35.1353 25.6399 35.5442 24.0166 34.8551 22.747C34.1661 21.4775 32.64 21.0425 31.4464 21.7755L24.8808 25.8076C24.2426 26.1996 23.5185 26.4059 22.7815 26.4059H21.9099C22.0736 26.0737 22.1668 25.696 22.1668 25.2949C22.1668 23.971 21.1578 22.8978 19.9133 22.8978H12.0913C10.3674 22.8978 8.9069 24.0944 8.40175 25.749L3.84559 31.8169C3.03922 32.8908 3.20396 34.4568 4.21358 35.3145L7.12661 37.7894C8.13623 38.6472 9.60835 38.4719 10.4148 37.398L13.2396 33.636C13.9635 32.6719 15.0605 32.7609 16.2204 32.7609L23.9412 32.7608C24.3725 32.7608 24.7962 32.64 25.1696 32.4106L29.2866 29.577" stroke="white" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22.1484 25.5974L22.1492 25.5967L25.9509 20.7081C26.7634 19.6628 28.2691 19.4745 29.3144 20.287C29.9223 20.7592 30.2404 21.4665 30.2404 22.1804C30.2404 22.2976 30.2315 22.4155 30.2137 22.5318" stroke="white" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.101 4.15918C13.1913 5.29274 12.6445 6.7282 12.6445 8.28346C12.6445 10.3529 13.5948 12.201 15.0836 13.4138C15.8951 14.0756 16.3658 15.0664 16.3658 16.1133V16.7603" stroke="white" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22.1568 16.7604V16.1134C22.1568 15.0621 22.6356 14.072 23.4493 13.4059C24.9322 12.1922 25.878 10.3486 25.878 8.28287C25.878 4.64499 22.9417 1.69248 19.309 1.66666C18.14 1.65862 17.0364 1.95985 16.0762 2.49302" stroke="white" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.7849 20.3893H16.7366C16.0051 20.3893 15.4121 19.7963 15.4121 19.0648V18.0315C15.4121 17.3 16.0051 16.707 16.7366 16.707H21.7849C22.5164 16.707 23.1094 17.3 23.1094 18.0315V19.0648C23.1094 19.7963 22.5164 20.3893 21.7849 20.3893Z" stroke="white" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            bgcolor: "#7bff00",
            title: "Sales Automation",
            desc: "Automate proposals, invoices, reminders, and CRM data management. Boost sales efficiency.",
            image: "img-s-3.jpg",
            icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.504 20.8641L31.9195 22.3563C31.8423 22.4008 31.7435 22.3744 31.6989 22.2971L27.0451 14.2366C27.0005 14.1593 27.027 14.0606 27.1042 14.016L29.6887 12.5238" stroke="white" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22.5197 17.1508L20.8432 16.1828C20.6334 16.0616 20.3748 16.0616 20.1649 16.1828L16.8175 18.1149C15.9908 18.5921 14.9337 18.3089 14.4565 17.4822C13.9793 16.6555 14.2624 15.5984 15.0891 15.1212L18.6185 13.0836C19.523 12.5613 20.6374 12.5613 21.542 13.0836L23.9111 14.4513C24.8019 14.9657 25.8996 14.9657 26.7906 14.4515L27.0758 14.2873L31.6713 22.2471" stroke="white" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M31.1161 22.1133L24.7578 18.4423" stroke="white" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.8156 24.9898L12.3523 24.1026C13.1789 23.6253 13.4622 22.5683 12.9849 21.7415C12.5076 20.9149 11.4506 20.6316 10.6239 21.1089L9.08717 21.9961C8.26045 22.4734 7.97721 23.5305 8.45453 24.3572C8.93184 25.1838 9.98894 25.4671 10.8156 24.9898Z" stroke="white" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18.8879 32.109L19.3552 31.8391C20.1819 31.3618 20.4651 30.3048 19.9879 29.4781C19.5105 28.6514 18.4535 28.3682 17.6268 28.8454L17.1594 29.1153C16.3327 29.5926 16.0495 30.6497 16.5268 31.4763C17.0041 32.303 18.0612 32.5863 18.8879 32.109Z" stroke="white" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            bgcolor: "#ffc58f",
            title: "Operations Automation",
            desc: "Automate standard workflows, reports, notifications, and data management.",
            image: "img-s-4.jpg",
            icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.3677 37.4541L10.3904 35.043C10.3943 34.5564 10.2167 34.0866 9.89494 33.7234L3.62982 26.6579C3.00605 25.9552 2.65664 25.0502 2.64483 24.1106L2.53332 14.7592C2.52244 13.8552 3.24782 13.115 4.15189 13.1081H4.1637C5.01849 13.1081 5.73106 13.7694 5.79121 14.625L6.28371 21.5968C6.32224 22.1377 6.54231 22.6489 6.9094 23.0486L11.0348 27.5373C11.4829 28.0238 12.2301 28.085 12.7502 27.6754" stroke="white" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M34.8372 28.5497L36.5144 26.6583C37.1381 25.9557 37.4875 25.0507 37.4983 24.1111L37.6098 14.7597C37.6207 13.8557 36.8953 13.1154 35.9912 13.1086H35.9794C35.1247 13.1086 34.4131 13.7699 34.352 14.6255L33.8604 21.5973C33.8219 22.1382 33.6009 22.6494 33.2347 23.0491L29.1083 27.5378" stroke="white" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.8738 10.7766C10.9812 9.90656 11.4737 8.39069 12.7072 8.21144L16.0583 7.72454C16.5481 7.65335 16.9716 7.34569 17.1906 6.90183L18.6892 3.8653C19.2408 2.74754 20.8348 2.74754 21.3863 3.8653L22.885 6.90183C23.104 7.34569 23.5275 7.65335 24.0173 7.72454L27.3683 8.21144C28.6019 8.39069 29.0944 9.90656 28.2018 10.7766L25.777 13.1402" stroke="white" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            bgcolor: "#ffabff",
            title: "AI Automation",
            desc: "Integrate AI agents, chatbots, voice agents, and content generation into workflows.",
            image: "img-s-5.jpg",
            icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="14" r="6" stroke="white" strokeWidth="1.4" />
                    <path d="M10 34c0-6 4.5-10 10-10s10 4 10 10" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
                    <circle cx="14" cy="14" r="1.4" fill="white" />
                    <circle cx="26" cy="14" r="1.4" fill="white" />
                </svg>
            )
        },
        {
            bgcolor: "#65a06ac2",
            title: "Reporting Automation",
            desc: "Automate dashboards, reports, and data sync across platforms.",
            image: "img-s-6.jpg",
            icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="22" width="6" height="12" stroke="white" strokeWidth="1.4" />
                    <rect x="17" y="14" width="6" height="20" stroke="white" strokeWidth="1.4" />
                    <rect x="28" y="8" width="6" height="26" stroke="white" strokeWidth="1.4" />
                </svg>
            )
        },
    ]

    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.2; // drag speed multiplier
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    // Touch support (mobile)
    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    return (
        <div className="section-features flat-spacing pt-5 pb-0" id='section_platform'>
            <div className="container">
                <div className="heading-section center mb-64">
                    <h2 className=" effectFade fadeRotateX">Automations We Build</h2>
                    <p>Powerful solutions to automate and grow your business</p>
                </div>

                <div
                    ref={scrollRef}
                    className="automation-scroll-wrap"
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        overflowX: 'hidden',
                        gap: '24px',
                        paddingBottom: '16px',
                        scrollSnapType: isDragging ? 'none' : 'x mandatory',
                        cursor: isDragging ? 'grabbing' : 'grab',
                        userSelect: 'none',
                    }}
                >
                    {automations.map((item, index) => (
                        <div
                            key={index}
                            className="automation-card-outer"
                            style={{
                                flex: '0 0 auto',
                                width: 'calc((100% - 4 * 24px) / 4.5)',
                                scrollSnapAlign: 'start',
                            }}
                        >
                            <div className="features-item style-2 h-100 text-center effectFade fadeRotateX">
                                <div
                                    className="icon "
                                    style={{ background: item.bgcolor, display: 'flex', justifyContent: 'center', alignItems: 'center', margin: "0px" }}
                                >
                                    {item.icon}
                                </div>
                                <h4 className="title fw-semibold">{item.title}</h4>
                                {/* <p className="text-secondary">{item.desc}</p> */}
                                <ul>
                                    <li><i className='fas'></i>Mobile responsive</li>
                                    <li>Mobile responsive</li>
                                    <li>Mobile responsive</li>
                                    <li>Mobile responsive</li>

                                </ul>
                                <div className="automation-img-wrap">
                                    <img src={`/assets/images/restaurant/${item.image}`} alt={item.title} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OnePlatform