import CityComp from '@/app/component/CityComp'
import HeroForm from '@/app/component/HeroForm'
import PerfectIndustry from '@/app/component/PerfectIndustry'
import WebDevSlider from '@/app/component/WebdevSlider'
import React from 'react'

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

];

const City = () => {
    return (
        <>
            <HeroForm />
            <WebDevSlider />
            <CityComp />
            <PerfectIndustry industries={industries} heading={"Website Development For Every Industry In Dallas"} eyebrow='Industries We Serve' />
        </>
    )
}

export default City