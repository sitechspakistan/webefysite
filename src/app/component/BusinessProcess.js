import React from 'react'
import { ClipboardEdit, FileText, Boxes, Wrench, Rocket, Headphones, ArrowRight } from 'lucide-react'

// ✅ Default array (icons) — agar koi steps prop na diya to yehi use hoga
const defaultSteps = [
    { number: 1, title: "Discover", desc: "We understand your business and goals", color: "#4A90D9", bg: "#EAF3FC", Icon: ClipboardEdit },
    { number: 2, title: "Plan", desc: "We design the right automation workflow", color: "#D94FA0", bg: "#FCEAF5", Icon: FileText },
    { number: 3, title: "Build", desc: "We build and integrate your automation", color: "#7B5BD9", bg: "#F1EAFC", Icon: Boxes },
    { number: 4, title: "Test", desc: "We test thoroughly to ensure it works perfectly", color: "#E85D3D", bg: "#FDEDE8", Icon: Wrench },
    { number: 5, title: "Launch", desc: "We launch and monitor the automation", color: "#2ECC71", bg: "#E9FBF1", Icon: Rocket },
    { number: 6, title: "Support", desc: "We provide ongoing support & optimization", color: "#4A90D9", bg: "#EAF3FC", Icon: Headphones },
]

const BusinessProcess = ({ heading, Paragraph, steps = defaultSteps }) => {
    return (
        <section className='bg-white'>
            <div className="container pt-5 pb-3">
                <div className="text-center mb-lg-5 mb-0">
                    <h2 className="process-heading">{heading}</h2>
                    <p className="process-subheading">{Paragraph}</p>
                </div>

                <div className="process-wrap">
                    {steps.map((step, index) => (
                        <React.Fragment key={step.number}>
                            <div className="process-card">
                                <div className="step-icon-wrap">
                                    <div className="step-icon" style={{ background: step.bg }}>
                                        {step.image ? (
                                            <img
                                                src={step.image}
                                                alt={step.title}
                                                width={22}
                                                height={22}
                                                style={{ objectFit: 'contain' }}
                                            />
                                        ) : (
                                            <step.Icon size={22} color={step.color} strokeWidth={2} />
                                        )}
                                    </div>
                                    <div className="step-number" style={{ background: step.color }}>
                                        {step.number}
                                    </div>
                                </div>
                                <h5>{step.title}</h5>
                                <p>{step.desc}</p>
                            </div>

                            {index < steps.length - 1 && (
                                <div className="process-connector">
                                    <span className="dash-line"></span>
                                    <ArrowRight size={16} color="#707070" />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BusinessProcess