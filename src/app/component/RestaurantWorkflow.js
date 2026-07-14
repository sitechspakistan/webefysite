import React from 'react'
import { Users, Globe, Calendar, Tv, ChefHat, CheckCircle, Bell, Star, Heart, ArrowRight } from 'lucide-react'

const steps = [
    { title: "Customer", color: "#7B5BD9", Icon: Users },
    { title: "Website", color: "#7B5BD9", Icon: Globe },
    { title: "Reservation/ Order", color: "#7B5BD9", Icon: Calendar },
    { title: "Kitchen Display", color: "#7B5BD9", Icon: Tv },
    { title: "Chef Prepares", color: "#7B5BD9", Icon: ChefHat },
    { title: "Ready", color: "#ff9100", Icon: CheckCircle },
    { title: "Customer Notification", color: "#45bb55", Icon: Bell },
    { title: "Review Request", color: "#d95bb3", Icon: Star },
    { title: "Repeat Customer", color: "#d95bb3", Icon: Heart },
]

const RestaurantWorkflow = () => {
    return (
        <section className='bg-white' id='rest_workflow'>
            <div className="container pt-5">
                <div className="text-center mb-20">
                    <h2 className="process-heading">Complete Restaurant Workflow</h2>
                </div>

                <div className="process-wrap">
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <div className="process-card">
                                <div className="step-icon-wrap">
                                    <div className="step-icon">
                                        <step.Icon size={32} color={step.color} strokeWidth={2} />
                                    </div>
                                </div>

                                <h5>{step.title}</h5>
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

export default RestaurantWorkflow