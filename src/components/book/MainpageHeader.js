import React from "react";
import storebutton from "../../img/storebutton.svg";

const MainpageHeader = () => {
  return (
    <header className="book-header">
      <h2 className="author">ÖMER NASUHİ BİLMEN'İN</h2>
      <h1 className="book-name">BÜYÜK İSLAM İLMİHALİ</h1>
      <div className="download">
        <a
          href="https://play.google.com/store/apps/details?id=com.oku.ilmihal"
          alt="ilmihal oku Android uygulamasını indir"
        >
          <img src={storebutton} className="storebutton" />
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
    </header>
  );
};

export default MainpageHeader;
