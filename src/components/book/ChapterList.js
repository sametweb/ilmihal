import React from "react";
import { book as ilmihal } from "../../newSource";
import { Link } from "react-router-dom";
import slugify from "../../slugify";
import MainpageHeader from "./MainpageHeader";

class ChapterList extends React.Component {
  componentDidMount() {
    document.title = "Büyük İslam İlmihali - Ömer Nasuhi Bilmen (ilmihal oku)";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        `ilmihal oku sayfasına hoşgeldiniz. Ömer Nasuhi Bilmen'in Büyük İslam İlmihali'ni reklamsız ücretsiz okuyabilirsiniz.`
      );
    document
      .querySelector('meta[name="keywords"]')
      .setAttribute(
        "content",
        `ilmihal oku, ilmihal kitabı, ömer nasuhi bilmen, büyük islam ilmihali, ücretsiz ilmihal oku, reklamsız ilmihal oku, `
      );
  }
  renderChapterTitle = book => {
    return book.map(item => {
      const { id, chapterTitle } = item;
      return (
        <Link
          to={`/${slugify(chapterTitle)}`}
          key={id}
          className="chapter-title"
        >
          {chapterTitle}
        </Link>
      );
    });
  };

  render() {
    return (
      <section className="content">
        <MainpageHeader />
        <p className="index">İÇİNDEKİLER</p>
        <div className="chapter-list">{this.renderChapterTitle(ilmihal)}</div>
      </section>
    );
  }
}

export default ChapterList;
