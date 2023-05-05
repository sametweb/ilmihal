import React from "react";
import {
  Text,
  Card,
  Row,
  Col,
  Button,
  Container,
  Grid,
} from "@nextui-org/react";
import GooglePlay from "../icons/GooglePlay";
import StoreButton from "./StoreButton";

function AppPromotion() {
  return (
    <Card className="mb-10" borderWeight="0" role="banner">
      <Card.Header className="banner-card-header">
        <Text className="font-bold text-white text-2xl tracking-normal">
          cepte ilmihal oku!
        </Text>
      </Card.Header>
      <Card.Body className="banner-card-body">
        <Card.Image
          src="/android-bg.jpg"
          objectFit="cover"
          width="100%"
          height="66px"
          alt="Google Play Store background image"
        />
      </Card.Body>
      <Card.Footer>
        <Grid.Container className="flex-col gap-3">
          <Grid className="text-center">
            <Text>
              <span className="font-bold bg-gray-700/50 p-0.5 px-1 rounded">
                ilmihal oku
              </span>{" "}
              uygulamasını App Store veya Google Play Store'dan cihazınıza
              indirebilirsiniz.
            </Text>
          </Grid>
          <Grid
            className="flex justify-center gap-2"
            css={{ flexDirection: "column", "@xs": { flexDirection: "row" } }}
          >
            <StoreButton
              link="https://apps.apple.com/us/app/ilmihaloku-com/id1664334763"
              iconClass="ri-apple-fill"
              label="App Store"
            />
            <StoreButton
              link="https://play.google.com/store/apps/details?id=com.oku.ilmihal"
              iconClass="ri-google-play-fill"
              label="Google Play Store"
            />
          </Grid>
        </Grid.Container>
      </Card.Footer>
    </Card>
  );
}

export default AppPromotion;
