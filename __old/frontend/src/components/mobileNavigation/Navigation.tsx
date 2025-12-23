import { FC } from 'react';

import { toggleBodyClassHandler } from '../../utils/domHandler';

const Navigation: FC = () => {
  return (
    <div className="nav-toggle" onClick={toggleBodyClassHandler.bind(null, 'offcanvas')}>
      <i />
    </div>
  );
};

export default Navigation;
