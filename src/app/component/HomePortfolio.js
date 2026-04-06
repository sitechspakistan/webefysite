"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";


export default function HomePortfolio() {


    return (
        <div id="works" className="section-featured-works home-portfolio flat-spacing">
            <div className="container-fluid">
                <div className="heading-section mb-0">
                    <div className="heading-sub fw-semibold mx-auto effectFade fadeUp">Our Portfolio</div>
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={15}
                    breakpoints={{
                        1024: { slidesPerView: 3 },
                        768: { slidesPerView: 2 },
                        0: { slidesPerView: 1 },
                    }}>
                    <SwiperSlide>
                        <div className="work-item">
                            <div className="featured-works-item  effectFade fadeUp no-div">
                                <div className="image main-mouse-hover">
                                    <img src="/assets/images/portfolio/1.jpg" alt="" />
                                    <Link href="/case-studies" className="tf-mouse view-project h6">
                                        Case Studies
                                        <i className="icon icon-arrow-top-right"></i>
                                    </Link>
                                </div>
                                <div className="content">
                                    <div className="pagi-dot">
                                        <span className="active"></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className="bot">
                                        <h3 className="heading fw-semibold">Automated AI Follow-Up Agent
                                        </h3>
                                        <div className="grid-text">
                                            <div className="item">
                                                <div className="title text-secondary">DELIVERABLES
                                                </div>
                                                <div className="fw-semibold text-body-3">AI Automation</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className="work-item">
                            <div className="featured-works-item  effectFade fadeUp no-div">
                                <div className="image main-mouse-hover">
                                    <img src="/assets/images/portfolio/2.jpg" alt="" />
                                    <Link href="/case-studies" className="tf-mouse view-project h6">
                                        Case Studies
                                        <i className="icon icon-arrow-top-right"></i>
                                    </Link>
                                </div>
                                <div className="content">
                                    <div className="pagi-dot">
                                        <span></span>
                                        <span className="active"></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className="bot">
                                        <h3 className="heading fw-semibold">HMG</h3>
                                        <div className="grid-text">
                                            <div className="item">
                                                <div className="title text-secondary">DELIVERABLES
                                                </div>
                                                <div className="fw-semibold text-body-3">Website Desing &
                                                    Development</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="work-item">
                            <div className="featured-works-item  effectFade fadeUp no-div">
                                <div className="image main-mouse-hover">
                                    <img src="/assets/images/portfolio/3.jpg" alt="" />
                                    <Link href="/case-studies" className="tf-mouse view-project h6">
                                        Case Studies
                                        <i className="icon icon-arrow-top-right"></i>
                                    </Link>
                                </div>
                                <div className="content">
                                    <div className="pagi-dot">
                                        <span></span>
                                        <span></span>
                                        <span className="active"></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className="bot">
                                        <h3 className="heading fw-semibold">Office Management System</h3>
                                        <div className="grid-text">
                                            <div className="item">
                                                <div className="title text-secondary">DELIVERABLES
                                                </div>
                                                <div className="fw-semibold text-body-3">Web Application
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="work-item">
                            <div className="featured-works-item  effectFade fadeUp no-div">
                                <div className="image main-mouse-hover">
                                    <img src="/assets/images/portfolio/4.jpg" alt="" />
                                    <Link href="/case-studies" className="tf-mouse view-project h6">
                                        Case Studies
                                        <i className="icon icon-arrow-top-right"></i>
                                    </Link>
                                </div>
                                <div className="content">
                                    <div className="pagi-dot">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span className="active"></span>
                                        <span></span>
                                    </div>
                                    <div className="bot">
                                        <h3 className="heading fw-semibold">Upfeeds</h3>
                                        <div className="grid-text">
                                            <div className="item">
                                                <div className="title text-secondary">DELIVERABLES
                                                </div>
                                                <div className="fw-semibold text-body-3">Alerts Portal,
                                                    Desktop Notifications
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="work-item">
                            <div className="featured-works-item  effectFade fadeUp no-div">
                                <div className="image main-mouse-hover">
                                    <img src="/assets/images/portfolio/5.jpg" alt="" />
                                    <Link href="/case-studies" className="tf-mouse view-project h6">
                                        Case Studies
                                        <i className="icon icon-arrow-top-right"></i>
                                    </Link>
                                </div>
                                <div className="content">
                                    <div className="pagi-dot">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span className="active"></span>
                                    </div>
                                    <div className="bot">
                                        <h3 className="heading fw-semibold">Zoop - WhatsApp AI Agent</h3>
                                        <div className="grid-text">
                                            <div className="item">
                                                <div className="title text-secondary">DELIVERABLES
                                                </div>
                                                <div className="fw-semibold text-body-3">WhatsApp AI Bot, CRM
                                                    Integration
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
