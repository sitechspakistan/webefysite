import React from 'react'
import SecondHero from '../component/SecondHero'
import ServiceDetail from '../component/ServiceDetail'
import HomeProcess from '../component/HomeProcess'
import Faqs from '../component/Faqs'
import solutionsFaqs from "@/data/faqs/solutionsFaqs.json"
const solutionsData = [
    {
        id: "01",
        title: "AI Booking Agent",
        image: "/assets/images/ai-hero-right.png",
        description:
            "A smart booking agent that never sleeps. It handles reservations, appointments, and customer queries instantly replying, confirming, and scheduling in real time so you never lose a lead to a missed call or a slow reply.",
        tags: ["24/7 Availability", "Instant Booking", "Smart Scheduling", "Multi-Channel Support", "Automated Reminders"],
        link: "/solutions/ai-booking-agent",
    },
    {
        id: "02",
        title: "Business Automation",
        image: "/assets/images/business-hero.png",
        description:
            "We take the repetitive, manual work off your plate. From lead follow-ups to internal approvals, our automation systems connect your tools and let your business run itself accurately, and around the clock.",
        tags: ["Workflow Automation", "Task Management", "Data Sync", "Email & SMS Triggers", "Reporting Automation"],
        link: "/solutions/business-automation",
    },
    {
        id: "03",
        title: "Restaurant Management",
        image: "/assets/images/restaurant/hero-img.png",
        description:
            "A complete system built for restaurants from orders and reservations to inventory and staff scheduling. We give you one dashboard to run front-of-house and back-of-house operations without the daily chaos.",
        tags: ["Order Management", "Table Reservations", "Inventory Tracking", "Staff Scheduling", "Sales Insights"],
        link: "/solutions/restaurant-management",
    },
]
const Solutions = () => {
    return (
        <>
            <SecondHero Subheading={"What We Solve"} Heading1={"Powerful Solutions for"} Heading2={"Everyday Business Problems."}
                Description={<>From booking to billing, we build intelligent systems that run your business for you. AI-powered agents, seamless automation,<br /> and complete restaurant management all in one place.</>} />
            <ServiceDetail heading={"Three Solutions, One Powerful System."} para={<>We combine intelligent AI agents, seamless automation, and hands-on restaurant management <br /> to run your business smarter, faster, and around the clock.</>}
                services={solutionsData} useImageBg={true}
            />
            <HomeProcess />
            <Faqs faqs={solutionsFaqs} />

        </>
    )
}

export default Solutions
