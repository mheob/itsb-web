import { CSSProperties, FC, useState } from 'react';

export type LinkType = 'email' | 'phone';

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
  style?: CSSProperties;
}

const ContactLink: FC<ContactLinkProps> = (props) => {
  const [humanInteractionState, setHumanInteractionState] = useState(false);

  const handleCopiability = () => {
    setHumanInteractionState(true);
  };

  const createContactLink = (props: ContactLinkProps) => {
    const combinedHeader =
      props.header &&
      Object.keys(props.header)
        .map((key) => `${key}=${encodeURIComponent(props.header![key]!)}`)
        .join('&');

    let link = 'mailto:' + (props.header ? `${props.href}?${combinedHeader}` : props.href);
    if (props.type === 'phone') link = 'tel:' + props.href;

    return link;
  };

  const reverse = (stringToReverse: string) => {
    return stringToReverse.split('').reverse().join('').replace('(', ')').replace(')', '(');
  };

  const directionStyle: CSSProperties = {
    ...(props.style || {}),
    unicodeBidi: 'bidi-override',
    direction: humanInteractionState ? 'ltr' : 'rtl',
  };

  const renderProps = {
    onFocus: handleCopiability,
    onMouseOver: handleCopiability,
    onContextMenu: handleCopiability,
    href: humanInteractionState === true ? createContactLink(props) : 'obfuscated',
    title: props.title,
    style: directionStyle,
  };

  return <a {...renderProps}>{humanInteractionState ? props.href : reverse(props.href)}</a>;
};

export default ContactLink;
