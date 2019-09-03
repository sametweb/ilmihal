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

    document
      .querySelector('meta[name="keywords"]')
      .setAttribute(
        "content",
        `${this.props.title
          .split(" ")
          .join(
            ","
          )}, ilmihal oku, ilmihal, ömer nasuhi bilmen, büyük islam ilmihali`
      );
    return true;
  }
}

export default PageTitleRenderer;
