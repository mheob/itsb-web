import React from "react";
import { NavLink } from "react-router-dom";

type navLinkProps = {
  to: string;
  hash?: string;
  exact?: boolean;
  fromHomePage?: boolean;
};

const NavigationLink: React.FC<navLinkProps> = props => {
  const toProp = props.hash ? { pathname: props.to, hash: props.hash } : props.to;
  console.log(toProp);

  return (
    <li>
      <NavLink to={toProp} exact={props.exact}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationLink;
