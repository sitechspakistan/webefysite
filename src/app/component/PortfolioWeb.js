"use client";
import Link from "next/link";
import { useState } from "react";
import portfolioData from "@/data/portfoliodata";

export default function PortfolioWeb() {
    const [filter, setFilter] = useState("All");
    const categories = ["All", "Website Development", "Branding", "AI Automation"];


    const filteredItems =
        filter === "All"
            ? portfolioData
            : portfolioData.filter((item) => item.category.includes(filter));

    return (
        <section className="portfolio-section mt-3 pt-5 pb-5">
            <div className="container-fluid px-3">

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

                <div className="portfolio-grid mt-5">
                    {filteredItems.map((item) => (
                        <div key={item.slug} className="portfolio-card position-relative">

                            <img src={item.image} alt={item.title} />

                            <div className="overlay">

                                <div className="overlay-title">
                                    <h5>{item.title}</h5>
                                    <Link href={`/case-studies/${item.slug}/`}>
                                        <span className="view-btn">View Project →</span>
                                    </Link>
                                </div>

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