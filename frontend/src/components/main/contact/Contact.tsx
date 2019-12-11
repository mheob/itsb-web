import React from "react";

import { serviceData } from "../contact/contact.data";
import ContactDetail from "../contact/ContactDetail";
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
      {
        // TODO: Add a frontend form validation. See issue #3.
        // TODO: Add the form action. See issue #4.
      }
      <form>
        <input type="text" name="name" id="name" placeholder="Name" />
        <input type="email" name="email" id="email" placeholder="E-Mail" />
        <input type="tel" name="tel" id="tel" placeholder="Telefon" />
        <textarea name="message" id="message" placeholder="Nachricht"></textarea>
        <input className="btn btn-primary-outline" type="submit" value="In Kontakt treten" />
      </form>
    </section>
  );
};

export default Contact;
