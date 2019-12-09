import React from "react";

import { serviceData } from "../services/services.data";
import Service from "../services/Service";
import GoNext from "../../shared/GoNext";
import SectionHeader from "../../shared/SectionHeader";

const Services: React.FC = () => {
  return (
    <section className="Services" id="services">
      <SectionHeader mainText="Einige meine Angebote" smallText="Was mach ich?" bgText="Angebot" />
      <section className="content">
        {serviceData.map(({ icon, header, text, num }, index) => {
          const elNum = num ? num : `0${index + 1}`;
          return <Service key={index} icon={icon} header={header} text={text} num={elNum} />;
        })}
      </section>
      <GoNext anchor="contact" text="Kontakt" />
    </section>
  );
};

export default Services;
