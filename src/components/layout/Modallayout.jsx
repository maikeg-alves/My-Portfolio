import { AiOutlineClose } from "react-icons/ai";
import { BoxStyledall } from "../themes/styles/stylesAll";

export default function Modallayout(props) {
    const styles = {
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        padding: "10px"
      }
  return (
    <>
      <BoxStyledall className={props.className}>
        <div style={styles}>
          <AiOutlineClose onClick={props.onClick}/>
        </div>
        <>
            {props.children}
        </>
      </BoxStyledall>
    </>
  );
}
