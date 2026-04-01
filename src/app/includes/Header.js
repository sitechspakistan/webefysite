export default function Header() {
    return (
        <header className="tf-header header2 sticky">
            <div className="header-inner">
                <a href="/" className="logo-site">
                    <img src="/assets/images/logo/webefy-logo.png" alt="Webefy Today" />
                </a>
                <div className="box-navigation">
                    <ul className="nav-menu-main">
                        <li className="menu-item">
                            <a href="/about" className="item-link link1">About</a>
                        </li>
                        <li className="menu-item has-child">
                            <a href="/services" className="item-link link1">Services</a>
                        </li>
                        <li className="menu-item">
                            <a href="/case-studies" className="item-link link1">Portfolio</a>
                        </li>
                        <li className="menu-item">
                            <a href="?" className="item-link link1">Blog</a>
                        </li>
                    </ul>
                </div>
                <a href="contact.html" className="tf-btn d-lg-flex d-none">
                    Start a Project
                </a>
                <a href="#" className="tf-btn open-mb-menu mobile-menu d-lg-none d-flex">
                    <i className="icon icon-grip-lines-solid"></i>
                </a>
            </div>
        </header>
    );
}