import React from "react";
import { book as ilmihal } from "../../newSource";
import { Link } from "react-router-dom";
import slugify from "../slugify";

class ChapterList extends React.Component {
  renderChapterTitle = book => {
    return book.map(item => {
      const { id, chapterTitle } = item;

      return (
        <div key={id} className="chapterTitle">
          <Link to={`/ilmihal/${slugify(chapterTitle)}`}>{chapterTitle}</Link>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="chapters">
        <h2 className="bookTitle">Büyük İslam İlmihali - Ömer Nasuhi Bilmen</h2>
        {this.renderChapterTitle(ilmihal)}
      </div>
    );
  }
}

export default ChapterList;
