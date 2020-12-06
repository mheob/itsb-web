import React, { useState } from "react";

export enum LinkType {
  EMAIL,
  PHONE,
}

interface HeaderProps {
  cc?: string;
  bcc?: string;
  subject?: string;
  body?: string;
  [index: string]: string | undefined;
}

interface ContactLinkProps {
  type: LinkType;
  href: string;
  title: string;
  header?: HeaderProps;
  style?: React.CSSProperties;
}

const ContactLink: React.FC<ContactLinkProps> = (props) => {
  const [humanInteractionState, setHumanInteractionState] = useState(false);

  const handleCopiability = () => {
    setHumanInteractionState(true);
  };

  const createContactLink = (props: ContactLinkProps) => {
    const combinedHeader =
      props.header &&
      Object.keys(props.header)
        .map((key) => `${key}=${encodeURIComponent(props.header![key]!)}`)
        .join("&");

    return props.type === LinkType.EMAIL
      ? "mailto:" + (props.header ? `${props.href}?${combinedHeader}` : props.href)
      : "tel:" + props.href;
  };

  const reverse = (stringToReverse: string) => {
    return stringToReverse.split("").reverse().join("").replace("(", ")").replace(")", "(");
  };

  const directionStyle: React.CSSProperties = {
    ...(props.style || {}),
    unicodeBidi: "bidi-override",
    direction: humanInteractionState ? "ltr" : "rtl",
  };

  const renderProps = {
    onFocus: handleCopiability,
    onMouseOver: handleCopiability,
    onContextMenu: handleCopiability,
    href: humanInteractionState === true ? createContactLink(props) : "obfuscated",
    title: props.title,
    style: directionStyle,
  };

  return <a {...renderProps}>{humanInteractionState ? props.href : reverse(props.href)}</a>;
};

export default ContactLink;
