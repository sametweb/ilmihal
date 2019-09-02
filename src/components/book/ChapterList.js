import React from "react";
import { book as ilmihal } from "../../newSource";
import { Link } from "react-router-dom";
import slugify from "../../slugify";
import { ListGroup } from "react-bootstrap";
import MainpageHeader from "./MainpageHeader";

class ChapterList extends React.Component {
  componentDidMount() {
    document.title = "Büyük İslam İlmihali - Ömer Nasuhi Bilmen (ilmihal oku)";
  }
  renderChapterTitle = book => {
    return book.map(item => {
      const { id, chapterTitle } = item;
      return (
        <li key={id} style={styles.chapterTitle}>
          <Link to={`/${slugify(chapterTitle)}`}>{chapterTitle}</Link>
        </li>
      );
    });
  };

  render() {
    return (
      <ListGroup variant="flush" style={{ height: "100%" }}>
        <MainpageHeader />
        <li style={styles.chapterIndex}>İÇİNDEKİLER</li>
        {this.renderChapterTitle(ilmihal)}
      </ListGroup>
    );
  }
}

const styles = {
  chapterIndex: {
    listStyleType: "none",
    lineHeight: "35px",
    fontSize: 24,
    fontWeight: "900",
    marginBottom: 10,
    textAlign: "center"
  },
  chapterTitle: {
    listStyleType: "none",
    lineHeight: "35px",
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center"
  }
};

export default ChapterList;
