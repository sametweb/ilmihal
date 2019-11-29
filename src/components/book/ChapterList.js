import React, { useEffect } from "react";
import { book as ilmihal } from "../../newSource";
import MainpageHeader from "./MainpageHeader";
import ChapterTitles from "./ChapterTitles";

const ChapterList = () => {
  useEffect(() => {
    document.title = "Büyük İslam İlmihali - Ömer Nasuhi Bilmen (ilmihal oku)";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        `ilmihal oku sitesinden Ömer Nasuhi Bilmen'in Büyük İslam İlmihali'ni reklamsız ücretsiz okuyabilirsiniz.`
      );
  }, []);

  return (
    <section className="content">
      <MainpageHeader />
      <p className="index">İÇİNDEKİLER</p>
      <div className="chapter-list">
        <ChapterTitles book={ilmihal} />
      </div>
    </section>
  );
};

export default ChapterList;
