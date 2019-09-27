import React from "react";

class PageTitleRenderer extends React.Component {
  render() {
    document.title = `${this.props.title} - ilmihal oku`;

    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        `${this.props.title} başlığını Ömer Nasuhi Bilmen'in Büyük İslam İlmihali'nden okuyun.`
      );

    return true;
  }
}

export default PageTitleRenderer;
