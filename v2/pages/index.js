import Head from "next/head";
import Link from "next/link";
import data from "../data";

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
      <div className="download">
        <a
          href="https://play.google.com/store/apps/details?id=com.oku.ilmihal"
          alt="ilmihal oku Android uygulamasını indir"
        >
          <img
            src="/storebutton.svg"
            alt={"ilmihal oku uygulamasını Google Play Store'dan indirin."}
            className="store-button"
          />
        </a>
        <div className="download-text">
          <a
            href="https://play.google.com/store/apps/details?id=com.oku.ilmihal"
            alt="ilmihal oku Android uygulamasını indir"
          >
            ilmihal oku Android uygulamasını indirmek için tıklayın!
          </a>
        </div>
      </div>
      <h3 className="index-title">İÇİNDEKİLER</h3>
      <ul className="content-list">
        {data.map((item) => (
          <li className="content-item">
            <Link href={`/${item.slug}`} key={item.id} passHref>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
