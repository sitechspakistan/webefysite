import AiAgent from '@/app/component/AiAgent'
import ContactForm from '@/app/component/ContactForm'
import PerfectIndustry from '@/app/component/PerfectIndustry'
import ThirdHero from '@/app/component/ThirdHero'
import React from 'react'

export const metadata = {
    title: "AI Booking Agent | Webefy Today",
    description: "Webefy Today helps businesses scale with next-gen web development, seamless AI automation, and iconic branding. Let's build intelligent things together.",
};

function AiBookingAgent() {
    return (
        <>
            <ThirdHero />
            <PerfectIndustry />
            <AiAgent />
        </>
    )
}

export default AiBookingAgent
