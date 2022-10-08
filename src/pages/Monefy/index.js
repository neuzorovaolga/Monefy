import React, { useState } from "react";
import { NewCost } from "./components/NewCost";
import { Costs } from "./components/Costs";
import { AddCosts } from "./components/AddCosts";
import DataGridCard from "./components/DataGrid";

export const Monefy = () => {
  const [costs, setCosts] = useState([]);
  const [isLookAdd, setIsLookAdd] = useState(false);
  const isLookAddHandler = () => {
    setIsLookAdd((prev) => {
      return !prev;
    });
  };

  const addItemData = (cost) => {
    setCosts((prev) => {
      return [cost, ...prev];
    });
  };

  return (
    <div>
      {isLookAdd === false && <AddCosts changeLook={isLookAddHandler} />}
      {isLookAdd && (
        <NewCost changeLook={isLookAddHandler} onAddItem={addItemData} />
      )}
      <Costs costs={costs} setCosts={setCosts} />
      {/* <DataGridCard /> */}
    </div>
  );
};
