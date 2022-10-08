import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { LeftMenu } from "./LeftMenu";

export const MenuBar = ({ content }) => {
  const [isMenuHandler, setIsMenuHandler] = useState(false);
  const menuClick = () => {
    setIsMenuHandler((prev) => !prev);
    console.log(isMenuHandler);
  };

  return (
    <>
      <Navbar menuClick={menuClick} />
      {isMenuHandler && <LeftMenu open={isMenuHandler} bla={menuClick} />}
      {content}
    </>
  );
};
