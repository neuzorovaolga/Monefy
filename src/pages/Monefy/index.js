import React, { useState } from "react";
import { NewCost } from "./components/NewCost";
import { Costs } from "./components/Costs";
import { AddCosts } from "./components/AddCosts";

export const Monefy = () => {
  const [isLookAdd, setIsLookAdd] = useState(false);

  const isLookAddHandler = () => {
    setIsLookAdd((prev) => {
      return !prev;
    });
  };

  return (
    <div>
      {!isLookAdd && <AddCosts changeLook={isLookAddHandler} />}
      {isLookAdd && <NewCost changeLook={isLookAddHandler} />}
      <Costs />
    </div>
  );
};
