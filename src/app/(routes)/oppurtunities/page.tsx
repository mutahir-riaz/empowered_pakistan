import OppurtunitiesFeatured from "@/components/mainUI/OppurtunitiesFeatured";
import OppurtunitiesHero from "@/components/mainUI/OppurtunitiesHero";
import PageHeader from "@/components/mainUI/PageHeader";
import React from "react";

const Oppurtunities = () => {
  return (
    <main>
      <PageHeader heading="Oppurtunities" title="oppurtunities" />
      <OppurtunitiesHero />
      <OppurtunitiesFeatured />
    </main>
  );
};

export default Oppurtunities;
