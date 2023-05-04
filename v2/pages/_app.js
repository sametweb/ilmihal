import React from "react";
import { Analytics } from "@vercel/analytics/react";
import {
  Text,
  createTheme,
  NextUIProvider,
  Link,
  Container,
  Card,
  Row,
  Col,
  Button,
} from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import TopBar from "../components/TopBar";
import GA4 from "../components/GA4";
import "../styles/main.css";
import AppPromotion from "../components/AppPromotion";

const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
});

function MyApp({ Component, pageProps }) {
  return (
    <NextThemesProvider
      defaultTheme={"system"}
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <GA4 />
      <NextUIProvider>
        <TopBar />
        <Container xs>
          <AppPromotion />
          <Component {...pageProps} />
          <Analytics />
          <div class="footer">
            <Link
              href="https://sametmutevelli.com"
              target="_blank"
              color="text"
              rel="noopener"
              className="text-xs"
            >
              Designed and coded by Samet Mutevelli
            </Link>
          </div>
        </Container>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
