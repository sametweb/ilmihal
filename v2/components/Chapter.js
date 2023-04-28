import Head from "next/head";
import { title } from "../meta";
import { Text, Link, Card, Row, Col } from "@nextui-org/react";

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
      <Card borderWeight="0" className="mb-8 p-3" role="main">
        <Card.Header>
          <Row wrap="wrap">
            <Col span={12}>
              <Row>
                <h1 className="back-link">
                  <Link href="/" passHref color={"text"}>
                    &larr; İÇİNDEKİLER
                  </Link>
                </h1>
              </Row>
              <Row>
                <Text h1 className="chapter-title">
                  {chapter.title}
                </Text>
              </Row>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <ul className="list">
            {chapter.content.map((content) => (
              <li key={content.slug} className="chapter-item">
                <Link href={`/${chapter.slug}/${content.slug}`} color={"text"}>
                  {content.title}
                </Link>
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </>
  );
}

export default Chapter;
