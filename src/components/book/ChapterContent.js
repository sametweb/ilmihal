import React from "react";
import ReactGA from "react-ga";
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
  async componentDidMount() {
    await ReactGA.initialize("UA-146893305-1");
    await ReactGA.pageview("/ChapterContent");
  }
  renderChapterContent = book => {
    const { slug } = this.props.match.params;

    return book
      .filter(item => slugify(item.chapterTitle) === slug)
      .map(item => {
        return (
          <div key={item.id} className="chapter-content">
            <h3 className="chapter-page-title">{item.chapterTitle}</h3>
            <PageTitleRenderer title={item.chapterTitle} />
            <Link
              to={this.renderBackButtonUrl(this.props.match.url)}
              className="back-button"
            >{`< Geri`}</Link>
            <SectionList
              chapterContent={item.chapterContent}
              url={this.props.match.params.slug}
            />
            <Link
              to={this.renderBackButtonUrl(this.props.match.url)}
              className="back-button"
              style={{ marginBottom: 20 }}
            >{`< Geri`}</Link>
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
