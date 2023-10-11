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
        <CustomMarker
          key={x.id}
          date={x.start}
          time={time}
          customText={x.title}
          visible
          displayLabel={true}
        />
      ))}
    </div>
  );
};

export default CustomMarkers;