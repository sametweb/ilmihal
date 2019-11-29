import React from "react";
import slugify from "../../slugify";
import { Link } from "react-router-dom";

const ChapterTitles = ({ book }) => {
  return book.map(chapter => {
    const { id, chapterTitle } = chapter;
    return (
      <Link
        to={`/${slugify(chapterTitle)}`}
        key={id}
        className="chapter-list-item"
      >
        {chapterTitle}
      </Link>
    );
  });
};

export default ChapterTitles;
