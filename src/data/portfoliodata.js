const portfolioData = [
    {
        slug: "ai-email-automation",
        image: "/assets/images/portfolio/1.jpg",
        description: ["A client came to Webefy Today with a common challenge, missed follow-ups. They had a Google Sheet to track customers and an email inbox, but manually sending reminders was eating up valuable time."],
        category: ["AI Automation"],
        title: "AI Email Automation",
        deliverables: ["AI Integration"],
        solution: [
            "We built an AI-powered Follow-Up Agent that:",
            {
                type: "list",
                items: [
                    "Automatically identifies missed follow-ups",
                    "Sends timely reminders to customers",
                    "Improves customer satisfaction"
                ]
            }
        ],
        result: [
            "The result? A more efficient follow-up process that saved the client hours of manual work."
        ]
    },
    {
        slug: "hiller-media-group",
        image: "/assets/images/portfolio/2.jpg",
        description: ["Hiller Media Group approached Webefy Today to revamp their outdated website and improve their digital presence. They needed a modern, fast, and easy-to-manage platform that aligned with their brand and showcased their services effectively."],
        category: ["Website Development"],
        title: "Hiller Media Group",
        deliverables: ["Next.js"],
        solution: ["We designed and developed a sleek, user-friendly WordPress website tailored to HMG's media-focused audience. The new site features an intuitive layout, optimized loading speed, and SEO-friendly structure — making it easier for visitors to explore their portfolio and connect with the brand."],
        result: ["A professional online presence that strengthened HMG's credibility, improved user engagement, and simplified content management through WordPress's easy backend system."]
    },
    {
        slug: "whatsapp-crm-bot",
        image: "/assets/images/portfolio/5.jpg ",
        description: "A client approached Webefy Today with a unique idea Can my CRM talk on WhatsApp? They wanted their customers to perform tasks directly from WhatsApp instead of logging into the CRM every time.",
        category: ["Website Development"],
        title: "WhatsApp CRM Bot",
        deliverables: ["CRM Integration"],
        solution: [
            "We built Zoop, a WhatsApp-based AI Agent that connects directly with the client's CRM. Customers can now interact naturally using simple messages like:",
            {
                type: "list",
                items: [
                    "Hey Zoop, create an invoice for order #1204 Hey Zoop, show my pending tickets",
                    "Zoop understands each command, processes it in real time, and responds instantly all without requiring users to log in. From creating invoices to checking payments or adding notes, Zoop handles it all through a smooth conversational flow."
                ]
            }
        ],
        result: [
            {
                type: "list",
                items: [
                    "70 % faster response times",
                    "Improved customer satisfaction",
                    "Zero repetitive work for internal teams",
                ]
            },
            "Zoop understands each command, processes it in real time, and responds instantly all without requiring users to log in.From creating invoices to checking payments or adding notes, Zoop handles it all through a smooth conversational flow"
        ]
    },
    {
        slug: "vezyon-dashboard",
        image: "/assets/images/portfolio/3.jpg",
        description: "Vezyon needed a centralized platform to manage employee attendance, shifts, and HR operations. Their existing manual process created inefficiencies in tracking biometric data, managing leaves, and maintaining employee records.",
        category: ["Website Development"],
        title: "Vezyon Dashboard",
        deliverables: ["Dashboard UI"],
        solution: ["We developed a comprehensive Office Management Portal using PHP Laravel, seamlessly integrated with the client's biometric attendance system. The platform enables real-time employee tracking, shift scheduling, and application management (leaves, late arrivals, and more). The admin dashboard provides instant visibility into workforce performance and attendance trends."],
        result: "A fully automated office management system that reduced manual HR work, improved attendance accuracy, and enhanced operational transparency across departments."
    },
    {
        slug: "upfeeds",
        image: "/assets/images/portfolio/4.jpg",
        description: "Creative Triplet approached Webefy Today to develop a custom tool that could simplify Upwork job monitoring. They needed a system that delivers real-time, personalized job alerts directly to their desktop — helping them respond faster and never miss new opportunities.",
        category: ["AI Automation"],
        title: "Upfeeds",
        deliverables: ["Upwork Alerts Portal"],
        solution: ["We built Upfeeds, a custom web portal designed to monitor Upwork job listings in real time. Using intelligent filters and user preferences, it automatically detects relevant job posts and sends instant desktop alerts. This allows freelancers and agencies to stay on top of new leads without manually refreshing Upwork all day."],
        result: "A productivity-boosting platform that helped Creative Triplet save time, increase their Upwork response rate, and secure more projects through instant job alerts."
    },
    { slug: "css-patch-hats-store", image: "/assets/images/portfolio/csspatch.webp", category: ["Website Development"], title: "CSS Patch Hats Store", deliverables: ["UI Design"] },
    {
        slug: "creative-triplet",
        image: "/assets/images/portfolio/ct.webp",
        category: ["Website Development"],
        title: "Creative Triplet",
        deliverables: ["Next.js"],
        description: [
            "Creative Triplet is a high-end animated explainer video agency that depends heavily on visually rich content to showcase its work. However, their previous Elementor-based website struggled to efficiently handle large video files and complex layouts, resulting in slow load times and a compromised browsing experience. This directly impacted user experience and brand perception."
        ],
        solution: [
            "Instead of applying temporary fixes, we rebuilt the entire website using Next.js with a performance-first mindset eliminating the limitations of page builders and creating a scalable architecture tailored for media-heavy experiences.",
            {
                type: "list",
                items: [
                    "Full migration from Elementor to a custom Next.js application",
                    "Removed bloated DOM structure and unnecessary scripts generated by Elementor",
                    "Optimized and compressed high-resolution video assets for faster delivery",
                    "Implemented lazy loading for videos and media-heavy sections",
                    "Used modern rendering techniques for faster page transitions",
                    "Designed a fully responsive UI optimized for performance across all devices",
                    "Improved Core Web Vitals including LCP and overall load speed",
                    "Built a clean, scalable, and SEO-friendly frontend architecture"
                ]
            }
        ],
        result: [
            "The transformation resulted in a significantly faster and smoother user experience. The new Next.js-powered platform not only improved performance but also elevated the overall perception of the brand.",
            {
                type: "list",
                items: [
                    "Substantial reduction in page load times across all major pages",
                    "Seamless playback of video content without lag or delays",
                    "Improved engagement due to faster interactions and smoother navigation",
                    "Stronger brand credibility with a premium, high-performance website",
                    "Scalable infrastructure capable of handling future media expansion",
                    "Supported by 16+ verified 5-star reviews on Clutch, reinforcing the brand’s credibility and consistent delivery of high-quality animation projects"
                ]
            }
        ]
    },
    { slug: "eventshub-dubai", image: "/assets/images/portfolio/eh.webp", category: ["Branding"], title: "EventsHub Dubai", deliverables: ["Logo Design", "Branding"] },
    {
        slug: "inizio-solutions",
        image: "/assets/images/portfolio/inizio-website.webp",
        category: ["Website Development"],
        title: "Inizio Solutions",
        deliverables: [["Next.js"], ["SEO"]],
        description: [
            "Inizio Solutions approached Webefy Today to build a professional, high-performance website for their embroidery, vector art, and custom patches business. They needed a platform that not only looked great but also ranked well on search engines to attract new clients organically."
        ],
        solution: [
            "We designed and developed a fully custom website using Next.js built from scratch with a focus on speed, responsiveness, and SEO performance. The site was crafted to showcase their embroidery digitizing, vector conversion, and custom patch services in a clean, professional layout.",
            {
                type: "list",
                items: [
                    "Built with Next.js for blazing-fast performance and SSR",
                    "Fully responsive design across all devices",
                    "Advanced on-page SEO with optimized meta tags, structured data, and sitemap",
                    "Ranked in 50+ cities across USA, UK, Australia, and New Zealand",
                    "Targeted local SEO strategy for embroidery and custom patch keywords",
                    "Service pages tailored for embroidery, vector art, and custom patches",
                    "Optimized images and assets for faster load times",
                    "Clean UI designed to convert visitors into clients"
                ]
            }
        ],
        result: [
            "A fast, fully responsive, and SEO-optimized website that gave Inizio Solutions a strong digital presence in their niche. The advanced SEO setup helped them rank for targeted keywords, bringing in consistent organic traffic and new business inquiries."
        ]
    },
    { slug: "yfi-brand-logo", image: "/assets/images/portfolio/yfi-logo.webp", category: ["Branding"], title: "Your Friend Infertility Brand Logo", deliverables: ["Logo Design", "Branding"] },
    { slug: "yfi-website", image: "/assets/images/portfolio/yfi-website.webp", category: ["Website Development"], title: "Your Friend Infertility Website", deliverables: ["Web Design", "Next.js", "Responsive"] }
];

export default portfolioData;