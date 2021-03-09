import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const MetaDecorator = ({ title, description, author, img, url }) => {
  const base = process.env.REACT_APP_BASE_URL;
  return (
    <Helmet>
      {/* /* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      {/* /* OpenGraph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={base + img} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      {/* Twitter Card tags */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={base + img} />
      <meta name="twitter:card" content="summary_large_image" />
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
