import React from 'react'
import SecondHero from '../component/SecondHero'
import BlogGrid from '../component/BlogGrid'

export const metadata = {
    title: "Blogs | Webefy Today",
    description: "See Our Latest Blogs",
    alternates: {
        canonical: "https://webefytoday.com/blog",
    },
    icons: {
        icon: "/assets/images/webefy-lgo/about-shape1_2.png",
    }
};

const Blogpage = () => {
    return (
        <>
            <SecondHero Subheading={"Webefy Insights"} Heading1={
                <>Smart Ideas For <br /> Business Scaling</>
            }
                Description={<>
                    Explore our latest articles, guides, and expert insights on AI automation, <br />
                    web development, and branding built for growth-focused brands.
                </>}
            />
            <BlogGrid />
        </>
    )
}

export default Blogpage
