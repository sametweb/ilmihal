import React from "react";
import { Link } from "react-router-dom";
import slugify from "../../slugify";

class SectionList extends React.Component {
  renderSectionList = chapterContent => {
    return chapterContent.map((item, index) => {
      return (
        <li key={index} className="section-list-item">
          <Link to={`/${this.props.url}/${slugify(item.sectionTitle)}`}>
            {item.sectionTitle}
          </Link>
        </li>
      );
    });
  };

  render() {
    return (
      <ul className="section-list">
        {this.renderSectionList(this.props.chapterContent)}
      </ul>
    );
  }
}

export default SectionList;
