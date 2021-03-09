import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const MetaDecorator = ({
  title,
  description,
  author,
  img,
  twitterUsername,
  url,
}) => {
  const base = process.env.REACT_APP_BASE_URL;
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title}`}>
      {/* /* General tags */}
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="image" content={img} />
      {/* /* OpenGraph tags */}
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={base + img} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={url} />
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={base + img} />
    </Helmet>
  );
};

MetaDecorator.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default MetaDecorator;
