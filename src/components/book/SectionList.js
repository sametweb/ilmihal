import React from "react";
import { Link } from "react-router-dom";
import slugify from "../slugify";

class SectionList extends React.Component {
  renderSectionList = chapterContent => {
    return chapterContent.map((item, index) => {
      return (
        <li
          key={index}
          className="sectionTitle"
          style={{
            listStyleType: "decimal",
            fontSize: 17,
            lineHeight: 1.3,
            fontWeight: "bold",
            marginBottom: 10
          }}
        >
          <Link to={`/${this.props.url}/${slugify(item.sectionTitle)}`}>
            {item.sectionTitle}
          </Link>
        </li>
      );
    });
  };

  render() {
    return (
      <ul className="sectionTitleList" style={{ listStylePosition: "outside" }}>
        {this.renderSectionList(this.props.chapterContent)}
      </ul>
    );
  }
}

export default SectionList;
