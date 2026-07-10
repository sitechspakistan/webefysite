import BusinessAutomation from '@/app/component/BusinessAutomation';
import BusinessProcess from '@/app/component/BusinessProcess';
import BusinessTools from '@/app/component/BusinessTools';
import PerfectIndustry from '@/app/component/PerfectIndustry';
import ThirdHero from '@/app/component/ThirdHero';
import React from 'react'
export const metadata = {
    title: "Business-Automation | Webefy Today",
    description: "Webefy Today helps businesses scale with next-gen web development, seamless AI automation, and iconic branding. Let's build intelligent things together.",
    alternates: {
        canonical: "https://www.webefytoday.com/solutions/ai-booking-agent",
    },
    icons: {
        icon: "/assets/images/webefy-lgo/about-shape1_2.png",
    }

};
const page = () => {


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
                image={"business-hero.png"} />
            <BusinessAutomation />
            <BusinessTools />
            <PerfectIndustry heading={"Industries We Serve"} classIn={"d-none"} />
            <BusinessProcess />
        </>
    )
}

export default page
