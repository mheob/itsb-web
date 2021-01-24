import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ScrollTopButton: FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <Link className={`ScrollTopButton${isVisible ? ' visible' : ''}`} to="#root">
      <FontAwesomeIcon icon={faChevronUp} />
      <span style={{ display: 'none' }}>Arrow Top</span>
    </Link>
  );
};

export default ScrollTopButton;
