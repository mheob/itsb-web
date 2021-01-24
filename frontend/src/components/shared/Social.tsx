import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SocialModel } from './social.model';

const Social: FC<SocialModel> = (links) => {
  return (
    <ul className="social">
      {links.links.map((links, index) => {
        return (
          <li key={index}>
            <a href={links.href} title={links.title} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={links.icon} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Social;
