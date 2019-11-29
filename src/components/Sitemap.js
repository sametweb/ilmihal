import React from "react";
import { book as ilmihal } from "../newSource";
import slugify from "../slugify";

const Sitemap = () => {
  document.title = "ilmihaloku.com Sitemap";

  return ilmihal.map((chapter, index) => (
    <ul style={{ backgroundColor: "white" }} key={index}>
      <li>
        <a href={`${slugify(chapter.chapterTitle)}`}>{chapter.chapterTitle}</a>
      </li>
      {chapter.chapterContent.map((section, index) => (
        <ul key={index}>
          <li>
            <a
              href={`${slugify(chapter.chapterTitle)}/${slugify(
                section.sectionTitle
              )}`}
            >
              {section.sectionTitle}
            </a>
          </li>
        </ul>
      ))}
    </ul>
  ));
};

export default Sitemap;
