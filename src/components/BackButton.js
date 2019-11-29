import React from "react";
import { Link } from "react-router-dom";

const BackButton = props => {
  const { url } = props;

  let backButtonUrl = "";

  if (url.charAt(url.length - 1) === "/") {
    backButtonUrl = url.slice(0, url.lastIndexOf("/"));
    backButtonUrl = backButtonUrl.slice(0, backButtonUrl.lastIndexOf("/"));
  } else {
    backButtonUrl = url.slice(0, url.lastIndexOf("/"));
  }

  return <Link to={backButtonUrl} className="back-button">{`< Geri`}</Link>;
};

export default BackButton;
