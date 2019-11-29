import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { book as ilmihal } from "../../newSource";
import slugify from "../../slugify";
import SectionList from "./SectionList";
import BackButton from "../BackButton";
import DocumentTitle from "../DocumentTitle";

const ChapterContent = props => {
  useEffect(() => {
    ReactGA.initialize("UA-146893305-1");
    ReactGA.pageview("/ChapterContent");
  }, []);

  const { url, params } = props.match;
  const { slug } = params;

  return ilmihal
    .filter(item => slugify(item.chapterTitle) === slug)
    .map(item => (
      <div key={item.id} className="chapter-content">
        <DocumentTitle title={item.chapterTitle} />
        <h3 className="chapter-page-title">{item.chapterTitle}</h3>
        <BackButton url={url} />
        <SectionList chapterContent={item.chapterContent} url={slug} />
        <BackButton url={url} />
      </div>
    ));
};

export default ChapterContent;
