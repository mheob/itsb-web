import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ServiceModel } from './service.model';

const Service: FC<ServiceModel> = ({ icon, header, text, num }) => {
  return (
    <div className="Service">
      <div className="icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="num">{num}</div>
      <div className="text">
        <h3>{header}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Service;
