export default function Footer() {
    return (
        <footer>
            <div className="footer-image">
            </div>
            <div className="container">
                <div className="footer-bottom">
                    <ul className="footer-links d-flex gap-24 align-items-center">
                        <li>
                            <a href="/about" className="fw-semibold link-underline link1">About</a>
                        </li>
                        <li>
                            <a href="/services" className="fw-semibold link-underline link1">Services</a>
                        </li>
                        <li>
                            <a href="/case-stuidies" className="fw-semibold link-underline link1">Case Studies</a>
                        </li>
                        <li>
                            <a href="/start-a-project" className="fw-semibold link-underline link1">Start a Project</a>
                        </li>
                    </ul>
                    <p className="text-secondary coppy-rights text-center">Copyright &copy; Webefy Today 2026, All rights
                        reserved.</p>
                    <div className="tf-social-1 justify-content-end">
                        <a href="https://www.youtube.com/channel/UCGMzSa1yfxnq2khOQoWg62Q" target="_blank"
                            className="text-body-1 fw-semibold">
                            <div className="social-item">
                                <i className="icon icon-youtube"></i>
                            </div>
                        </a>
                        <a href="https://www.facebook.com/webefytoday/" target="_blank" className="text-body-1 fw-semibold">
                            <div className="social-item">
                                <i className="icon icon-facebook-f"></i>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/webefytoday/" target="_blank"
                            className="text-body-1 fw-semibold">
                            <div className="social-item">
                                <i className="icon icon-instagram"></i>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/company/webefytoday/?originalSubdomain=pk" target="_blank"
                            className="text-body-1 fw-semibold">
                            <div className="social-item">
                                <i className="icon icon-linkedin-in"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}