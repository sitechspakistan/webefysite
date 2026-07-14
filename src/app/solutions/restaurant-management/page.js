import Benefit from '@/app/component/Benefit';
import BusinessCta from '@/app/component/BusinessCta';
import CheckListSection from '@/app/component/CheckListSection';
import FourthHero from '@/app/component/FourthHero'
import OnePlatform from '@/app/component/OnePlatform';
import PerfectIndustry from '@/app/component/PerfectIndustry'
import PowerfulIntegration from '@/app/component/PowerfulIntegration';
import RestaurantCta from '@/app/component/RestaurantCta';
import RestaurantWorkflow from '@/app/component/RestaurantWorkflow';
import React from 'react'
const foodIndustries = [
    { id: 1, iconClass: "fa-solid fa-bell-concierge", colorId: "pur-col", text: "Restaurants" },
    { id: 2, iconClass: "fa-solid fa-mug-saucer", colorId: "org-col", text: "Cafés" },
    { id: 3, iconClass: "fa-solid fa-pizza-slice", colorId: "org-col", text: "Pizzerias" },
    { id: 4, iconClass: "fa-solid fa-burger", colorId: "colr-1", text: "Fast Food" },
    { id: 5, iconClass: "fa-solid fa-drumstick-bite", colorId: "colr-2", text: "Steakhouses" },
    { id: 6, iconClass: "fa-solid fa-bowl-food", colorId: "colr-3", text: "Asian Restaurants" },
    { id: 7, iconClass: "fa-solid fa-martini-glass-citrus", colorId: "colr-4", text: "Bars & Lounges" },
    { id: 8, iconClass: "fa-solid fa-cake-candles", colorId: "colr-5", text: "Bakeries" },
];
const RestaurantManagement = () => {
    return (
        <>
            <FourthHero />
            <PerfectIndustry heading={"Build For every Food Business"} eyebrow='' industries={foodIndustries} gridclass={"food-container"} />
            <OnePlatform />
            <RestaurantWorkflow />
            <PowerfulIntegration />
            <Benefit />
            <CheckListSection />
            <RestaurantCta />
        </>
    )
}

export default RestaurantManagement