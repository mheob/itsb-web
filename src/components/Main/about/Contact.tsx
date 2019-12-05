import React from "react";

import { age } from "../../../utils/calculations";

const contactData = [
  { title: "Name", content: "Alexander Böhm" },
  { title: "Alter", content: age(new Date(1982, 9, 21)).toString() },
  {
    title: "E-Mail",
    content: (
      <a href="mailto:ab@its-boehm.de" title="Schreib mir per E-Mail">
        ab@its-boehm.de
      </a>
    )
  },
  {
    title: "Telefon",
    content: (
      <a href="tel:+491608206654" title="Ruf mich einfach an">
        +49 160 8206654
      </a>
    )
  },
  { title: "Job", content: "Freelancer" },
  { title: "Standort", content: "Neuwied, RLP" }
];

const Contact: React.FC = () => {
  return (
    <section className="contact">
      {contactData.map((element, i) => {
        return (
          <div key={i} className="info">
            <span>{element.title}:</span>
            <span>{element.content}</span>
          </div>
        );
      })}
    </section>
  );
};

export default Contact;
