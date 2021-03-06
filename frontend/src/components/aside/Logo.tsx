import { FC } from 'react';
import { Link } from 'react-router-dom';

import { removeBodyClassHandler } from '../../utils/domHandler';

const Logo: FC = () => {
  const clickHandler = () => {
    removeBodyClassHandler('offcanvas');
  };

  return (
    <h1 className="logo">
      <Link to="/" onClick={clickHandler}>
        ITSB
      </Link>
    </h1>
  );
};

export default Logo;
