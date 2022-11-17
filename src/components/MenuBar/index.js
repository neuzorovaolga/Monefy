import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { LeftMenu } from "./LeftMenu";

export const MenuBar = ({ content }) => {
  const [isMenu, setIsMenu] = useState(false);
  const menuClick = () => {
    setIsMenu((prev) => !prev);
  };

  return (
    <>
      <Navbar menuClick={menuClick} />
      {isMenu && <LeftMenu open={isMenu} onClose={menuClick} />}
      {content}
    </>
  );
};
