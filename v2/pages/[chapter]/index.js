import Head from "next/head";
import Chapter from "../../components/Chapter";
import data from "../../data";
import { title, description } from "../../meta";

function chapter({ chapter }) {
  return (
    <>
      <Head>
        <title>
          {chapter.title} - {title}
        </title>
        <meta name="description" content={description} />
      </Head>
      <Chapter chapter={chapter} />
    </>
  );
}

export const getStaticProps = async ({ params: { chapter: slug } }) => {
  const chapter = data.find((chapter) => chapter.slug === slug);
  return {
    props: { chapter },
  };
};

export const getStaticPaths = async () => {
  return { paths: data.map((item) => `/${item.slug}`), fallback: false };
};

export default chapter;
