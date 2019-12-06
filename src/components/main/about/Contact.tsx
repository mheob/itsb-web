import React from "react";

import { contactData } from "./contact.data";

const Contact: React.FC = () => {
  return (
    <section className="contact">
      {contactData.map(({ title, content }, index) => {
        return (
          <div key={index} className="info">
            <span>{title}:</span>
            <span>
              {typeof content === "string" ? (
                content
              ) : (
                <a href={content.href} title={content.title}>
                  {content.text}
                </a>
              )}
            </span>
          </div>
        );
      })}
    </section>
  );
};

export default Contact;
