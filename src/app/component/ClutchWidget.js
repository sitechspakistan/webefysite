"use client";
import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClutchWidget() {
    const pathname = usePathname();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (window.CLUTCHCO && typeof window.CLUTCHCO.Init === "function") {
                window.CLUTCHCO.Init();
            }
        }, 600);

        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <section className="flat-spacing pt-0 pb-4">
            <div className="container">
                <div
                    key={pathname}
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
                <Script
                    id="clutch-script-webefy"
                    src="https://widget.clutch.co/static/js/widget.js"
                    strategy="afterInteractive"
                    onLoad={() => {
                        if (window.CLUTCHCO) window.CLUTCHCO.Init();
                    }}
                />
            </div>
        </section>
    );
}