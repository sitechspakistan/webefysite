export default function HomeSlider() {
    const clients = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className="section-partner">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="partner-wrap">
                            <p className="text-secondary text fw-semibold">Trusted by 100+ <br /> top-tier brands</p>
                            <div className="infinite-slider-wrapper">
                                <div className="infinite-slider-track">
                                    {clients.map((n) => (
                                        <div className="slide-item" key={n}>
                                            <img src={`/assets/images/clients/${n}.png`} alt="" />
                                        </div>
                                    ))}
                                    {clients.map((n) => (
                                        <div className="slide-item" key={`c-${n}`}>
                                            <img src={`/assets/images/clients/${n}.png`} alt="" />
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