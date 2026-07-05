

import SecondHero from "../component/SecondHero";
import ProjectForm from "./ProjectForm";
import { Suspense } from "react";

export const metadata = {
  title: "Start Your Project With Webefy Today | Get a Free Quote",
  description: "Ready to build something great? Tell us about your project and get a custom quote for web design, AI automation, or branding. It starts with a simple conversation.",
  alternates: {
    canonical: "https://www.webefytoday.com/start-a-project",
  },
  icons: {
    icon: "/assets/images/webefy-lgo/about-shape1_2.png",
  }
};


export default function StartProject() {
  return (
    <Suspense fallback={null}>
      <SecondHero
        Subheading={"Start Your Journey"}
        Heading1={"Built for the Bold."}
        Heading2={"Made for the Brave."}
        Description={
          <>
            We don't follow the path we forge it. Strength, speed,
            <br /> and unstoppable power, all in one place.
          </>
        }
      />
      <ProjectForm />

    </Suspense>
  );
}