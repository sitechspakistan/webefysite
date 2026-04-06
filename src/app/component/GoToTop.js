"use client"
import { useEffect, useState } from "react";

export default function GotoTop() {
    const [scrollAngle, setScrollAngle] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 360; // 0 to 360 degrees
            setScrollAngle(progress);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowTop(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <button
            id="goTop"
            className={showTop ? "show" : ""}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            <span
                className="border-progress"
                style={{ "--progress-angle": `${scrollAngle}deg` }}
            ></span>
            <span className="ic-wrap">
                <span className="icon icon-long-arrow-alt-up-solid"></span>
            </span>
        </button>

    );
}