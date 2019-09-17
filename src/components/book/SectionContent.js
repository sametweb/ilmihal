import React from "react";
import ReactGA from "react-ga";
import { book as ilmihal } from "../../newSource";
import slugify from "../../slugify";
import { Link } from "react-router-dom";
import renderBackButtonUrl from "../renderBackButtonUrl";
import PageTitleRenderer from "../PageTitleRenderer";

class SectionContent extends React.Component {
  constructor(props) {
    super(props);
    this.renderBackButtonUrl = renderBackButtonUrl.bind(this);
  }
  async componentDidMount() {
    window.scrollTo(0, 0);
    await ReactGA.initialize("UA-146893305-1");
    await ReactGA.pageview("/SectionContent");
  }

  countWords = paragraphs => {
    let countWords = null;
    paragraphs.forEach(item => {
      countWords += item.split(" ").length;
    });
    return countWords;
  };

  renderSectionContent = () => {
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
              <div className="section-content" key={index}>
                <h1 className="section-page-title">{item.sectionTitle}</h1>
                <PageTitleRenderer title={item.sectionTitle} />

                <p className="section-content-meta">
                  <Link className="back-button" to={this.renderBackButtonUrl()}>
                    {`< Geri`}
                  </Link>
                  <span>
                    {`Okuma süresi: ${Math.round(
                      this.countWords(item.sectionContent) / 200 + 1
                    )} dakika`}
                  </span>
                </p>
                <div className="section-content-text">
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
    return this.renderSectionContent();
  }
}

export default SectionContent;
