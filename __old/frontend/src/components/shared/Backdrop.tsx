import { FC, MouseEvent } from 'react';
import ReactDOM from 'react-dom';

type BackdropProps = {
  onClick: (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void;
};

const Backdrop: FC<BackdropProps> = (props) => {
  return ReactDOM.createPortal(
    <div className="Backdrop" onClick={props.onClick}></div>,
    document.getElementById('backdrop')!
  );
};

export default Backdrop;
