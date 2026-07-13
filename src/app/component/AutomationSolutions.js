import React from 'react'
import {
    FileText,
    RefreshCcw,
    Mail,
    ShoppingCart,
    Sheet,
    MessageCircle,
    Users,
    Calendar,
    MessageSquareText,
    Receipt,
    CreditCard,
    ArrowRight,
} from 'lucide-react'

const solutions = [
    {
        title: "Lead Generation",
        desc: "Capture leads from website forms and send them to your CRM with email notifications.",
        icons: [
            { Icon: FileText, color: "#4A90D9", bg: "#EAF3FC" },
            { Icon: RefreshCcw, color: "#2ECC71", bg: "#E9FBF1" },
            { Icon: Mail, color: "#D94FA0", bg: "#FCEAF5" },
        ],
    },
    {
        title: "E-commerce Orders",
        desc: "Automatically send new orders to inventory, generate invoice and notify your team.",
        icons: [
            { Icon: ShoppingCart, color: "#E8952D", bg: "#FDF3E7" },
            { Icon: Sheet, color: "#2ECC71", bg: "#E9FBF1" },
            { Icon: Mail, color: "#D94FA0", bg: "#FCEAF5" },
        ],
    },
    {
        title: "Support Management",
        desc: "Automatically create tickets, assign to team and send status updates to customers.",
        icons: [
            { Icon: MessageCircle, color: "#4A90D9", bg: "#EAF3FC" },
            { Icon: Users, color: "#7B5BD9", bg: "#F1EAFC" },
            { Icon: Mail, color: "#D94FA0", bg: "#FCEAF5" },
        ],
    },
    {
        title: "Appointment Booking",
        desc: "Book appointments, update calendar and send reminders via email or WhatsApp.",
        icons: [
            { Icon: Calendar, color: "#4A90D9", bg: "#EAF3FC" },
            { Icon: MessageSquareText, color: "#2ECC71", bg: "#E9FBF1" },
            { Icon: Mail, color: "#D94FA0", bg: "#FCEAF5" },
        ],
    },
    {
        title: "Invoice & Payments",
        desc: "Generate invoices, track payments and update your accounting software.",
        icons: [
            { Icon: Receipt, color: "#E85D3D", bg: "#FDEDE8" },
            { Icon: CreditCard, color: "#7B5BD9", bg: "#F1EAFC" },
            { Icon: RefreshCcw, color: "#17A2A2", bg: "#E6F7F7" },
        ],
    },
]

const AutomationSolutions = () => {
    return (
        <section className='bg-white'>
            <div className="container pt-5 pb-5">
                <h2 className='text-center'>Popular Automation Solutions</h2>
                <p className='text-center pb-4'>Ready to use automation ideas for your business</p>
                <div className="solutions-grid">
                    {solutions.map((sol, idx) => (
                        <div className="solution-card" key={idx}>
                            <h5>{sol.title}</h5>
                            <p>{sol.desc}</p>

                            <div className="icon-chain">
                                {sol.icons.map((item, i) => (
                                    <React.Fragment key={i}>
                                        <div className="icon-badge" style={{ background: item.bg }}>
                                            <item.Icon size={18} color={item.color} strokeWidth={2} />
                                        </div>
                                        {i < sol.icons.length - 1 && (
                                            <div className="chain-arrow">
                                                <ArrowRight size={14} color="#c4c4c4" />
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AutomationSolutions