import React from "react";
import { book as ilmihal } from "../../newSource";
import slugify from "../slugify";
import { Link } from "react-router-dom";

class SectionContent extends React.Component {
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

  renderSectionContent = () => {
    let wordCount = null;
    return ilmihal
      .filter(
        item => slugify(item.chapterTitle) === this.props.match.params.slug
      )
      .map(item => {
        return item.chapterContent
          .filter(
            item =>
              slugify(item.sectionTitle) === this.props.match.params.sectionSlug
          )
          .map((item, index) => {
            return (
              <div key={index}>
                <p>
                  <Link
                    to={this.renderBackButtonUrl()}
                    style={{ fontSize: "smaller" }}
                  >
                    {`<`} Geri
                  </Link>
                </p>
                <h3>{item.sectionTitle}</h3>
                {/* RENDERS TITLE IN SECTION CONTENT */}
                {item.sectionContent.map(item => {
                  wordCount += item.split(" ").length;
                })}
                <div className="contentText">
                  <span className="contentMeta">
                    Okuma suresi: {Math.round(wordCount / 200 + 1)} dakika
                  </span>
                  {item.sectionContent.map((item, index) => {
                    return <p key={index}>{item}</p>;
                  })}
                </div>
              </div>
            );
          });
      });
  };

  render() {
    return <div>{this.renderSectionContent()}</div>;
  }
}

export default SectionContent;
