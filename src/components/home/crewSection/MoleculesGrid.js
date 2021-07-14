import React, { useState, useEffect } from "react";
import { getCrewData } from "../../../API.js";

export default function MoleculesGrid() {
  const [crewInfo, setCrewInfo] = useState();

  useEffect(() => {
    getCrewData("").then(function (value) {
      setCrewInfo(value);
    });
  }, []);

  return (
    <div className="cont">
      <div className="row-cont">
        <div className="molekula">
          <div className="member-img mi-1" />
          <div className="member-name">{crewInfo ? crewInfo[0].name : ""}</div>
        </div>
        <div className="molekula middle">
          <div className="member-img mi-2" />
          <div className="member-name">{crewInfo ? crewInfo[1].name : ""}</div>
        </div>
        <div className="molekula">
          <div className="member-img mi-3" />
          <div className="member-name">{crewInfo ? crewInfo[2].name : ""}</div>
        </div>
      </div>

      <div className="row-cont">
        <div className="molekula hidden-molecule">
          <div className="member-img" />
          <div className="member-name"></div>
        </div>
        <div className="molekula middle">
          <div className="member-img mi-4" />
          <div className="member-name">{crewInfo ? crewInfo[3].name : ""}</div>
        </div>
        <div className="molekula">
          <div className="member-img mi-5" />
          <div className="member-name">{crewInfo ? crewInfo[4].name : ""}</div>
        </div>
      </div>

      <div className="row-cont">
        <div className="molekula">
          <div className="member-img mi-6" />
          <div className="member-name">{crewInfo ? crewInfo[5].name : ""}</div>
        </div>
        <div className="molekula middle">
          <div className="member-img mi-7" />
          <div className="member-name">{crewInfo ? crewInfo[6].name : ""}</div>
        </div>
        <div className="molekula">
          <div className="member-img mi-8" />
          <div className="member-name">{crewInfo ? crewInfo[7].name : ""}</div>
        </div>
      </div>

      <div className="row-cont">
        <div className="molekula">
          <div className="member-img mi-9" />
          <div className="member-name">{crewInfo ? crewInfo[8].name : ""}</div>
        </div>
        <div className="molekula middle">
          <div className="member-img mi-10" />
          <div className="member-name">{crewInfo ? crewInfo[9].name : ""}</div>
        </div>
        <div className="molekula hidden-molecule">
          <div className="member-img" />
          <div className="member-name"></div>
        </div>
      </div>

      <div className="row-cont">
        <div className="molekula">
          <div className="member-img mi-11" />
          <div className="member-name">{crewInfo ? crewInfo[10].name : ""}</div>
        </div>
        <div className="molekula middle">
          <div className="member-img mi-12" />
          <div className="member-name">{crewInfo ? crewInfo[11].name : ""}</div>
        </div>
        <div className="molekula hidden-molecule">
          <div className="member-img" />
          <div className="member-name"></div>
        </div>
      </div>

      <div className="row-cont">
        <div className="molekula hidden-molecule">
          <div className="member-img" />
          <div className="member-name"></div>
        </div>
        <div className="molekula middle">
          <div className="member-img mi-13" />
          <div className="member-name">{crewInfo ? crewInfo[12].name : ""}</div>
        </div>
        <div className="molekula">
          <div className="member-img mi-14" />
          <div className="member-name">{crewInfo ? crewInfo[13].name : ""}</div>
        </div>
      </div>

      <div className="row-cont">
        <div className="molekula">
          <div className="member-img mi-18" />
          <div className="member-name">{crewInfo ? crewInfo[17].name : ""}</div>
        </div>
        <div className="molekula middle">
          <div className="member-img mi-15" />
          <div className="member-name">{crewInfo ? crewInfo[14].name : ""}</div>
        </div>
        <div className="molekula">
          <div className="member-img mi-16" />
          <div className="member-name">{crewInfo ? crewInfo[15].name : ""}</div>
        </div>
      </div>

      <div className="row-cont">
        <div className="molekula hidden-molecule">
          <div className="member-img" />
          <div className="member-name"></div>
        </div>
        <div className="molekula middle">
          <div className="member-img mi-17" />
          <div className="member-name">{crewInfo ? crewInfo[16].name : ""}</div>
        </div>
        <div className="molekula hidden-molecule">
          <div className="member-img" />
          <div className="member-name"></div>
        </div>
      </div>
    </div>
  );
}
