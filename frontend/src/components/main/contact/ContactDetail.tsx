import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ContactModel } from './contact.model';
import ContactLink from '../../shared/ContactLink';

const ContactDetail: FC<ContactModel> = (detail) => {
  return (
    <div className="contact-detail">
      <div className="icon">
        <FontAwesomeIcon icon={detail.icon} />
      </div>
      <div className="content">
        <h4>{detail.header}</h4>
        <p>{detail.text}</p>
        {detail.anchor.type !== undefined ? (
          <ContactLink type={detail.anchor.type} href={detail.anchor.href} title={detail.anchor.title} />
        ) : (
          <a
            href={detail.anchor.href}
            title={detail.anchor.title}
            target={detail.anchor.target ?? ''}
            rel={detail.anchor.rel ?? ''}
          >
            {detail.anchor.text}
          </a>
        )}
      </div>
    </div>
  );
};

export default ContactDetail;
