import "../styles/main.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="wrapper">
        <Link href="/" passHref>
          <a>
            <h2 className="logo-author">ÖMER NASUHİ BİLMEN</h2>
            <h1 className="logo-title">BÜYÜK İSLAM İLMİHALİ</h1>
          </a>
        </Link>
        <Component {...pageProps} />
      </div>
      <a
        href="https://sametmutevelli.com"
        target="_blank"
        style={{ color: "white", marginTop: 20 }}
      >
        Designed and coded by Samet Mutevelli
      </a>
    </>
  );
}

export default MyApp;
