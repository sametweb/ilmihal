import React from "react";

class PageTitleRenderer extends React.Component {
  render() {
    document.title = `${this.props.title} - ilmihal oku`;
    return true;
  }
}

export default PageTitleRenderer;
