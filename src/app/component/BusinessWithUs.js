import React from 'react'
import { Workflow, UserRound, Clock, Boxes } from 'lucide-react'

const businesswithus = [
    {
        title: "80%",
        desc: "Less Manual Work: Save hours every week by automating repetitive tasks.",
        Icon: Workflow,
        color: "#4A90D9",
        txtcolor: "#4A90D9",
        bg: "#EAF3FC",
    },
    {
        title: "60%",
        desc: "Faster Response Time: Respond instantly and never miss an opportunity.",
        Icon: UserRound,
        color: "#7B5BD9",
        bg: "#F1EAFC",
        txtcolor: "#7B5BD9",
    },
    {
        title: "24/7",
        desc: "Automated Operations: Automations work while you and your team rest.",
        Icon: Clock,
        color: "#D94FA0",
        bg: "#FCEAF5",
    },
    {
        title: "100+",
        desc: "Apps & Integrations: We connect your favorite apps and tools seamlessly.",
        Icon: Boxes,
        color: "#D94FA0",
        bg: "#FCEAF5",
    },
]

const BusinessWithUs = ({ heading, description, className, classtwo, stats = businesswithus }) => {
    return (

        <section className={`bg-white pt-5 pb-2 ${classtwo}`}>
            <div className='container'>
                <h2 className='text-center pb-3'>{heading}</h2>
                <p className={`${className}`}>{description}</p>
                <div className='row g-4'>
                    {stats.map((item, index) => (
                        <div className='col-lg-3 col-md-6' key={index}>
                            <div className='stat-card'>
                                <div className='stat-icon' style={{ background: item.bg }}>
                                    <item.Icon size={28} color={item.color} strokeWidth={2} />
                                </div>
                                <div className='stat-content'>
                                    <h3 className='stat-title' style={{ color: item.txtcolor }}>{item.title}</h3>
                                    <p className='stat-desc'>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BusinessWithUs