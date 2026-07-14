import React from 'react'
import { File, UsersRound, ShoppingCart, ShoppingBag, ThumbsUp, Bot } from 'lucide-react'

const businesswithus = [
    {
        title: "Increase Reservations",
        desc: "Get more table bookings with an easy online reservation system.",
        Icon: UsersRound,
        color: "#4A90D9",
    },
    {
        title: "Reduce Printing Costs",
        desc: "Update your menu anytime without reprinting.",
        Icon: File,
        color: "#f7c029",
    },
    {
        title: "More Direct Orders",
        desc: "Avoid third-party fees and keep more profit in your pocket.",
        Icon: ShoppingCart,
        color: "#71f53d",
    },
    {
        title: "Faster Kitchen",
        desc: "Orders go directly to kitchen screens and reduce waiting time.",
        Icon: ShoppingBag,
        color: "#D94FA0",
    },
    {
        title: "Better Experience",
        desc: "Happy customers, better service and more 5-star reviews.",
        Icon: ThumbsUp,
        color: "#211870",
    },
    {
        title: "AI Works 24/7",
        desc: "Never miss a booking or order, even after your restaurant closes.",
        Icon: Bot,
        color: "#b00dfc",
    },
]

const benefits = [
    { percent: "+40%", title: "More Reservations", desc: "Increase in direct bookings", txtcol: "#000" },
    { percent: "+60%", title: "More Online Orders", desc: "Higher revenue & growth", txtcol: "#000" },
    { percent: "-30%", title: "Lower Operating Costs", desc: "Save time and money", txtcol: "#000" },
    { percent: "+25%", title: "Faster Service", desc: "Happy customers", txtcol: "#000" },
    { percent: "+90%", title: "Customer Satisfaction", desc: "Better reviews & loyalty", txtcol: "#000" },
    { percent: "24/7", title: "Always Open", desc: "Bookings & orders", txtcol: "#000" },
]
const Benefit = () => {
    return (
        <section className='bg-white pt-5 pb-2 ' id='benefit'>
            <div className='container'>
                <h2 className='text-center pb-3'>Why Restaurants Choose Webefy Today</h2>

                <div className='row g-4'>
                    {businesswithus.map((item, index) => (
                        <div className='col-lg-2 col-md-6' key={index}>
                            <div className='stat-card'>
                                <div className='stat-icon' style={{ background: "transparent" }}>
                                    <item.Icon size={38} color={item.color} strokeWidth={2} />
                                </div>
                                <div className='stat-content text-center'>
                                    <h3 className='stat-title'>{item.title}</h3>
                                    {/* <h6 className='stat-label'>{item.label}</h6> */}
                                    <p className='stat-desc'>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='benefit_pt'>
                    <div className='row g-0'>
                        {benefits.map((item, index) => (
                            <div
                                className={`col-lg-2 col-6 ${index === benefits.length - 1 ? "last-box" : ""}`}
                                key={index}
                            >
                                <div className='box'>
                                    <h5 style={{ color: item.txtcol }}>{item.percent}</h5>
                                    <h6>{item.title}</h6>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefit