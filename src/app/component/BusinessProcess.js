import React from 'react'
const steps = [
    { number: 1, title: "Discover", desc: "We understand your business and goals", color: "#4A90D9" },
    { number: 2, title: "Plan", desc: "We design the right automation workflow", color: "#B060D9" },
    { number: 3, title: "Build", desc: "We build and integrate your automation", color: "#7B5BD9" },
    { number: 4, title: "Test", desc: "We test thoroughly to ensure it works perfectly", color: "#E85D75" },
    { number: 5, title: "Launch", desc: "We launch and monitor the automation", color: "#2ECC71" },
    { number: 6, title: "Support", desc: "We provide ongoing support & optimization", color: "#4A90D9" },
]

const BusinessProcess = () => {
    return (
        <div className='container pt-5 pb-5'>
            <div className="process-wrap">
                {steps.map((step, index) => (
                    <div className="process-step" key={index}>
                        <div className="step-number" style={{ background: step.color }}>{step.number}</div>
                        <div className="step-icon"><i className="fa-solid fa-envelope"></i></div>
                        <h5>{step.title}</h5>
                        <p>{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BusinessProcess