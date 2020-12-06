import React, { CSSProperties } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Backdrop from "../shared/Backdrop";

interface ModalOverlayProps {
  className?: string;
  style?: CSSProperties;
  headerClass?: string;
  header?: string;
  contentClass?: string;
}

interface ModalProps extends ModalOverlayProps {
  show: boolean;
  onCancel: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const ModalOverlay: React.FC<ModalOverlayProps> = (props) => {
  const content = (
    <div className={`Modal ${props.className}`} style={props.style}>
      <header className={`Modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <div className={`Modal__content ${props.contentClass}`}>{props.children}</div>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal")!);
};

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition in={props.show} mountOnEnter unmountOnExit timeout={300} classNames="Modal">
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

export default Modal;
