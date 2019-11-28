import React from "react";
import ChapterList from "./book/ChapterList";
import ChapterContent from "./book/ChapterContent";
import SectionContent from "./book/SectionContent";
import Sitemap from "./Sitemap";

import { HashRouter, Route } from "react-router-dom";
import "../style.css";

class App extends React.Component {
  render() {
    return (
      <div className="book">
        <HashRouter>
          <Route exact path="/" component={ChapterList} />
          <Route exact path="/Sitemap" component={Sitemap} />
          <Route exact path="/:slug" component={ChapterContent} />
          <Route exact path="/:slug/:sectionSlug" component={SectionContent} />
        </HashRouter>
      </div>
    );
  }
}

export default App;
