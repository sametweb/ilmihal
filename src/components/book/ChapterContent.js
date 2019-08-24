import React from "react";
import { book as ilmihal } from "../../newSource";
import slugify from "../slugify";
import SectionList from "./SectionList";
import { Link } from "react-router-dom";

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
            <Link
              to={this.renderBackButtonUrl()}
              style={{ fontSize: "smaller" }}
            >{`< Geri`}</Link>
            <h2>{item.chapterTitle}</h2>
            <div>
              <SectionList
                chapterContent={item.chapterContent}
                url={this.props.match.params.slug}
              />
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
