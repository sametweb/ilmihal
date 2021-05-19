import Link from "next/link";
import Head from "next/head";
import { title } from "../meta";

function Section({ chapter, section }) {
  const countWords = (paragraphs) =>
    paragraphs.reduce((total, p) => total + p.split(" ").length, 0);

  return (
    <div>
      <Head>
        <title>
          {section.title} - {title}
        </title>
        <meta name="description" content={section.content[0]} />
      </Head>
      <h1 className="chapter-title url">
        <Link href={`/${chapter.slug}`} passHref>
          <a>&larr; {chapter.title}</a>
        </Link>
      </h1>
      <h2 className="section-title">{section.title}</h2>
      <p className="reading-time">
        {`Okuma süresi: ${Math.round(
          countWords(section.content) / 200 + 1
        )} dakika`}
      </p>
      {section.content.map((p, id) => (
        <p className="section-paragraph" key={id}>
          {p}
        </p>
      ))}
    </div>
  );
}

export default Section;
