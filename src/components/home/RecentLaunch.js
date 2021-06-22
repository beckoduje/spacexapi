import React from "react";

export default function RecentLaunch() {
  return (
    <section className="section recent-launch">
      <div className="section-shader">
        <div className="section-info-container">
          <div className="section-info recent-launch">
            <h2>RECENT LAUNCH</h2>
            <p>
              This mission launches the 28th batch of operational Starlink
              satellites, which were version 1.0, from SLC-40. It was the 29th
              Starlink launch overall. The satellites plan to be delivered to
              low Earth orbit and will spend a few weeks maneuvering to their
              operational altitude. The booster is expected to land on ASDS
              JRTI.
            </p>
            <button type="text">READ MORE</button>
          </div>
          <div className="white-box recent-launch"></div>
        </div>
      </div>
    </section>
  );
}
