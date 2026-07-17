import Link from "next/link";

export default function ServiceDetail({ heading, para, services = [], useImageBg = false }) {
    return (
        <div id="services" className="section-services flat-spacing container-fluid px-0">
            <div className="top">
                <div className="heading-section center mb-48">
                    <h2 className="heading-title text-gradient-3 effectFade fadeRotateX">
                        {heading}
                    </h2>
                </div>
                <p className="text text-center effectFade fadeUp">
                    {para}
                </p>
            </div>

            {services.map((service, index) => {
                // even index (0, 2, 4...) => dark box, image on left
                // odd index (1, 3, 5...) => light box, image on right
                const isBlack = index % 2 === 0;
                const boxClass = isBlack ? "service-black-box" : "service-box";
                // last item gets extra bottom margin, matching original markup
                const extraClass = index === services.length - 1 ? " mb-4" : "";

                return (
                    <div className={`${boxClass}${extraClass}`} key={service.id}>
                        <div className="container">
                            <div className="row">
                                {isBlack && (
                                    <div className="col-md-6">
                                        <img src={service.image} className="img-fluid" id={useImageBg ? "image-bg" : undefined} alt={service.title} />
                                    </div>
                                )}

                                <div className="col-md-6 d-flex flex-column justify-content-between">
                                    <h3 className={isBlack ? "text-white" : ""}>
                                        <span className="fs-5">({service.id})</span> {service.title}
                                    </h3>

                                    <p>{service.description}</p>

                                    <div className="list-tags mb-3">
                                        {service.tags.map((tag) => (
                                            <a href="#" className="tags-item fw-semibold" key={tag}>
                                                {tag}
                                            </a>
                                        ))}
                                    </div>

                                    <div className="text-body-1 num">
                                        <Link href={service.link} className="tf-btn-2">
                                            Read more
                                            <i className="icon icon-arrow-top-right"></i>
                                        </Link>
                                    </div>
                                </div>

                                {!isBlack && (
                                    <div className="col-md-6">
                                        <img src={service.image} className="img-fluid" id={useImageBg ? "image-bg" : undefined} alt={service.title} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}