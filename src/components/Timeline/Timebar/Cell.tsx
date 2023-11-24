import { CSSProperties } from "react";
import createTime from "../../../utils/time";

interface Props {
  end: Date;
  start: Date;
  time: ReturnType<typeof createTime>;
  title: string;
  titleStyle?: CSSProperties;
  subTitle?: string;
  subTitleStyle?: CSSProperties;
}

export default function Cell(props: Props): JSX.Element {
  const { time, title, start, end, titleStyle, subTitle, subTitleStyle } =
    props;
  return (
    <div
      className="rt-timebar__cell"
      style={time.toStyleLeftAndWidth(start, end)}
    >
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={titleStyle}>{title}</div>
        {subTitle && <div style={subTitleStyle}>{subTitle}</div>}
      </div>
    </div>
  );
}
