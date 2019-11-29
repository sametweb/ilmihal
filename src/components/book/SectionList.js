import React from "react";
import { Link } from "react-router-dom";
import slugify from "../../slugify";

const SectionList = props => {
  console.log(props);
  return props.chapterContent.map((item, index) => {
    return (
      <li key={index} className="section-list-item">
        <Link to={`/${props.url}/${slugify(item.sectionTitle)}`}>
          {item.sectionTitle}
        </Link>
      </li>
    );
  });
};

export default SectionList;
