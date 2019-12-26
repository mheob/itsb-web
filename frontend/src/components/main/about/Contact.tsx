import React from "react";

import { contactData } from "./contact.data";
import ContactLink from "../../shared/ContactLink";

const Contact: React.FC = () => {
  return (
    <section className="contact">
      {contactData.map(({ definition, content }, index) => {
        return (
          <div key={index} className="info">
            <span>{definition}:</span>
            <span>
              {typeof content === "string" ? (
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
