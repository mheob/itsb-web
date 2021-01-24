import { FC } from 'react';

import { socialData } from '../shared/social.data';
import Social from '../shared/Social';

const Header: FC = () => {
  return (
    <footer className="footer">
      <Social links={socialData.links.map((link, _) => link)} />
    </footer>
  );
};

export default Header;
