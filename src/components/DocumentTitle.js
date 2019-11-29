const DocumentTitle = props => {
  document.title = `${props.title} - ilmihal oku`;

  document
    .querySelector('meta[name="description"]')
    .setAttribute(
      "content",
      `${props.title} başlığını Ömer Nasuhi Bilmen'in Büyük İslam İlmihali'nden okuyun.`
    );

  return true;
};

export default DocumentTitle;
