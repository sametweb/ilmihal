import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { book as ilmihal } from "../../newSource";
import slugify from "../../slugify";
import BackButton from "../BackButton";
import DocumentTitle from "../DocumentTitle";

const SectionContent = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.initialize("UA-146893305-1");
    ReactGA.pageview("/SectionContent");
  }, []);

  const countWords = paragraphs =>
    paragraphs.reduce((total, p) => total + p.split(" ").length, 0);

  const { url, params } = props.match;
  const { slug, sectionSlug } = params;

  return ilmihal
    .filter(item => slugify(item.chapterTitle) === slug)
    .map(item =>
      item.chapterContent
        .filter(item => slugify(item.sectionTitle) === sectionSlug)
        .map((item, index) => (
          <div className="section-content" key={index}>
            <h1 className="section-page-title">{item.sectionTitle}</h1>
            <DocumentTitle title={item.sectionTitle} />
            <p className="section-content-meta">
              <BackButton url={url} />
              <span>
                {`Okuma süresi: ${Math.round(
                  countWords(item.sectionContent) / 200 + 1
                )} dakika`}
              </span>
            </p>
            <div className="section-content-text">
              {item.sectionContent.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        ))
    );
};

export default SectionContent;
