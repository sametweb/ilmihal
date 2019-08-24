import React from "react";
import { Link } from "react-router-dom";
import slugify from "../slugify";

class SectionList extends React.Component {
  renderSectionList = chapterContent => {
    return chapterContent.map((item, index) => {
      return (
        <li key={index} className="sectionTitle">
          <span style={{ fontWeight: "lighter" }}>
            <Link
              to={`/ilmihal/${this.props.url}/${slugify(item.sectionTitle)}`}
            >
              {item.sectionTitle}
            </Link>
          </span>
        </li>
      );
    });
  };

  render() {
    return (
      <ul className="sectionTitleList">
        {this.renderSectionList(this.props.chapterContent)}
      </ul>
    );
  }
}

export default SectionList;
