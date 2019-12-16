import React from "react";
import ReactDOM from "react-dom";

type BackdropProps = {
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const Backdrop: React.FC<BackdropProps> = props => {
  return ReactDOM.createPortal(
    <div className="Backdrop" onClick={props.onClick}></div>,
    document.getElementById("backdrop")!
  );
};

export default Backdrop;
