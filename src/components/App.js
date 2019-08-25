import React from "react";
import ChapterList from "./book/ChapterList";
import ChapterContent from "./book/ChapterContent";
import SectionContent from "./book/SectionContent";
import MainPage from "./MainPage";
import { BrowserRouter, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Background from "../img/paper-bg.jpg";

const App = () => {
  return (
    <Container style={{ height: "100%" }}>
      <Row style={{ height: "100%" }}>
        <Col
          md={{ span: 6, offset: 3 }}
          style={{ backgroundImage: `url(${Background})`, minHeight: "100%" }}
        >
          <BrowserRouter>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/ilmihal" component={ChapterList} />
            <Route exact path="/ilmihal/:slug" component={ChapterContent} />
            <Route
              exact
              path="/ilmihal/:slug/:sectionSlug"
              component={SectionContent}
            />
          </BrowserRouter>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
