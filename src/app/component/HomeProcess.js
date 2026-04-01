"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import ClutchWidget from "./ClucthWIdget";

export default function HomeProcess() {
    return (

        <div className="box-white">

            <div className="section-process flat-spacing pb-0 mb-20">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="process-heading h-100">
                                <div className="heading-section mb-80">
                                    <div className="heading-sub fw-semibold effectFade fadeUp">Process</div>
                                    <h2 className="heading-title text-gradient-3 effectFade fadeRotateX">From Idea <br /> to
                                        Production</h2>
                                </div>
                                <div className="group-btn-slider">
                                    <div className="nav-prev-swiper">
                                        <i className="icon icon-angle-left-solid"></i>
                                    </div>
                                    <div className="nav-next-swiper">
                                        <i className="icon icon-angle-right-solid"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="process-slide">
                                <Swiper
                                    modules={[Navigation]}
                                    navigation={{
                                        prevEl: ".nav-prev-swiper",
                                        nextEl: ".nav-next-swiper",
                                    }}
                                    slidesPerView={1.5}
                                    spaceBetween={20}
                                    breakpoints={{
                                        1024: {
                                            slidesPerView: 1.5,
                                            spaceBetween: 30
                                        },
                                        768: {
                                            slidesPerView: 1.5
                                        },
                                    }}>

                                    <SwiperSlide>
                                        <div className="process-card">
                                            <i className="icon icon-search-solid"></i>
                                            <div className="content">
                                                <h3 className="title fw-semibold">Discovery & Brief</h3>
                                                <p className="text text-secondary">We start by understanding your
                                                    business, goals, and target audience. A detailed project brief
                                                    is prepared to align on vision, scope, and deliverables.
                                                </p>
                                            </div>
                                            <div className="bot">
                                                <div className="time fw-semibold">1-3 DAYS</div>
                                                <div className="number">
                                                    <span className="text-neutral-400">01</span>
                                                    <span className="text-neutral-200">/06</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="process-card">
                                            <i className="icon icon-bolt-solid"></i>
                                            <div className="content">
                                                <h3 className="title fw-semibold">Strategy & Planning</h3>
                                                <p className="text text-secondary">We map out the full project roadmap.
                                                    sitemap, brand direction, timeline, and cost breakdown, so there
                                                    are zero surprises along the way.
                                                </p>
                                            </div>
                                            <div className="bot">
                                                <div className="time fw-semibold">2-4 DAYS</div>
                                                <div className="number">
                                                    <span className="text-neutral-400">02</span>
                                                    <span className="text-neutral-200">/06</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="process-card">
                                            <div className="icon">
                                                <svg width="32px" height="32px" viewBox="0 0 192 192"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none">
                                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                                    <g id="SVGRepo_iconCarrier">
                                                        <path
                                                            d="m104.175 90.97-4.252 38.384 38.383-4.252L247.923 15.427V2.497L226.78-18.646h-12.93zm98.164-96.96 31.671 31.67"
                                                            style={{ fill: "none", fillOpacity: 1, fillRule: "nonzero", stroke: "#fff", strokeWidth: 12, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: "none", strokeOpacity: 1 }}
                                                            transform="translate(-77.923 40.646)">
                                                        </path>
                                                        <path d="m195.656 33.271-52.882 52.882"
                                                            style={{ fill: "none", fillOpacity: 1, fillRule: "nonzero", stroke: "#fff", strokeWidth: 12, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 5, strokeDasharray: "none", strokeOpacity: 1 }}
                                                            transform="translate(-77.923 40.646)">
                                                        </path>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="content">
                                                <h3 className="title fw-semibold">Design & Prototype</h3>
                                                <p className="text text-secondary">Wireframes, mockups, and visual
                                                    concepts are crafted and presented for feedback. Every design
                                                    decision is intentional and brand-aligned.
                                                </p>
                                            </div>
                                            <div className="bot">
                                                <div className="time fw-semibold">1-2 WEEKS</div>
                                                <div className="number">
                                                    <span className="text-neutral-400">03</span>
                                                    <span className="text-neutral-200">/06</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="process-card">
                                            <i className="icon icon-code-solid"></i>
                                            <div className="content">
                                                <h3 className="title fw-semibold">Development & Build</h3>
                                                <p className="text text-secondary">Your approved designs are brought to
                                                    life with clean, fast, and responsive code built on the right
                                                    platform for your needs.
                                                </p>
                                            </div>
                                            <div className="bot">
                                                <div className="time fw-semibold">2-4 WEEKS</div>
                                                <div className="number">
                                                    <span className="text-neutral-400">04</span>
                                                    <span className="text-neutral-200">/06</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="process-card">
                                            <i className="icon icon-check-solid"></i>
                                            <div className="content">
                                                <h3 className="title fw-semibold">Review & Revisions</h3>
                                                <p className="text text-secondary">You review the complete project. We
                                                    refine, polish, and perfect based on your feedback until
                                                    everything is exactly right.
                                                </p>
                                            </div>
                                            <div className="bot">
                                                <div className="time fw-semibold">3-5 DAYs</div>
                                                <div className="number">
                                                    <span className="text-neutral-400">05</span>
                                                    <span className="text-neutral-200">/06</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="process-card">
                                            <div className="icon">
                                                <img src="/assets/images/rocket-two.svg" width={32} height={32} />
                                            </div>
                                            <div className="content">
                                                <h3 className="title fw-semibold">Launch & Handover</h3>
                                                <p className="text text-secondary">Your website or brand goes live. We
                                                    handle the full launch, provide all files, and ensure a smooth
                                                    handover with ongoing support available.
                                                </p>
                                            </div>
                                            <div className="bot">
                                                <div className="time fw-semibold">1-2 DAYS</div>
                                                <div className="number">
                                                    <span className="text-neutral-400">06</span>
                                                    <span className="text-neutral-200">/06</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper >
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <ClutchWidget />

        </div>
    );
}