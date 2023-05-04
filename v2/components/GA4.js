import React from "react";
import Script from "next/script";

function GA4() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-R6369F8TP3"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `    
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R6369F8TP3', {
                page_path: window.location.pathname,
            });
            `,
        }}
      ></Script>
    </>
  );
}

export default GA4;
