import AiCta from '@/app/component/AiCta'
import AiProcess from '@/app/component/AiProcess'
import AiSolutions from '@/app/component/AiSolutions'
import AutomateSolution from '@/app/component/AutomateSolution'
import CalendarTools from '@/app/component/CalendarTools'
import Faqs from '@/app/component/Faqs'
import HeroFormTwo from '@/app/component/HeroFormTwo'
import SavingsCalculator from '@/app/component/SavingCalculator'
import aiautomation from '@/data/faqs/aiautomationFaqs.json'


export const metadata = {
    title: "AI Booking Agent",
    description: "Webefy Today helps businesses scale with next-gen web development, seamless AI automation, and iconic branding. Let's build intelligent things together.",
    alternates: {
        canonical: "https://www.webefytoday.com/solutions/ai-booking-agent",
    },
    icons: {
        icon: "/assets/images/webefy-lgo/about-shape1_2.png",
    }

};

function AiBookingAgent() {
    return (
        <>
            <HeroFormTwo />
            <CalendarTools />
            <AutomateSolution />
            <AiSolutions />
            <AiProcess />
            <SavingsCalculator />
            <Faqs faqs={aiautomation} classbg={"bg-white"} />
            <AiCta />
        </>
    )
}

export default AiBookingAgent
{/* <PerfectIndustry heading={"Perfect for Industries That Run on Appointments"} gridclass={"food-container"} />
            <AiAgent />
            <BookingAgent />

            <ProductFrom /> */}