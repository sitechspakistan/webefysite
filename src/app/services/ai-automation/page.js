import AiCta from '@/app/component/AiCta'
import AiProcess from '@/app/component/AiProcess'
import AiSolutions from '@/app/component/AiSolutions'
import AutomateSolution from '@/app/component/AutomateSolution'
import CalendarTools from '@/app/component/CalendarTools'
import Faqs from '@/app/component/Faqs'
import FeaturedAutomationCase from '@/app/component/FeaturedAutomationCase'
import HeroFormTwo from '@/app/component/HeroFormTwo'
import PricingTiers from '@/app/component/PricingTiers'
import SavingsCalculator from '@/app/component/SavingCalculator'
import SeeItInAction from '@/app/component/SeeItInAction'
import TrustBar from '@/app/component/TrustBar'
import aiautomation from '@/data/faqs/aiautomationFaqs.json'

export const metadata = {
    title: "AI Automation Services for Business Growth",
    description: "Automate repetitive tasks, reduce errors, and scale faster with Webefy Today's custom AI solutions — chatbots, workflow automation, API integrations, and more.",
    alternates: {
        canonical: "https://www.webefytoday.com/services/ai-automation",
    },
    icons: {
        icon: "/assets/images/webefy-lgo/about-shape1_2.png",
    }
};

export default function Automation() {
    return (
        <>
            <>
                <HeroFormTwo />
                <TrustBar />
                <CalendarTools />
                <AutomateSolution />
                <AiSolutions />
                <SeeItInAction />
                <FeaturedAutomationCase />
                <AiProcess />
                <SavingsCalculator />
                <PricingTiers />
                <Faqs faqs={aiautomation} classbg={"bg-white"} />
                <AiCta />
            </>

        </>
    );
}
