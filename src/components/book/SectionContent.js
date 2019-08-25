import React from "react";
import { book as ilmihal } from "../../newSource";
import slugify from "../slugify";
import { Link } from "react-router-dom";

class SectionContent extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
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
              <div key={index} style={{ minHeight: "100%" }}>
                <h4
                  style={{ marginBottom: 20, marginTop: 20, fontWeight: 900 }}
                  autofocus
                >
                  {item.sectionTitle}
                </h4>

                {item.sectionContent.map(item => {
                  wordCount += item.split(" ").length;
                })}
                <div
                  className="contentText"
                  style={{ paddingBottom: 100, minHeight: "100%" }}
                >
                  <p className="contentMeta">
                    <span className="btn btn-warning btn-sm">
                      <Link to={this.renderBackButtonUrl()}>{`<`} Geri</Link>
                    </span>
                    <span className="float-right text-secondary">
                      Okuma süresi: {Math.round(wordCount / 200 + 1)} dakika
                    </span>
                  </p>
                  {item.sectionContent.map((item, index) => {
                    return (
                      <p key={index} style={{ textAlign: "justify" }}>
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          });
      });
  };

  render() {
    return this.renderSectionContent();
  }
}

export default SectionContent;
