import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import "../style.css";

import ChapterList from "./book/ChapterList";
import ChapterContent from "./book/ChapterContent";
import SectionContent from "./book/SectionContent";
import PrivacyPolicy from "./PrivacyPolicy";
// import Sitemap from "./Sitemap";

class App extends React.Component {
  render() {
    return (
      <div className="book">
        <BrowserRouter>
          <Route exact path="/" component={ChapterList} />
          {/* <Route exact path="/Sitemap" component={Sitemap} /> */}
          <Route exact path="/Gizlilik-Politikasi" component={PrivacyPolicy} />
          <Route exact path="/:slug" component={ChapterContent} />
          <Route exact path="/:slug/:sectionSlug" component={SectionContent} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
