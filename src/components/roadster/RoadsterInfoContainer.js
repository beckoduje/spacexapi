import React, { useState, useEffect } from "react";
import RoadsterInfoCardOne from "./RoadsterInfoCardOne";
import RoadsterInfoCardTwo from "./RoadsterInfoCardTwo";
import { getRoadsterData } from "../../API";

export default function RoadsterInfoContainer() {
  const [roadsterInfo, setRoadsterInfo] = useState();
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    getRoadsterData("").then(function (value) {
      setRoadsterInfo(value);
    });
  }, []);

  return (
    <div className="roadster-info-container">
      <div className="roadster-info-container-shader">
        <p>
          Elon Musk's Tesla Roadster is an electric sports car that served as
          the dummy payload for the February 2018 Falcon Heavy test flight and
          is now an artificial satellite of the Sun. Starman, a mannequin
          dressed in a spacesuit, occupies the driver's seat. The car and rocket
          are products of Tesla and SpaceX. This 2008-model Roadster was
          previously used by Musk for commuting, and is the only consumer car
          sent into space.
        </p>
        <div className="roadster-info-cards-container">
          <RoadsterInfoCardOne shrink={shrink} roadsterInfo={roadsterInfo} />
          <RoadsterInfoCardTwo
            setShrink={setShrink}
            roadsterInfo={roadsterInfo}
          />
        </div>
      </div>
    </div>
  );
}
