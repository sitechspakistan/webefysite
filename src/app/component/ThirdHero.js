import Link from 'next/link'
import React from 'react'

function ThirdHero({ subheading, headingone, headingtwo, para, btntxtone, btntxttwo, image, features = [], hOneid }) {
    return (
        <div>
            <div id="third-hero" className="section-hero">
                <div className="hero-image"></div>
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className="content-wrap text-white">

                                <div className="heading-section">
                                    <div className="sub fw-semibold effectFade fadeUp">
                                        {subheading}
                                    </div>
                                </div>

                                <div className="title text-display-2 effectFade fadeRotateX" id={`${hOneid}`}>
                                    <h1>
                                        <span className="title1 fw-semibold text-gradient-1">
                                            {headingone}
                                        </span>
                                        <br />
                                        <div className="title2 d-flex gap-20 flex-wrap">
                                            <span className="fw-semibold text-gradient-1">
                                                {headingtwo}
                                            </span>
                                        </div>
                                    </h1>
                                </div>

                                <p className="text effectFade fadeUp">
                                    {para}
                                </p>

                                <div className="third_hero_btn">
                                    <div>
                                        <Link href="#contact" className="tf-btn">
                                            {btntxtone}
                                        </Link>
                                    </div>
                                    <div className='btn-css'>
                                        <Link href="/start-a-project" className="tf-btn">
                                            {btntxttwo}
                                        </Link>
                                    </div>
                                </div>

                                <div>
                                    <ul>
                                        {features.map((item, index) => (
                                            <li key={index}>
                                                <img src={item.icon} width={30} height={28} alt="" />
                                                {item.text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                            <img className='hero-img' src={`/assets/images/${image}`}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdHero