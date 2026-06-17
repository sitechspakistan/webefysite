import Link from "next/link";

export const metadata = {
    title: "404 Page Not Found | Webefy Today",
    icons: {
        icon: "/assets/images/webefy-lgo/about-shape1_2.png",
    }
};

export default function NotFound() {
    return (
        <div className="container mt-3 text-center d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
            <div className="p-5 mt-5 rounded-3">
                <h1 className="display-1 fw-bold" style={{ color: "#45318e" }}>404</h1>
                <h2 className="mb-4 fw-semibold">Oops! Page Not Found</h2>
                <p className="text-muted mb-4 max-width-500">
                    This page may have been removed, renamed, or is temporarily unavailable.<br /> Please use the button below to visit our homepage and find what you're looking for.
                </p>
                <Link href="/" className="btn text-white px-4 py-2 mt-3" style={{ backgroundColor: "#ea2b89", borderRadius: "50px" }}>
                    Go Back Home
                </Link>
            </div>
        </div>
    );
}