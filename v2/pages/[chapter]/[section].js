import Section from "../../components/Section";
import data from "../../data";

function section({ chapter, section }) {
  return <Section chapter={chapter} section={section} />;
}

export const getStaticProps = async ({ params: { section: slug } }) => {
  const chapter = data.find((chapter) =>
    chapter.content.some((section) => section.slug === slug)
  );
  const section = chapter.content.find((section) => section.slug === slug);

  return {
    props: { chapter, section },
  };
};

export const getStaticPaths = async () => {
  const paths = [];
  data.forEach((item) =>
    item.content.forEach((content) =>
      paths.push({ params: { chapter: item.slug, section: content.slug } })
    )
  );
  return { paths, fallback: false };
};

export default section;
