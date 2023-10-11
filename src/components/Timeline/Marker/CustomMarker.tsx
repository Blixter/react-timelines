import createTime from "../../../utils/time";
import Marker from "./Marker";

interface Props {
  time: ReturnType<typeof createTime>;
  date: Date;
  visible?: boolean;
  highlighted?: boolean;
  customText1: string;
  customText2: string;
  displayLabel: boolean;
}

export default function CustomMarker(props: Props): JSX.Element {
  const { time, date, visible, customText1, customText2, displayLabel } = props;
  return (
    <Marker
      modifier="custom"
      x={time.toX(date)}
      visible={visible}
      displayLabel={displayLabel}
    >
      <div>
        <div>{customText1}</div>
        <strong>{customText2}</strong>
      </div>
    </Marker>
  );
}
