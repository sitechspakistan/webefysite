
import React from 'react'
import { ClipboardEdit, FileText, Boxes, Wrench, Rocket, Headphones, MapPin, TrendingUp, Users, Star } from 'lucide-react'
import HeroForm from '../component/HeroForm'
import WebDevSlider from '../component/WebdevSlider'
import PerfectIndustry from '../component/PerfectIndustry'
import BusinessProcess from '../component/BusinessProcess'
import WebTool from '../component/WebTool'
import BusinessWithUs from '../component/BusinessWithUs'
import ClutchWidget from '../component/ClutchWidget'
import HomePortfolio from '../component/HomePortfolio'

export const metadata = {
    title: "Website Development Company in San Diego, CA | YourCompany",
    description: "We build high-performance websites that help San Diego businesses attract more customers, rank higher on Google, and grow faster online.",
}

const industries = [
    { id: 1, iconClass: "fa-solid fa-utensils", colorId: "colr-1", text: "Restaurants" },
    { id: 2, iconClass: "fa-solid fa-heart-pulse", colorId: "pur-col", text: "Healthcare" },
    { id: 3, iconClass: "fa-solid fa-house", colorId: "org-col", text: "Real Estate" },
    { id: 4, iconClass: "fa-solid fa-scale-balanced", colorId: "colr-2", text: "Law Firms" },
    { id: 5, iconClass: "fa-solid fa-cart-shopping", colorId: "colr-3", text: "E-Commerce" },
    { id: 6, iconClass: "fa-solid fa-graduation-cap", colorId: "colr-4", text: "Education" },
    { id: 7, iconClass: "fa-solid fa-helmet-safety", colorId: "colr-5", text: "Construction" },
    { id: 8, iconClass: "fa-solid fa-laptop-code", colorId: "pur-col", text: "SaaS & Tech" },
    { id: 9, iconClass: "fa-solid fa-hand-holding-heart", colorId: "pur-col", text: "Nonprofits" },
]

const imageSteps = [
    { number: 1, title: "Discover", desc: "We understand your business and goals", color: "#4A90D9", bg: "#EAF3FC", Icon: ClipboardEdit },
    { number: 2, title: "Plan", desc: "We design the right automation workflow", color: "#D94FA0", bg: "#FCEAF5", Icon: FileText },
    { number: 3, title: "Build", desc: "We build and integrate your automation", color: "#7B5BD9", bg: "#F1EAFC", Icon: Boxes },
    { number: 4, title: "Test", desc: "We test thoroughly to ensure it works perfectly", color: "#E85D3D", bg: "#FDEDE8", Icon: Wrench },
    { number: 5, title: "Launch", desc: "We launch and monitor the automation", color: "#2ECC71", bg: "#E9FBF1", Icon: Rocket },
    { number: 6, title: "Support", desc: "We provide ongoing support & optimization", color: "#4A90D9", bg: "#EAF3FC", Icon: Headphones },
]

const businessStats = [
    {
        title: "150+",
        desc: "San Diego Businesses Served: Trusted by local companies across the DFW area.",
        Icon: MapPin,
        color: "#4A90D9",
        txtcolor: "#4A90D9",
        bg: "#EAF3FC",
    },
    {
        title: "45%",
        desc: "Average Growth: San Diego clients see measurable growth after automating operations.",
        Icon: TrendingUp,
        color: "#7B5BD9",
        bg: "#F1EAFC",
        txtcolor: "#7B5BD9",
    },
    {
        title: "500+",
        desc: "Local Team Members Supported: Helping San Diego teams work smarter, not harder.",
        Icon: Users,
        color: "#D94FA0",
        bg: "#FCEAF5",
        txtcolor: "#D94FA0",
    },
    {
        title: "4.9/5",
        desc: "Client Satisfaction: Rated highly by San Diego business owners for reliability and support.",
        Icon: Star,
        color: "#2ECC71",
        bg: "#E9FBF1",
        txtcolor: "#2ECC71",
    },
]


const SanDiego = () => {
    return (
        <>
            <HeroForm
                subheading={"San Diego, CA"} heading={"San Diego, CA"} desccityname={"San Diego"}
            />
            <WebDevSlider />
            <PerfectIndustry
                industries={industries}
                heading="Website Development For Every Industry In San Diego"
                eyebrow='Industries We Serve'
            />
            <BusinessProcess
                heading="A Simple Process Powerful Results."
                Paragraph="We follow a proven process to deliver high-quality websites that drive measurable business growth"
                steps={imageSteps}
            />
            <WebTool />
            <HomePortfolio />
            <BusinessWithUs
                heading="Helping San Diego Businesses Succeed Online"
                description="We combine creativity, technology, and data-driven strategies to deliver websites that get real results."
                className="text-center pb-3"
                stats={businessStats}
                classtwo="bg-link"
            />
            <ClutchWidget classbg="bg-white" />
        </>
    )
}

export default SanDiego