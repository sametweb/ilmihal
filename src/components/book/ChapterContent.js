import React from "react";
import { book as ilmihal } from "../../newSource";
import slugify from "../../slugify";
import SectionList from "./SectionList";
import { Link } from "react-router-dom";
import renderBackButtonUrl from "../renderBackButtonUrl";
import PageTitleRenderer from "../PageTitleRenderer";

class ChapterContent extends React.Component {
  constructor(props) {
    super(props);
    this.renderBackButtonUrl = renderBackButtonUrl.bind(this);
  }

  renderChapterContent = book => {
    const { slug } = this.props.match.params;

    return book
      .filter(item => slugify(item.chapterTitle) === slug)
      .map(item => {
        return (
          <div key={item.id}>
            <h3 style={styles.chapterTitle}>{item.chapterTitle}</h3>
            <PageTitleRenderer title={item.chapterTitle} />
            <div style={styles.textCenter}>
              <Link
                to={this.renderBackButtonUrl(this.props.match.url)}
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
            <div style={styles.textCenter}>
              <Link
                to={this.renderBackButtonUrl(this.props.match.url)}
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

const styles = {
  textCenter: {
    textAlign: "center"
  },

  chapterTitle: {
    marginBottom: 20,
    marginTop: 20,
    fontWeight: "900",
    textAlign: "center"
  }
};

export default ChapterContent;
