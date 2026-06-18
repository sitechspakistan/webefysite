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
            <SecondHero Subheading={"Solutions We Deliver"} Heading1={"We Don’t Just Build"} Heading2={"We Create Impact"}
                Description={<>
                    We combine branding, web development, and AI automation to build <br />
                    powerful digital experiences for modern businesses.
                </>}
            />
            <BlogGrid />
        </>
    )
}

export default Blogpage
