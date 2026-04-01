import SecondHero from "@/app/component/SecondHero";
import portfolioData from "@/data/portfoliodata"

export default async function Page({ params }) {
    const { id } = await params;

    const project = portfolioData.find(
        (item) => item.id === Number(id)
    );

    if (!project) {
        return <h1>No Project Found</h1>;
    }

    return (
        <>
            <SecondHero Subheading={"Portfolio Detail"} Heading1={"Completed Work"} Heading2={"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"} description={"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"} />

            <div id="works" className="section-work-single flat-spacing pt-0">
                <div className="container">
                    <div className="row mb-32">
                        <div className="col-12">
                            <div className="wrap-image mb-60 effectFade fadeZoom">
                                <img src={project.image} alt="" />
                            </div>
                            <h2 className="heading fw-semibold mb-32 effectFade fadeUp">{project.title}</h2>
                            <p className="text-secondary effectFade fadeUp">
                                {project.description}
                            </p>
                        </div>
                    </div>
                    <div className="row mb-60">
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
                            <h2 className="heading fw-semibold mb-20 effectFade fadeUp">Project Research</h2>
                            <p className="text-secondary effectFade fadeUp">
                                {project.solution?.map((s, i) => <li key={i}>{s}</li>)}
                            </p>
                        </div>
                    </div>
                    <div className="row mb-60">
                        <div className="col-12">
                            <h2 className="heading fw-semibold mb-20 effectFade fadeUp">Project  Results</h2>
                            <p className="text-secondary effectFade fadeUp">
                                {project.result}                </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
        // <div className="container py-5">
        //     <h1>{project.title}</h1>
        //     <img src={project.image} alt={project.title} style={{ maxWidth: "500px" }} />
        //     <p>{project.description}</p>
        //     <p><strong>Tech:</strong> {project.tech}</p>
        //     <p><strong>Solution:</strong></p>
        //     <ul>
        //         {project.solution?.map((s, i) => <li key={i}>{s}</li>)}
        //     </ul>
        //     <p><strong>Result:</strong> {project.result}</p>
        // </div>
    );
}
