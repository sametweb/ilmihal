import Link from "next/link";

function Chapter({ chapter }) {
  if (!chapter) return <>404</>;

  return (
    <div>
      <h1 className="chapter-title">{chapter.title}</h1>
      <ul className="content-list">
        {chapter.content.map((section) => {
          return (
            <li className="content-item">
              <Link
                href={`/${chapter.slug}/${section.slug}`}
                key={section.slug}
                passHref
              >
                <a>{section.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Chapter;
