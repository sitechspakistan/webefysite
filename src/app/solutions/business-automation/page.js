import AutomationSolutions from '@/app/component/AutomationSolutions';
import BusinessAutomation from '@/app/component/BusinessAutomation';
import BusinessCta from '@/app/component/BusinessCta';
import BusinessProcess from '@/app/component/BusinessProcess';
import BusinessTools from '@/app/component/BusinessTools';
import BusinessWithUs from '@/app/component/BusinessWithUs';
import PerfectIndustry from '@/app/component/PerfectIndustry';
import ProductFrom from '@/app/component/ProductFrom';
import ThirdHero from '@/app/component/ThirdHero';
import React from 'react'
export const metadata = {
    title: "Business-Automation",
    description: "Webefy Today helps businesses scale with next-gen web development, seamless AI automation, and iconic branding. Let's build intelligent things together.",
    alternates: {
        canonical: "https://www.webefytoday.com/solutions/business-automation",
    },
    icons: {
        icon: "/assets/images/webefy-lgo/about-shape1_2.png",
    }

};
const page = () => {
    const businessAutomationIndustries = [
        { id: 1, iconClass: "fa-solid fa-heart-pulse", colorId: "colr-1", text: "Healthcare" },
        { id: 2, iconClass: "fa-solid fa-scale-balanced", colorId: "pur-col", text: "Legal" },
        { id: 3, iconClass: "fa-solid fa-house", colorId: "colr-2", text: "Real Estate" },
        { id: 4, iconClass: "fa-solid fa-utensils", colorId: "org-col", text: "Restaurants" },
        { id: 5, iconClass: "fa-solid fa-cart-shopping", colorId: "colr-3", text: "Retail & E-commerce" },
        { id: 6, iconClass: "fa-solid fa-graduation-cap", colorId: "colr-4", text: "Education" },
        { id: 7, iconClass: "fa-solid fa-users", colorId: "colr-2", text: "Agencies" },
        { id: 8, iconClass: "fa-solid fa-file-invoice-dollar", colorId: "org-col", text: "Finance" },
        { id: 9, iconClass: "fa-solid fa-ellipsis", colorId: "colr-5", text: "And Many More" },
    ];

    return (

        <>
            <ThirdHero subheading={"AUTOMATE A GROW WITH WEBEFY TODAY"} headingone={"Automate Repetitive Work"} headingtwo={"Grow Your Business Faster"}
                para={"We build smart automations and integrations using Zapier, Make.com, n8n, Zoho and more to connect your apps, streamline workflows and save you hours every single day."}
                btntxtone={"Book Free Consultation"} btntxttwo={"Explore Solutions"}
                features={[
                    { icon: "/assets/images/products/clock.svg", text: "Approximately 40h+" },
                    { icon: "/assets/images/products/task.svg", text: "Eradicate human errors" },
                    { icon: "/assets/images/products/ai.svg", text: "Custom built for your business" },
                ]}
                image={"business-hero.png"} altname={"Business Automation"} />

            <BusinessAutomation />
            <BusinessTools />
            <AutomationSolutions />
            <PerfectIndustry heading={"Industries We Serve"} classIn={"d-none"} bgclass={"bg-white"} industries={businessAutomationIndustries} />
            <BusinessWithUs />
            <BusinessProcess />
            <BusinessCta />
        </>
    )
}

export default page
