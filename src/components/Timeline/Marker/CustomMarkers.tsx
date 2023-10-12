import React from "react";
import { Cell } from "@src/types";
import createTime from "../../../utils/time";
import CustomMarker from "./CustomMarker";

const CustomMarkers: React.FC<{
  markerCells: Cell[];
  time: ReturnType<typeof createTime>;
}> = ({ markerCells, time }) => {
  return (
    <div>
      {markerCells.map((x) => (
        <React.Fragment key={x.id}>
          <CustomMarker
            date={x.start}
            time={time}
            customText1={"Start"}
            customText2={x.title}
            visible
            displayLabel={x.displayMarkerLabel ?? false}
          />
          <CustomMarker
            date={x.end}
            time={time}
            customText1={"End"}
            customText2={x.title}
            visible
            displayLabel={x.displayMarkerLabel ?? false}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default CustomMarkers;
