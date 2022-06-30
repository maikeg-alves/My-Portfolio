import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import { buildStyles } from "react-circular-progressbar";

export const StyledCustomCircle = styled(CircularProgressbar)`
  width: 50%;
  height: 50%;
  background-size: fit;
  background-repeat: no-repeat;
  text-align: center;
  .CircularProgressbar-text {
    transform: translate(-9px, 5px);
  }
`;

export default function CircleProgress({ value }) {
  return (
    <>
      <StyledCustomCircle
        value={value}
        text={+value + "%"}
        strokeWidth={5}
        styles={buildStyles({
          textSize: "15px",
          pathTransitionDuration: 0.5,
          pathColor: "black",
          textColor: "black",
          trailColor: "#d6d6d6",
          backgroundColor: "black",
        })}
      />
    </>
  );
}
