import React from "react";
import ReactGA from "react-ga";
import ChapterList from "./book/ChapterList";
import ChapterContent from "./book/ChapterContent";
import SectionContent from "./book/SectionContent";
import { HashRouter, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Background from "../img/paper-bg.jpg";

function initializeReactGA() {
  ReactGA.initialize("UA-146893305-1");
  ReactGA.pageview("/homepage");
}

const App = () => {
  return (
    <Container style={{ height: "100%" }}>
      <Row style={{ minHeight: "100%" }}>
        <Col md={{ span: 6, offset: 3 }} style={styles.conStyle}>
          <HashRouter>
            <Route exact path="/" component={ChapterList} />
            <Route exact path="/:slug" component={ChapterContent} />
            <Route
              exact
              path="/:slug/:sectionSlug"
              component={SectionContent}
            />
          </HashRouter>
        </Col>
      </Row>
    </Container>
  );
};

const styles = {
  conStyle: {
    backgroundImage: `url(${Background})`,
    minHeight: "100%",
    borderLeft: "10px solid #70411c",
    borderRight: "10px solid #70411c"
  }
};

export default App;
