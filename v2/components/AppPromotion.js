import React from "react";
import { Text, Card, Row, Col, Button } from "@nextui-org/react";

function AppPromotion() {
  return (
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
              ilmihal oku Android uygulamasını Google Play Store'dan cihazınıza
              indirebilirsiniz.
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button
                as="a"
                auto
                rounded
                // To get enough contrast
                className="bg-gray-700 hover:bg-gray-900"
                href="https://play.google.com/store/apps/details?id=com.oku.ilmihal"
              >
                İndir
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default AppPromotion;
