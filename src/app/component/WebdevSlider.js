export default function WebDevSlider() {
    const clients = [
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
        "6.png",
        "7.png",
        "8.png"
    ];

    return (
        <div className="section-partner">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="partner-wrap">
                            <p className="text-secondary text fw-semibold">
                                Trusted by 100+ <br /> top-tier brands
                            </p>
                            <div className="infinite-slider-wrapper">
                                <div className="infinite-slider-track">
                                    {[...clients, ...clients].map((n, i) => (
                                        <div className="slide-item" key={i}>
                                            <img src={`/assets/images/website-development/cities/${n}`} alt="" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
