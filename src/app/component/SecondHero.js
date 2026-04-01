export default function SecondHero({ Subheading, Subtext, Heading1, Heading2, Description }) {
    return (
        <div className="section-hero custom-height">
            <div className="hero-image"></div>
            <div className="container">
                <div className="content-wrap text-center text-white">
                    <div className="heading-section">
                        <div className="heading-sub fw-semibold effectFade fadeUp mx-auto">{Subheading}</div>
                        <p className="fst-italic effectFade fadeUp pb-3">{Subtext}</p>

                    </div>
                    <div className="title text-display-2 effectFade fadeRotateX">
                        <h1><span className="title1 fw-semibold text-gradient-1">{Heading1} </span>
                            <br />
                            <div className="title2 d-flex gap-20 justify-content-center flex-wrap">
                                <span className="fw-semibold text-gradient-1"> {Heading2}</span>
                            </div>
                        </h1>
                    </div>
                    <p className="text effectFade fadeUp">
                        {Description}
                    </p>
                </div>
            </div>
        </div>
    );
}