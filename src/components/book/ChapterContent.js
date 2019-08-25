import React from "react";
import { book as ilmihal } from "../../newSource";
import slugify from "../slugify";
import SectionList from "./SectionList";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class ChapterContent extends React.Component {
  renderBackButtonUrl = () => {
    let url = this.props.match.url;
    let backButtonUrl = "";
    if (url.charAt(url.length - 1) === "/") {
      backButtonUrl = url.slice(0, url.lastIndexOf("/"));
      backButtonUrl = backButtonUrl.slice(0, backButtonUrl.lastIndexOf("/"));
    } else {
      backButtonUrl = url.slice(0, url.lastIndexOf("/"));
    }
    return backButtonUrl;
  };

  renderChapterContent = book => {
    const { slug } = this.props.match.params;

    return book
      .filter(item => slugify(item.chapterTitle) === slug)
      .map(item => {
        return (
          <div key={item.id} className="chapterContent">
            <h3
              className="bookTitle text-center"
              style={{ marginBottom: 20, marginTop: 20, fontWeight: "900" }}
            >
              {item.chapterTitle}
            </h3>
            <div className="text-center">
              <Link
                to={this.renderBackButtonUrl()}
                className="btn btn-warning btn-sm"
                style={{ marginBottom: 20 }}
              >{`< Geri`}</Link>
            </div>
            <div>
              <SectionList
                chapterContent={item.chapterContent}
                url={this.props.match.params.slug}
              />
            </div>
            <div className="text-center">
              <Link
                to={this.renderBackButtonUrl()}
                className="btn btn-warning btn-sm"
                style={{ marginBottom: 20 }}
              >{`< Geri`}</Link>
            </div>
          </div>
        );
      });
  };

  render() {
    return this.renderChapterContent(ilmihal);
  }
}

export default ChapterContent;
