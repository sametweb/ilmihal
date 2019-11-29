import React from "react";
import { book as ilmihal } from "../newSource";
import slugify from "../slugify";

const Sitemap = () => {
  document.title = "ilmihaloku.com Sitemap";

  // `<?xml version="1.0" encoding="UTF-8"?>

  // <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  //    <url>

  //       <loc>http://www.example.com/</loc>

  //    </url>

  // </urlset>`;
  let links = "";
  ilmihal.map(chapter => {
    links += `<url><loc>https://ilmihaloku.com/${slugify(
      chapter.chapterTitle
    )}</loc><lastmod>2019-11-29</lastmod></url>`;
    chapter.chapterContent.map(section => {
      links += `<url><loc>https://ilmihaloku.com/${slugify(
        chapter.chapterTitle
      )}/${slugify(
        section.sectionTitle
      )}</loc><lastmod>2019-11-29</lastmod></url>
      `;
    });
  });

  return (
    <textarea style={{ width: "100%", height: "100%" }}>
      {`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${links}
    </urlset>
    `}
    </textarea>
  );

  // ilmihal.map((chapter, index) => (
  //   <ul style={{ backgroundColor: "white" }} key={index}>
  //     <li>
  //       <a href={`${slugify(chapter.chapterTitle)}`}>{chapter.chapterTitle}</a>
  //     </li>
  //     {chapter.chapterContent.map((section, index) => (
  //       <ul key={index}>
  //         <li>
  //           <a
  //             href={`${slugify(chapter.chapterTitle)}/${slugify(
  //               section.sectionTitle
  //             )}`}
  //           >
  //             {section.sectionTitle}
  //           </a>
  //         </li>
  //       </ul>
  //     ))}
  //   </ul>
  // ));
};

export default Sitemap;
