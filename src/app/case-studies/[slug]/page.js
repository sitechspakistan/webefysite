import SecondHero from "@/app/component/SecondHero";
import portfolioData from "@/data/portfoliodata"


export async function generateMetadata({ params }) {
    const { slug } = await params;

    const project = portfolioData.find(
        (item) => item.slug === slug
    );

    if (!project) {
        return {
            title: "Project Not Found",
            description: "The requested project does not exist.",
        };
    }

    return {
        title: `${project.slug} | Case Studies`,
        description: project.description?.slice(0, 150),

        openGraph: {
            title: project.title,
            description: project.description,
            images: [
                {
                    url: project.image,
                    width: 1200,
                    height: 630,
                },
            ],
        },

        alternates: {
            canonical: `https://webefytoday.com/case-studies/${slug}`,
        },
        icons: {
            icon: "/assets/images/webefy-lgo/about-shape1_2.png",
        },
    };

}


export default async function Page({ params }) {
    const { slug } = await params;

    const project = portfolioData.find(
        (item) => item.slug === (slug)
    );

    if (!project) {
        return <h1>No Project Found</h1>;
    }

    return (
        <>
            <SecondHero variant={2} />

            <div id="works" className="section-work-single box-white flat-spacing pt-0">
                <div className="container">
                    <div className="row mb-32">
                        <h2 className="heading fw-semibold mb-32 effectFade fadeUp text-center text-white pt-4 pb-0">{project.title}</h2>

                        <div className="col-12">
                            <div className="wrap-image mb-30 effectFade fadeZoom text-center">
                                <img src={project.image} alt="" />
                            </div>
                            <p className="text-secondary effectFade fadeUp">
                                {project.description}
                            </p>
                        </div>
                    </div>
                    <div className="row mb-60 " >
                        <div className="col-md-8 md-mb-24">
                            <div className="text-body-1 fw-semibold text-secondary mb-15 effectFade fadeUp">
                                DELIVERABLES
                            </div>
                            <div className="list-tags effectFade fadeUp">
                                <a href="#" className="tags-item fw-semibold">{project.deliverables}</a>
                            </div>
                        </div>

                    </div>
                    <div className="row mb-60">
                        <div className="col-12">
                            <h2 className="heading fw-semibold mb-20 effectFade fadeUp">Our Solution</h2>
                            <p className="text-secondary effectFade fadeUp">
                                {project.solution}
                            </p>
                        </div>
                    </div>
                    <div className="row mb-60">
                        <div className="col-12">
                            <h2 className="heading fw-semibold mb-20 effectFade fadeUp">Results</h2>
                            <p className="text-secondary effectFade fadeUp">
                                {project.result}                </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
