import React from "react";
import { Link } from "react-router-dom";
import slugify from "../../slugify";

class SectionList extends React.Component {
  renderSectionList = chapterContent => {
    return chapterContent.map((item, index) => {
      return (
        <li key={index} style={styles.sectionTitle}>
          <Link to={`/${this.props.url}/${slugify(item.sectionTitle)}`}>
            {item.sectionTitle}
          </Link>
        </li>
      );
    });
  };

  render() {
    return (
      <ul style={{ listStylePosition: "outside" }}>
        {this.renderSectionList(this.props.chapterContent)}
      </ul>
    );
  }
}

const styles = {
  sectionTitle: {
    listStyleType: "decimal",
    fontSize: 17,
    lineHeight: 1.3,
    fontWeight: "bold",
    marginBottom: 10
  }
};
export default SectionList;
