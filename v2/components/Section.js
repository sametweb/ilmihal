import Head from "next/head";
import { title } from "../meta";
import { BookOpen } from "react-feather";
import { Card, Link, Row, Container } from "@nextui-org/react";

function Section({ chapter, section }) {
  const countWords = (paragraphs) =>
    paragraphs.reduce((total, p) => total + p.split(" ").length, 0);

  const readingTime = (section) =>
    Math.round(countWords(section.content) / 200 + 1) + " dakika";

  return (
    <>
      <Head>
        <title>
          {section.title} - {title}
        </title>
        <meta name="description" content={section.content[0]} />
      </Head>
      <Card borderWeight="0">
        <Card.Body>
          <Row>
            <h1 className="back-link">
              <Link href={`/${chapter.slug}`} passHref color="text">
                &larr; {chapter.title}
              </Link>
            </h1>
          </Row>
          <Row>
            <h2 className="section-title">{section.title}</h2>
          </Row>
        </Card.Body>
      </Card>
      <p className="reading-time">
        <BookOpen size={17} className="mr-1" /> Okuma süresi:{" "}
        {readingTime(section)}
      </p>
      {section.content.map((p, id) => (
        <p className="section-paragraph" key={id}>
          {p}
        </p>
      ))}
    </>
  );
}

export default Section;
