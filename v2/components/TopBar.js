import React from "react";
import { Navbar, Text, Link } from "@nextui-org/react";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";

function TopBar() {
  return (
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
  );
}

export default TopBar;
