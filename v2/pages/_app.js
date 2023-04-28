import React from "react";
import "../styles/main.css";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";
import {
  Navbar,
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
import ThemeSwitch from "../components/ThemeSwitch";

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
      <NextUIProvider>
        <Navbar
          shouldHideOnScroll
          variant="sticky"
          height={120}
          className="mb-8 px-3"
        >
          <Link href="/" color="text">
            <Navbar.Brand>
              <Image
                src="/logo.png"
                width={76}
                height={76}
                className="rounded-lg"
                alt="ilmihal oku logo"
              />
              <div className="pl-2">
                <Text color="inherit" hideIn="xs" className="pre-title">
                  ÖMER NASUHİ BİLMEN'İN
                </Text>
                <Text color="inherit" hideIn="xs" className="title">
                  BÜYÜK İSLAM İLMİHALİ
                </Text>
              </div>
            </Navbar.Brand>
          </Link>
          <Navbar.Content variant="highlight-rounded" as="div">
            <ThemeSwitch />
          </Navbar.Content>
        </Navbar>
        <Container xs>
          <Card className="mb-10" borderWeight="0" role="banner">
            <Card.Header className="banner-card-header">
              <Text className="font-bold text-white text-3xl">
                cepte ilmihal oku!
              </Text>
            </Card.Header>
            <Card.Body className="banner-card-body">
              <Card.Image
                src="/android-bg.jpg"
                objectFit="cover"
                width="100%"
                height="100px"
                alt="Google Play Store background image"
              />
            </Card.Body>
            <Card.Footer>
              <Row align="center">
                <Col>
                  <Text>
                    ilmihal oku Android uygulamasını Google Play Store'dan
                    cihazınıza indirebilirsiniz.
                  </Text>
                </Col>
                <Col>
                  <Row justify="flex-end">
                    <Button
                      as="a"
                      auto
                      color="primary"
                      rounded
                      href="https://play.google.com/store/apps/details?id=com.oku.ilmihal"
                    >
                      İndir
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
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
