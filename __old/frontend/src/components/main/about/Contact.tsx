import { FC } from 'react';
import ContactLink from '../../shared/ContactLink';
import { contactData } from './contact.data';

const Contact: FC = () => {
  return (
    <section className="contact">
      {contactData.map(({ definition, content }, index) => {
        return (
          <div key={index} className="info">
            <span>{definition}:</span>
            <span>
              {typeof content === 'string' ? (
                content
              ) : (
                <ContactLink type={content.type} href={content.href} title={content.title} />
              )}
            </span>
          </div>
        );
      })}
    </section>
  );
};

export default Contact;
