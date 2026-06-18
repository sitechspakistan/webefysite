import React from 'react'
import blogData from "@/data/blogdata.json"
import SecondHero from '@/app/component/SecondHero';

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const project = blogData.find(
        (item) => item.slug === slug
    );

    if (!project || !project.seo) {
        return {
            title: "Blog Not Found | Webefy Today",
            description: "The requested blog post does not exist.",
        };
    }

    return {
        title: `${project.seo.title || project.title} | Webefy Today`,
        description: project.seo.description || project.summary,
        alternates: {
            canonical: project.seo.canonical || `https://webefytoday.com/blog/${slug}`,
        },
        openGraph: {
            title: project.seo.title || project.title,
            description: project.seo.description || project.summary,
            url: project.seo.canonical || `https://webefytoday.com/blog/${slug}`,
            images: [
                {
                    url: project.image,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
        },
    };
}


export default async function Page({ params }) {

    const { slug } = await params;

    console.log("Slug:", slug);
    console.log("Data:", blogData);

    const project = blogData.find(
        (item) => item.slug === slug
    );

    if (!project) {
        return <h1>Project Not Found</h1>
    }


    return (
        <>
            <SecondHero variant={2} />

            <div id="works" className="section-work-single box-white flat-spacing pt-0">
                <div className="container">

                    <div className="row mb-32">
                        <h2 className="heading fw-semibold mb-32 text-center text-white pt-4">
                            {project.title}
                        </h2>
                        <div className="heading-section">

                            <div className="heading-sub fw-semibold effectFade fadeUp mx-auto">
                                {project.date}

                            </div>
                        </div>
                        <div className="col-12">
                            <div className="wrap-image mb-30 text-center">
                                <img src={project.image} alt={project.title} />

                            </div>

                            <div
                                className="text-secondary"
                                dangerouslySetInnerHTML={{ __html: project.content }}
                            />
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}


{/* <div className="row mb-30">
                        <div className="col-md-8">

                            <div className="text-body-1 fw-semibold text-secondary mb-15">
                                DELIVERABLES
                            </div>

                            <div className="list-tags">
                                {project.deliverables?.map((item, i) => (
                                    <span key={i} className="tags-item fw-semibold">
                                        {item}
                                    </span>
                                ))}
                            </div>

                        </div>
                    </div> */}

{/* Solution */ }
{/* <div className="row mb-60">
                        <div className="col-12">
                            {/* <h2 className="heading fw-semibold mb-20"></h2> */}
{/* {project.solution?.map((item, i) => { */ }
{/* if (typeof item === "string") { */ }
// Agar string ke andar <h2 ya <h3 ya <strong mojud hai
// if (item.includes("<h2") || item.includes("<h3") || item.includes("<strong")) {
// return <div key={i} dangerouslySetInnerHTML={{ __html: item }} />;
// }
// Normal text ke liye
// return <p key={i} className="text-secondary">{item}</p>;
// }

// if (item.type === "list") {
// return (
// <ul key={i} className="text-secondary">
// {item.items.map((li, index) => (
// <li key={index}>{li}</li>
// ))}
// </ul>
// );
// }
// return null;
// })}
// </div>
// </div> 

{/* Result */ }
// <div className="row mb-60">
// <div className="col-12">
{/* <h2 className="heading fw-semibold mb-20">Results</h2> */ }
// {project.result?.map((item, i) => {
// if (item.includes("<h2")) {
// return <div key={i} dangerouslySetInnerHTML={{ __html: item }} />;
// }
// return <p key={i} className="text-secondary">{item}</p>;
// })}
// </div>
{/* </div> */ }
