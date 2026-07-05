import AiAgent from '@/app/component/AiAgent'
import BookingAgent from '@/app/component/BookingAgent'
import CalendarTools from '@/app/component/CalendarTools'
import PerfectIndustry from '@/app/component/PerfectIndustry'
import ProductFrom from '@/app/component/ProductFrom'
import ThirdHero from '@/app/component/ThirdHero'

export const metadata = {
    title: "AI Booking Agent | Webefy Today",
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
            <ThirdHero />
            <PerfectIndustry />
            <AiAgent />
            <BookingAgent />
            <CalendarTools />
            <ProductFrom />
        </>
    )
}

export default AiBookingAgent
