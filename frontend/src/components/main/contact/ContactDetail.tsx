import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ContactModel } from "./contact.model";

const ContactDetail: React.FC<ContactModel> = detail => {
  return (
    <div className="contact-detail">
      <div className="icon">
        <FontAwesomeIcon icon={detail.icon} />
      </div>
      <div className="content">
        <h4>{detail.header}</h4>
        <p>{detail.text}</p>
        <a href={detail.anchor.href} title={detail.anchor.title}>
          {detail.anchor.text}
        </a>
      </div>
    </div>
  );
};

export default ContactDetail;
