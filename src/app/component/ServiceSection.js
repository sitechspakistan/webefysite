import Image from "next/image";

export default function ServiceSection({ Subtitle, Heading1, Heading2, Para, Image }) {
    return (
        <div id="services" className="section-services flat-spacing pb-0">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xxl-6 col-lg-6">
                        <div className="d-flex flex-column justify-content-between h-100">
                            <div className="col-left">
                                <div className="heading-section mb-48">
                                    <div className="heading-sub fw-semibold effectFade fadeUp">{Subtitle}</div>
                                    <h2 className="heading-title text-gradient-3 effectFade fadeRotateX">{Heading1} <br /> {Heading2}</h2>
                                </div>
                                <p className="effectFade fadeUp">{Para}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-lg-6">
                        <img src={`/assets/images/servicedetail/${Image}`} alt="Services" />
                    </div>

                </div>
            </div>
        </div>
    );
}