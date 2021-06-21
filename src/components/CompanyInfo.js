import React from "react";
import Leaders from "./Leaders";
import CompanyStats from "./CompanyStats";

export default function CompanyInfo() {
  return (
    <section className="section company-info">
      <div className="section-shader">
        <Leaders />
        <CompanyStats />
      </div>
    </section>
  );
}
