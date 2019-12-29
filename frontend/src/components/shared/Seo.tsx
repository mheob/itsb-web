import React from "react";
import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  url: string;
  noIndex?: boolean;
  og: {
    title?: string;
    image?: string;
    url?: string;
    type: "website" | "article";
    article?: {
      publishedTime?: Date;
      modifiedTime?: Date;
      expirationTime?: Date;
      author?: string;
      section?: string;
      tag?: string;
    };
  };
  twitter?: {
    site?: string;
    creator?: string;
  };
}

const Seo: React.FC<SeoProps> = props => {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" property="og:description" content={props.description} />
      <link rel="canonical" href={props.url} />
      {props.noIndex && <meta property="robots" content="noindex" />}
      <meta property="og:title" content={props.og.title || props.title} />
      <meta property="og:type" content={props.og.type} />
      <meta property="og:image" content={props.og.image} />
      <meta property="og:url" content={props.og.url || props.url} />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:site_name" content="IT Service Böhm" />
      {props.og.type === "article" && (
        <>
          {props.og.article?.publishedTime && (
            <meta property="article:published_time" content={props.og.article.publishedTime.toISOString()} />
          )}
          {props.og.article?.modifiedTime && (
            <meta property="article:modified_time" content={props.og.article.modifiedTime.toISOString()} />
          )}
          {props.og.article?.expirationTime && (
            <meta property="article:expiration_time" content={props.og.article.expirationTime.toISOString()} />
          )}
          {props.og.article?.author && <meta property="article:author" content={props.og.article.author} />}
          {props.og.article?.section && <meta property="article:section" content={props.og.article.section} />}
          {props.og.article?.tag && <meta property="article:tag" content={props.og.article.tag} />}
        </>
      )}
      <meta property="fb:app_id" content="499434667596038" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={props.og.title || props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content={props.og.image} />
      <meta name="twitter:site" content={props.twitter?.site || "@itsboehm"} />
      <meta name="twitter:creator" content={props.twitter?.creator || "@itsboehm"} />
    </Helmet>
  );
};

export default Seo;
