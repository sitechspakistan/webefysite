"use client"
import React from 'react'
import blogData from '@/data/blogdata.json'
import Link from 'next/link'

const BlogGrid = () => {

    const cardStyle = {
        transform: 'translate(0px, 0px)',
        opacity: 1,
        visibility: 'inherit'
    };

    return (
        <section className="section-blog flat-spacing">
            <div className="container">
                <div className="tf-grid-layout sm-col-2 xl-col-3">

                    {blogData.map((blog, index) => (
                        <div key={index}
                            className="article-blog hover-img effectFade fadeUp no-div"
                            style={cardStyle}
                        >

                            <Link href={`/blog/${blog.slug}`} className="blog-image img-style">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                />
                            </Link>

                            <div className="blog-content">
                                <div className="infor">

                                    <p className="infor_sub text-secondary">
                                        {blog.category?.[0]}
                                    </p>

                                    <h6 className="fw-semibold">
                                        <Link href={`/blog/${blog.slug}`} className="link1 infor_name">
                                            {blog.title}
                                        </Link>
                                    </h6>

                                </div>

                                {/* <Link href={`/blog/${blog.slug}`} className="tf-btn-2">
                                    Read more <i className="icon icon-arrow-top-right"></i>
                                </Link> */}
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default BlogGrid