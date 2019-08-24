import React from "react";
import ChapterList from "./book/ChapterList";
import ChapterContent from "./book/ChapterContent";
import SectionContent from "./book/SectionContent";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/ilmihal/" component={ChapterList} />
      <Route exact path="/ilmihal/:slug" component={ChapterContent} />
      <Route
        exact
        path="/ilmihal/:slug/:sectionSlug"
        component={SectionContent}
      />
    </BrowserRouter>
  );
};

export default App;
