import { FC } from 'react';
import { Link } from 'react-router-dom';

import { socialData } from './social.data';
import Social from './Social';

const Footer: FC = () => {
  return (
    <footer className="Footer">
      <p className="logo">
        <Link to="/">ITSB</Link>
      </p>
      <Social links={socialData.links.map((link, _) => link)} />
      <p className="copyright">Copyright &copy; {new Date().getFullYear()} All rights reserved</p>
    </footer>
  );
};

export default Footer;
