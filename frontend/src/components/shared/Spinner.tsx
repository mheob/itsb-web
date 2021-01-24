import { FC } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

const Spinner: FC<{ preload: boolean }> = (props) => {
  const content = (
    <CSSTransition in={props.preload} timeout={800}>
      <div className="Spinner">
        <div className="Spinner__inner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </CSSTransition>
  );
  return ReactDOM.createPortal(content, document.getElementById('spinner')!);
};

export default Spinner;
