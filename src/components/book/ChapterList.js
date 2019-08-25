import React from "react";
import { book as ilmihal } from "../../newSource";
import { Link } from "react-router-dom";
import slugify from "../slugify";
import { ListGroup } from "react-bootstrap";

class ChapterList extends React.Component {
  renderChapterTitle = book => {
    return book.map(item => {
      const { id, chapterTitle } = item;

      return (
        <li
          key={id}
          className="chapterTitle text-center"
          style={{
            listStyleType: "none",
            lineHeight: "35px",
            fontSize: 19,
            fontWeight: "bold"
          }}
        >
          <Link to={`/ilmihal/${slugify(chapterTitle)}`}>{chapterTitle}</Link>
        </li>
      );
    });
  };

  render() {
    return (
      <ListGroup className="chapters" variant="flush">
        <div
          style={{
            background: "rgba( 255, 255, 255, 0.3)",
            padding: "15px 0 10px 0",
            margin: "10px 0 15px 0",
            borderRadius: 25
          }}
        >
          <h3
            className="bookTitle text-center"
            style={{
              fontWeight: 700
            }}
          >
            BÜYÜK İSLAM İLMİHALİ
          </h3>
          <h5 className="bookTitle text-center" style={{}}>
            ÖMER NASUHİ BİLMEN
          </h5>
        </div>
        <li
          className="chapterTitle text-center"
          style={{
            listStyleType: "none",
            lineHeight: "35px",
            fontSize: 24,
            fontWeight: "900",
            marginBottom: 10
          }}
        >
          İÇİNDEKİLER
        </li>
        {this.renderChapterTitle(ilmihal)}
      </ListGroup>
    );
  }
}

export default ChapterList;
