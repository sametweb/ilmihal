import React from "react";

const MainpageHeader = () => {
  return (
    <div>
      <div
        style={{
          background: "rgba( 255, 255, 255, 0.3)",
          padding: "15px 0 10px 0",
          margin: "10px 0 15px 0",
          borderRadius: 25
        }}
      >
        <h3
          className="bookTitle text-center"
          style={{
            fontWeight: 700
          }}
        >
          BÜYÜK İSLAM İLMİHALİ
        </h3>
        <h5 className="bookTitle text-center" style={{}}>
          ÖMER NASUHİ BİLMEN
        </h5>
      </div>
    </div>
  );
};

export default MainpageHeader;
