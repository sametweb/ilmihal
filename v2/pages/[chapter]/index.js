import Chapter from "../../components/Chapter";
import data from "../../data";

function chapter({ chapter }) {
  return <Chapter chapter={chapter} />;
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
