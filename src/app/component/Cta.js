import Link from "next/link";

export default function Cta() {
    return (
        <div className="section-cta flat-spacing pt-5 pb-0">
            <div className="container">
                <div className="box-black text-center">
                    <h2 className="text-white fw-semibold effectFade fadeUp ">Let's Connect,<br /> Turn Your Vision Into
                        Reality!</h2>
                    <p className="text-white effectFade fadeUp">At Webefy Today, we turn ideas into powerful digital
                        experiences.<br /> Let's
                        build something extraordinary together.</p>

                    <div className="text-body-1 num"><Link href="/start-a-project" className="tf-btn-2">
                        Unleash Your Idea
                        <i className="icon icon-arrow-top-right"></i>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}