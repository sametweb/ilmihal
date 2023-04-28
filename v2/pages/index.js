import Head from "next/head";
import data from "../data";
import { Text, Link, Card } from "@nextui-org/react";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Büyük İslam İlmihali - Ömer Nasuhi Bilmen (ilmihal oku)</title>
        <meta
          name="description"
          content="ilmihal oku sitesinden Ömer Nasuhi Bilmen'in Büyük İslam İlmihali'ni reklamsız ücretsiz okuyabilirsiniz."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Card className="p-3" borderWeight="0">
        <Card.Header>
          <Text className="book-title">İÇİNDEKİLER</Text>
        </Card.Header>
        <Card.Body>
          <ul className="list">
            {data.map((chapter) => (
              <li key={chapter.slug} className="book-item">
                <Link href={`/${chapter.slug}`} color={"text"}>
                  {chapter.title}
                </Link>
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </>
  );
}
