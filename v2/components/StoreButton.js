import React from "react";
import { Button } from "@nextui-org/react";

function StoreButton(props) {
  const { link, iconClass, label } = props;

  return (
    <Button
      as="a"
      auto
      rounded
      className="bg-gray-700 hover:bg-gray-900 flex align-center"
      href={link}
    >
      <i className={`${iconClass} mr-2 text-lg`} /> {label}
    </Button>
  );
}

export default StoreButton;
