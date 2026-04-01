const portfolioData = [
    {
        slug: "ai-email-automation",
        image: "/assets/images/portfolio/1.jpg",
        description: ["A client came to Sitechs with a common challenge, missed follow-ups. They had a Google Sheet to track customers and an email inbox, but manually sending reminders was eating up valuable time."],
        category: ["AI"],
        title: "AI Email Automation",
        deliverables: ["AI Integration"],
        solution: [
            <ul>
                We built an AI - powered Follow - Up Agent that:
                <li>Automatically identifies missed follow-ups</li>
                <li>Sends timely reminders to customers</li>
                <li>Improves customer satisfaction</li>
            </ul >
        ],
        result: [
            "The result? A more efficient follow-up process that saved the client hours of manual work."
        ]
    },
    {
        slug: "hiller-media-group",
        image: "/assets/images/portfolio/2.jpg",
        description: ["Hiller Media Group approached Sitechs to revamp their outdated website and improve their digital presence. They needed a modern, fast, and easy-to-manage platform that aligned with their brand and showcased their services effectively."],
        category: ["Web"],
        title: "Hiller Media Group",
        deliverables: ["Next.js"],
        solution: ["We designed and developed a sleek, user-friendly WordPress website tailored to HMG’s media-focused audience. The new site features an intuitive layout, optimized loading speed, and SEO-friendly structure — making it easier for visitors to explore their portfolio and connect with the brand."],
        result: ["A professional online presence that strengthened HMG’s credibility, improved user engagement, and simplified content management through WordPress’s easy backend system."]
    },
    {
        slug: "whatsapp-crm-bot",
        image: "/assets/images/portfolio/5.jpg ",
        description: "A client approached Sitechs with a unique idea “Can my CRM talk on WhatsApp?” They wanted their customers to perform tasks directly from WhatsApp instead of logging into the CRM every time.",
        category: ["Web"],
        title: "WhatsApp CRM Bot",
        deliverables: ["CRM Integration"],
        solution: ["We built Zoop, a WhatsApp-based AI Agent that connects directly with the client’s CRM. Customers can now interact naturally using simple messages like:",

            "Hey Zoop, create an invoice for order #1204 Hey Zoop, show my pending tickets",
            "Zoop understands each command, processes it in real time, and responds instantly all without requiring users to log in. From creating invoices to checking payments or adding notes, Zoop handles it all through a smooth conversational flow."

        ],
        result: [
            <ul>
                <li>70% faster response times</li>
                <li>Improved customer satisfaction</li>
                <li>Zero repetitive work for internal teams</li>
                <p>Zoop understands each command, processes it in real time, and responds instantly all without requiring users to log in.From creating invoices to checking payments or adding notes, Zoop handles it all through a smooth conversational flow
                </p>
            </ul>


        ]
    },
    {
        slug: "vezyon-dashboard",
        image: "/assets/images/portfolio/3.jpg",
        description: "Vezyon needed a centralized platform to manage employee attendance, shifts, and HR operations. Their existing manual process created inefficiencies in tracking biometric data, managing leaves, and maintaining employee records.",
        category: ["Web"],
        title: "Vezyon Dashboard",
        deliverables: ["Dashboard UI"],
        solution: ["We developed a comprehensive Office Management Portal using PHP Laravel, seamlessly integrated with the client’s biometric attendance system. The platform enables real-time employee tracking, shift scheduling, and application management (leaves, late arrivals, and more). The admin dashboard provides instant visibility into workforce performance and attendance trends."],
        result: "A fully automated office management system that reduced manual HR work, improved attendance accuracy, and enhanced operational transparency across departments."
    },
    {
        slug: "upfeeds",
        image: "/assets/images/portfolio/4.jpg",
        description: "Creative Triplet approached Sitechs to develop a custom tool that could simplify Upwork job monitoring. They needed a system that delivers real-time, personalized job alerts directly to their desktop — helping them respond faster and never miss new opportunities.",
        category: ["AI"],
        title: "Upfeeds",
        deliverables: ["Upwork Alerts Portal"],
        solution: ["We built Upfeeds, a custom web portal designed to monitor Upwork job listings in real time. Using intelligent filters and user preferences, it automatically detects relevant job posts and sends instant desktop alerts. This allows freelancers and agencies to stay on top of new leads without manually refreshing Upwork all day."],
        result: "A productivity-boosting platform that helped Creative Triplet save time, increase their Upwork response rate, and secure more projects through instant job alerts."
    },
    { slug: "custom-patch-hats-store", image: "/assets/images/portfolio/csspatch.webp", category: ["Web"], title: "Custom Patch Hats Store", deliverables: ["UI Design"] },
    { slug: "creative-triple-agency", image: "/assets/images/portfolio/ct.webp", category: ["Web"], title: "Creative Triple Agency", deliverables: ["Next.js"] },
    { slug: "eventshub-platform", image: "/assets/images/portfolio/eh.webp", category: ["Web"], title: "EventsHub Platform", deliverables: ["Event Management"] },
    { slug: "inizio-solutions", image: "/assets/images/portfolio/inizio-website.webp", category: ["Web"], title: "Inizio Solutions", deliverables: ["Next.js", "SEO"] },
    { slug: "yfi-brand-logo", image: "/assets/images/portfolio/yfi-logo.webp", category: ["Logo"], title: "Your Friend Infertility Brand Logo", deliverables: ["Logo Design", "Branding"] },
    { slug: "yfi-website", image: "/assets/images/portfolio/yfi-website.webp", category: ["Web"], title: "Your Friend Infertility Website", deliverables: ["Web Design", "Next.js", "Responsive"] }
];

export default portfolioData;