import React from "react";
import logo from "./data";
import Card from "./Card";

const carddeck = () => {
  function cardfunction() {
    return <Card src={logo.src} download={logo.download} />;
  }

  return logo.map(cardfunction);
};

export default carddeck;
