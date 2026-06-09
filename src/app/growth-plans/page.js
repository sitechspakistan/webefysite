import React from "react";
import SecondHero from "../component/SecondHero";
import GrowthPlanPricing from "../component/GrowthPlanPricing";
import homeFaqs from "@/data/faqs/homeFaqs.json";
import Faqs from "../component/Faqs";

const growthPlans = () => {
  return (
    <>
      <SecondHero
        Heading1={
          <>
            Turn Your Website Into a <br />
            Reliable Growth System Not
            <br /> Just a Static Asset
          </>
        }
        Description={
          <>
            Ongoing WordPress, Shopify & custom development support <br /> so
            your website stays fast, secure, and optimized for <br />{" "}
            conversions every month.
          </>
        }
      />
      <GrowthPlanPricing />
      <Faqs faqs={homeFaqs} />
    </>
  );
};

export default growthPlans;
