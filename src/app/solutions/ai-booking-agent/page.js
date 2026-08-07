import AiAgent from '@/app/component/AiAgent'
import AiBookTool from '@/app/component/AiBookTool';
import BookingAgent from '@/app/component/BookingAgent'
import PerfectIndustry from '@/app/component/PerfectIndustry'
import ProductFrom from '@/app/component/ProductFrom';
import ThirdHero from '@/app/component/ThirdHero';



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
            <ThirdHero subheading={"AI AUTOMATION FOR BOOKINGS & APPOINTMENTS"} headingone={"AI Agents That Book Appointments for You"}
                headingtwo={"While You Focus on What Matters"} para={"Our AI agents handle calls, chats, and messages 24/7 to book, reschedule, and manage appointments automatically. Never miss a booking again."}
                btntxtone={"Book a Demo →"} btntxttwo={"See How It Works ▶"}
                features={[
                    { icon: "/assets/images/products/clock.svg", text: "24/7 Availability" },
                    { icon: "/assets/images/products/task.svg", text: "No Missed Bookings" },
                    { icon: "/assets/images/products/ai.svg", text: "Fully Automated" },
                ]}
                image={"/ai-hero-right.png"}
            />
            <PerfectIndustry heading={"Perfect for Industries That Run on Appointments"} gridclass={"food-container"} />
            <AiAgent />
            <BookingAgent />
            <AiBookTool />
            <ProductFrom />
        </>
    )
}

export default AiBookingAgent
