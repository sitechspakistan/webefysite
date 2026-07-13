import React from 'react'

const defaultIndustries = [
    { id: 1, iconClass: "fa-solid fa-stethoscope", colorId: "colr-1", text: "Clinics & Healthcare" },
    { id: 2, iconClass: "fas fa-tooth", colorId: "pur-col", text: "Dental Clinics" },
    { id: 3, iconClass: "fa-solid fa-paw", colorId: "colr-2", text: "Veterinary Clinics" },
    { id: 4, iconClass: "fa-solid fa-utensils", colorId: "org-col", text: "Restaurants & Cafes" },
    { id: 5, iconClass: "fa-solid fa-scissors", colorId: "colr-3", text: "Salons & Spas" },
    { id: 6, iconClass: "fa-solid fa-dumbbell", colorId: "colr-4", text: "Gyms & Fitness" },
    { id: 7, iconClass: "fa-solid fa-user-tie", colorId: "org-col", text: "Consultants & Coaches" },
    { id: 8, iconClass: "fa-solid fa-ellipsis", colorId: "colr-5", text: "And Many More..." },
];

function PerfectIndustry({
    heading,
    classIn,
    bgclass,
    eyebrow = "BUILT FOR EVERY APPOINTMENT-BASED BUSINESS",
    industries = defaultIndustries,
    gridclass,
}) {
    return (
        <section className={`perfect-industry pt-4 pb-4 ${bgclass}`}>
            <div className='container-fluid text-center'>
                <span className={`${classIn}`}>{eyebrow}</span>
                <h2>{heading}</h2>
            </div>
            <div className={`container industries-container ${gridclass} `}>
                {industries.map((item) => (
                    <div className="industry-item" key={item.id}>
                        <div className="icon-box" id={item.colorId}>
                            <i className={item.iconClass}></i>
                        </div>
                        <p className="industry-text">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PerfectIndustry