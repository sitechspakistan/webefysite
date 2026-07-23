"use client"
import { Share2, ShoppingCart, Building2, Code2, Wrench, Settings, ArrowRight } from 'lucide-react';
import React, { useRef, useState } from 'react'

const WebSolutionsComp = () => {
    const solutions = [
        {
            bgcolor: "#e9e4ff",
            iconColor: "#7c5cff",
            title: "Custom Website Development",
            desc: "Bespoke websites tailored to your brand and business goals.",
            icon: <Share2 size={28} color="#7c5cff" />
        },
        {
            bgcolor: "#dcecff",
            iconColor: "#2f8fff",
            title: "E-Commerce Development",
            desc: "High-converting online stores that drive sales.",
            icon: <ShoppingCart size={28} color="#2f8fff" />
        },
        {
            bgcolor: "#ffe6d6",
            iconColor: "#ff8a3d",
            title: "WordPress Development",
            desc: "Powerful, flexible websites using WordPress.",
            icon: <Building2 size={28} color="#ff8a3d" />
        },
        {
            bgcolor: "#dcf7e3",
            iconColor: "#2fbf6f",
            title: "Laravel & Next.js Development",
            desc: "Modern, scalable web applications built for performance.",
            icon: <Code2 size={28} color="#2fbf6f" />
        },
        {
            bgcolor: "#ffe1f2",
            iconColor: "#ff4fa3",
            title: "Website Redesign & Optimization",
            desc: "Improve performance, UX, and conversions.",
            icon: <Wrench size={28} color="#ff4fa3" />
        },
        {
            bgcolor: "#dbeaff",
            iconColor: "#2f8fff",
            title: "Maintenance & Support",
            desc: "Ongoing care to keep your website fast and secure.",
            icon: <Settings size={28} color="#2f8fff" />
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
        <div className="section-features flat-spacing pt-0 pb-0">
            <div className="container">
                <div className="heading-section center mb-30">
                    <span className="text-uppercase fw-semibold" style={{ color: "#a855f7", fontSize: "13px" }}>Our Services</span>
                    <h2 className="effectFade fadeRotateX">Complete Website Solutions for Every Business</h2>
                </div>

                <div style={{ position: 'relative' }}>
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
                            maskImage: 'linear-gradient(to right, #000 0%, #000 85%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to right, #000 0%, #000 85%, transparent 100%)',
                        }}
                    >
                        {solutions.map((item, index) => (
                            <div
                                key={index}
                                className="automation-card-outer"
                                style={{
                                    flex: '0 0 auto',
                                    scrollSnapAlign: 'start',
                                }}
                            >
                                <div className="features-item style-2 h-100 text-center effectFade fadeRotateX" id='cities_item'>
                                    <div
                                        className="icon"
                                        style={{
                                            background: item.bgcolor,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            margin: "0px auto",
                                            width: "64px",
                                            height: "64px",
                                            borderRadius: "16px"
                                        }}
                                    >
                                        {item.icon}
                                    </div>
                                    <h4 className="title fw-semibold mt-3" style={{ lineHeight: "24px" }}>{item.title}</h4>
                                    <p className="text-secondary">{item.desc}</p>
                                    <a href="#" className="d-inline-flex align-items-center gap-1" style={{ color: "#7c5cff", fontWeight: 600, fontSize: "14px" }}>
                                        Learn More <ArrowRight size={14} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebSolutionsComp