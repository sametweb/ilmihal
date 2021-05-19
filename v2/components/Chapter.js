import Link from "next/link";

function Chapter({ chapter }) {
  if (!chapter) return <>404</>;

  return (
    <div>
      <h1 className="chapter-title">{chapter.title}</h1>
      <ul className="content-list">
        {chapter.content.map((section) => {
          return (
            <Link
              href={`/${chapter.slug}/${section.slug}`}
              key={section.slug}
              passHref
            >
              <a>
                <li className="content-item">{section.title}</li>
              </a>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Chapter;
