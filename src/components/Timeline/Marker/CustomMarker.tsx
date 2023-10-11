import createTime from "../../../utils/time";
import { getDayMonth } from "../../../utils/formatDate";
import Marker from "./Marker";

interface Props {
  time: ReturnType<typeof createTime>;
  date: Date;
  visible?: boolean;
  highlighted?: boolean;
  customText: string;
  displayLabel: boolean
}

export default function CustomMarker(props: Props): JSX.Element {
  const { time, date, visible, customText, displayLabel } = props;
  return (
    <Marker
      modifier="custom"
      x={time.toX(date)}
      visible={visible}
      displayLabel={displayLabel}
    >
      <div>
        <div>
          <strong>{customText ?? getDayMonth(date)}</strong>
        </div>
      </div>
    </Marker>
  );
}
