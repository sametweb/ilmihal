import React from "react";
import { book as ilmihal } from "../../newSource";
import slugify from "../slugify";
import SectionList from "./SectionList";

class ChapterContent extends React.Component {
  renderChapterContent = book => {
    const { slug } = this.props.match.params;

    return book
      .filter(item => slugify(item.chapterTitle) === slug)
      .map(item => {
        return (
          <div key={item.id} className="chapterContent">
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
