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
              <div key={index} style={{ minHeight: "100%" }}>
                <h4 style={styles.sectionTitle} autoFocus>
                  {item.sectionTitle}
                </h4>
                <PageTitleRenderer title={item.sectionTitle} />

                <div style={styles.contentText}>
                  <p>
                    <Link
                      className="btn btn-warning btn-sm"
                      to={this.renderBackButtonUrl()}
                    >
                      {`<`} Geri
                    </Link>
                    <span className="float-right text-secondary">
                      {`Okuma süresi: ${Math.round(
                        this.countWords(item.sectionContent) / 200 + 1
                      )} dakika`}
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

const styles = {
  sectionTitle: { paddingBottom: 20, paddingTop: 20, fontWeight: 900 },
  contentText: { paddingBottom: 25, minHeight: "100%" }
};

export default SectionContent;
