import ContactForm from "../component/ContactForm";

export const metadata = {
    title: "Contact Us | Webefy Today",
    description: "Trexa – AI Agency & SaaS HTML Template",
    alternates: {
        canonical: "https://webefytoday.com/contact",
    },
    icons: {
        icon: "/assets/images/webefy-lgo/about-shape1_2.png",
    }
};

export default function ContactUs() {

    return (

        <>
            <ContactForm />
        </>

    );
}