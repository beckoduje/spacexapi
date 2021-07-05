import React from "react";
// import { getDragonsData } from "../../API.js";

export default function DragonDescriptionCard() {
  // const [dragonsInfo, setDragonsInfo] = useState();

  // useEffect(() => {
  //   getDragonsData("").then(function (value) {
  //     setDragonsInfo(value);
  //   });
  // }, []);

  return (
    <div className="dragon-description-container">
      <div className="dragon-description-text-container">
        <p className="dragon-description-text">
          The Dragon spacecraft is capable of carrying up to 7 passengers to and
          from Earth orbit, and beyond. It is the only spacecraft currently
          flying that is capable of returning significant amounts of cargo to
          Earth, and is the first private spacecraft to take humans to the space
          station.
        </p>
      </div>
      <div className="white-box"></div>
    </div>
  );
}
