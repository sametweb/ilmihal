import React from "react";
import { Link } from "react-router-dom";
import slugify from "../../slugify";

const SectionList = props => {
  return (
    <ul className="section-list">
      {props.chapterContent.map((item, index) => (
        <li key={index} className="section-list-item">
          <Link to={`/${props.url}/${slugify(item.sectionTitle)}`}>
            {item.sectionTitle}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SectionList;
