export default function Footer() {
    return (
        <footer>
            <div className="footer-image">
            </div>
            <div className="container">
                <div className="footer-bottom">
                    <ul className="footer-links d-flex gap-24 align-items-center">
                        <li>
                            <a href="about.html" className="fw-semibold link-underline link1">About</a>
                        </li>
                        <li>
                            <a href="services.html" className="fw-semibold link-underline link1">Services</a>
                        </li>
                        <li>
                            <a href="work.html" className="fw-semibold link-underline link1">Works</a>
                        </li>
                        <li>
                            <a href="contact.html" className="fw-semibold link-underline link1">Contact</a>
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