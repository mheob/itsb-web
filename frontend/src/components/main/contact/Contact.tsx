import React from "react";

import { serviceData } from "./contact.data";
import ContactDetail from "./ContactDetail";
import ContactForm from "./ContactForm";
import SectionHeader from "../../shared/SectionHeader";

const Contact: React.FC = () => {
  return (
    <section className="Contact" id="contact">
      <SectionHeader mainText="Stelle Fragen. Erhalte Antworten." smallText="Kontaktaufnahme" bgText="Kontakt" />
      <section className="details">
        {serviceData.map((detail, index) => {
          return (
            <ContactDetail
              key={index}
              icon={detail.icon}
              header={detail.header}
              text={detail.text}
              anchor={detail.anchor}
            />
          );
        })}
      </section>

      <ContactForm />
    </section>
  );
};

export default Contact;
