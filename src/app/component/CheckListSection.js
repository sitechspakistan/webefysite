
import React from 'react'
import { CircleCheck } from 'lucide-react'

const buildColumns = [
    {
        items: [
            "Restaurant Website",
            "QR Digital Menu",
            "Online Ordering System",
            "Table Reservation System",
            "Kitchen Display System",
            "Delivery Management",
        ],
    },
    {
        items: [
            "POS Integration",
            "Loyalty Program",
            "Gift Cards",
            "Coupons & Discounts",
            "Table Management",
            "Inventory Management",
        ],
    },
    {
        items: [
            "AI Voice Assistant",
            "WhatsApp Ordering",
            "Customer Reviews",
            "Staff Management",
            "Reports & Analytics",
            "And Much More...",
        ],
    },
]

const whyChooseItems = [
    "Custom Solutions for Your Restaurant",
    "No Monthly Lock-in Contracts",
    "Modern, Fast & Secure Technology",
    "Mobile Friendly for You & Your Customers",
    "SEO Optimized Websites",
    "Scalable As Your Business Grows",
    "Dedicated Support & Training",
    "Automation That Saves You Time",
]

const CheckListSection = () => {
    return (
        <div className='comparison-section bg-white'>
            <div className='container'>
                <div className='row'>
                    {/* LEFT SIDE - What We Can Build */}
                    <div className='col-lg-6 col-md-12'>
                        <div className='build-box'>
                            <h4>What We Can Build For Your Restaurant</h4>
                            <div className='row'>
                                {buildColumns.map((col, colIndex) => (
                                    <div className='col-lg-4 col-12' key={colIndex}>
                                        <ul className='build-list'>
                                            {col.items.map((item, itemIndex) => (
                                                <li key={itemIndex}>
                                                    <CircleCheck size={18} color="#E91E8C" strokeWidth={2} />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE - Why Choose Webefy */}
                    <div className='col-lg-6 col-md-12 p-relative'>
                        <div className='choose-box'>
                            <h4>Why Choose Webefy Today?</h4>
                            <ul className='build-list'>
                                {whyChooseItems.map((item, index) => (
                                    <li key={index}>
                                        <CircleCheck size={18} color="#0EA5E9" strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <img src='/assets/images/restaurant/img1.png' alt='Restaurant-Management'></img>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export default CheckListSection