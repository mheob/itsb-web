import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SocialModel } from "./social.model";

const Social: React.FC<SocialModel> = links => {
  return (
    <ul className="social">
      {links.links.map((links, index) => {
        return (
          <li key={index}>
            <a href={links.href} title={links.title}>
              <FontAwesomeIcon icon={links.icon} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Social;
