

import SecondHero from "../component/SecondHero";
import ProjectForm from "./ProjectForm";
import { Suspense } from "react";

export const metadata = {
  title: "Start A Project | Webefy Today",
  description: "Automate repetitive tasks and scale smart with Webefy Today. We build intelligent AI agents and custom workflow solutions to optimize your business operations.",
  alternates: {
    canonical: "https://webefytoday.com/start-a-project",
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