"use client";
import Link from "next/link";
import { useState } from "react";

export default function PortfolioWeb() {
    const [filter, setFilter] = useState("All");
    const categories = ["All", "Web", "Logo", "AI"];

    const items = [
        { id: 1, image: "/assets/images/portfolio/1.jpg", category: ["AI"], title: "AI Email Automation", deliverables: ["AI Integration"] },
        { id: 2, image: "/assets/images/portfolio/2.jpg", category: ["Web"], title: "WhatsApp CRM Bot", deliverables: ["CRM Integration"] },
        { id: 3, image: "/assets/images/portfolio/3.jpg", category: ["Web"], title: "Vezyon Dashboard", deliverables: ["Dashboard UI"] },
        { id: 4, image: "/assets/images/portfolio/4.jpg", category: ["AI"], title: "Upfeeds", deliverables: ["Upwork Alerts Portal"] },
        { id: 5, image: "/assets/images/portfolio/5.jpg", category: ["Web"], title: "HMG Media Website", deliverables: ["Next.js"] },
        { id: 6, image: "/assets/images/portfolio/csspatch.webp", category: ["Web"], title: "Custom Patch Hats Store", deliverables: ["UI Design"] },
        { id: 7, image: "/assets/images/portfolio/ct.webp", category: ["Web"], title: "Creative Triple Agency", deliverables: ["Next.js"] },
        { id: 8, image: "/assets/images/portfolio/eh.webp", category: ["Web"], title: "EventsHub Platform", deliverables: ["Event Management"] },
        { id: 9, image: "/assets/images/portfolio/inizio-website.webp", category: ["Web"], title: "Inizio Solutions", deliverables: ["Next.js", "SEO"] },
        { id: 10, image: "/assets/images/portfolio/yfi-logo.webp", category: ["Logo"], title: "Your Friend Infertility Brand Logo", deliverables: ["Logo Design", "Branding"] },
        { id: 11, image: "/assets/images/portfolio/yfi-website.webp", category: ["Web"], title: "Your Friend Infertility Website", deliverables: ["Web Design", "Next.js", "Responsive"] },
    ];

    const filteredItems =
        filter === "All"
            ? items
            : items.filter((item) => item.category.includes(filter));

    return (
        <section className="portfolio-section mt-3 pt-5 pb-5">
            <div className="container-fluid px-3">

                {/* Filter Buttons */}
                <div className="portfolio-filters text-center mb-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={filter === cat ? "active" : ""}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Masonry Grid */}
                <div className="portfolio-grid">
                    {filteredItems.map((item) => (
                        <div key={item.id} className="portfolio-card position-relative">

                            <img src={item.image} alt={item.title} />

                            {/* Hover Overlay */}
                            <div className="overlay">

                                {/* LEFT — Title */}
                                <div className="overlay-title">
                                    <h5>{item.title}</h5>
                                    <Link href={`/portfolio/${item.id}/`}>
                                        <span className="view-btn">View Project →</span>
                                    </Link>
                                </div>

                                {/* RIGHT — Deliverables */}
                                <div className="overlay-deliverables">
                                    <p className="del-heading">Deliverables</p>
                                    <ul>
                                        {item.deliverables.map((d, i) => (
                                            <li key={i}>{d}</li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}