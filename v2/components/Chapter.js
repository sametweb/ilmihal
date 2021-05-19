import Link from "next/link";
import Head from "next/head";
import { title } from "../meta";

function Chapter({ chapter }) {
  if (!chapter) return <>404</>;

  return (
    <>
      <Head>
        <title>
          {chapter.title} - {title}
        </title>
        <meta
          name="description"
          content={chapter.content
            .map((content) => content.title)
            .join(", ")
            .toLowerCase()}
        />
      </Head>
      <div>
        <h1 className="chapter-title">{chapter.title}</h1>
        <ul className="content-list">
          {chapter.content.map((section) => {
            return (
              <li className="content-item" key={section.slug}>
                <Link href={`/${chapter.slug}/${section.slug}`} passHref>
                  <a>{section.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Chapter;
