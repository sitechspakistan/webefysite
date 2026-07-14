"use client"
import { Globe, Calendar, QrCode, ShoppingBag, Tv, Bot } from 'lucide-react';
import React, { useRef, useState } from 'react'

const OnePlatform = () => {
    const automations = [
        {
            title: "Professional Webstie",
            desc: [
                "Mobile Responsive",
                "Beautiful Design",
                "Menu & Gallery",
                "Contact & Location",
                "SEO Optimize",
            ],
            image: "img-s-1.jpg",
            icon: <Globe size={40} color="#003afa" strokeWidth={1.5} />
        },
        {
            title: "Table Reservations",
            desc: [
                "Online Booking",
                "Real-time Availability",
                "Email Confirmations",
                "Calendar Sync",
                "Manage Bookings",
            ],
            image: "img-s-2.jpg",
            icon: <Calendar size={40} color="#f200fa" strokeWidth={1.5} />
        },
        {
            title: "QR Code Digital Menu",
            desc: [
                "No Printing Cost",
                "Instant Updates",
                "Unlimited Items",
                "Categories & Add-ons",
                "Multiple Languages",
            ],
            image: "img-s-3.jpg",
            icon: <QrCode size={40} color="#443da5" strokeWidth={1.5} />
        },
        {
            title: "Online Ordering",
            desc: [
                "Pickup or Delivery",
                "Secure Payments",
                "Discount Coupons",
                "Order Tracking",
                "Customer Notifications",
            ],
            image: "img-s-4.jpg",
            icon: <ShoppingBag size={40} color="#fa7000" strokeWidth={1.5} />
        },
        {
            title: "Kitchen Display System",
            desc: [
                "Live Order Display",
                "Kitchen Queue",
                "Prep Time Management",
                "Order Status Updates",
                "Multiple Screens",
            ],
            image: "img-s-5.jpg",
            icon: <Tv size={40} color="#0081fa" strokeWidth={1.5} />
        },
        {
            title: "AI Restaurant Assistant",
            desc: [
                "Answer Calls & Chats",
                "WhatsApp Ordering",
                "Reservation Booking",
                "FAQs & Support",
                "Works 24/7",
            ],
            image: "img-s-6.jpg",
            icon: <Bot size={40} color="#47219e" strokeWidth={1.5} />
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
        const walk = (x - startX) * 1.2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

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
        <div className="section-features flat-spacing pt-5 pb-0 bg-white" id='section_platform'>
            <div className="container">
                <div className="heading-section center mb-20">
                    <h2 className=" effectFade fadeRotateX">Everything In One Platform</h2>
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
                                    style={{ background: "transparent", display: 'flex', justifyContent: 'start', alignItems: 'center', margin: "0px" }}
                                >
                                    {item.icon}
                                </div>
                                <h4 className="title fw-semibold text-start">{item.title}</h4>
                                <ul className="text-secondary text-start">
                                    {item.desc.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
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