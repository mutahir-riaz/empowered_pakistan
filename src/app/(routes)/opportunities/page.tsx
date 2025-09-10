import OpportunitiesFeatured from "@/components/mainUI/OpportunitiesFeatured";
import OpportunitiesHero from "@/components/mainUI/OpportunitiesHero";
import PageHeader from "@/components/mainUI/PageHeader";
import React from "react";

const Opportunities = () => {
  return (
    <main>
      <PageHeader heading="Opportunities" title="opportunities" />
      <OpportunitiesHero />
      <OpportunitiesFeatured />
    </main>
  );
};

export default Opportunities;
