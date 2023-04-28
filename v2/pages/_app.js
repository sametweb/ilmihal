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
          className="mb-8"
        >
          <Link href="/" color="text">
            <Navbar.Brand>
              <Image
                src="/logo.png"
                width={76}
                height={76}
                className="rounded-lg"
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
          <Navbar.Content variant="highlight-rounded">
            <ThemeSwitch />
          </Navbar.Content>
        </Navbar>
        <Container xs>
          <Card className="mb-10" borderWeight="0">
            <Card.Header
              css={{
                position: "absolute",
                zIndex: 1,
                top: 5,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Text className="font-bold text-white text-3xl">
                cepte ilmihal oku!
              </Text>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src="/android-bg.jpg"
                objectFit="cover"
                width="100%"
                height="100px"
                alt="Relaxing app background"
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
                    <Link href="https://play.google.com/store/apps/details?id=com.oku.ilmihal&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                      <Button auto color="warning" rounded flat>
                        İndir
                      </Button>
                    </Link>
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
