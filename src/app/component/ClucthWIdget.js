"use client";
import { useEffect } from "react";

export default function ClutchWidget() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://widget.clutch.co/static/js/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section className="flat-spacing pt-0">
            <div className="container">
                <div
                    className="clutch-widget px-0"
                    data-url="https://widget.clutch.co"
                    data-widget-type="12"
                    data-height="375"
                    data-nofollow="false"
                    data-expandifr="true"
                    data-scale="100"
                    data-reviews="167465,340300,336045,330708,169289,153525,150494"
                    data-clutchcompany-id="1810871"
                ></div>
            </div>
        </section>
    );
}