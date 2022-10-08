import React from "react";
import { CostForm } from "./CostForm";
import "./NewCost.module.css";

export const NewCost = (props) => {
  const addItem = (data) => {
    const newObj = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddItem(newObj);
    props.changeLook();
  };

  return (
    <div className="new-cost">
      <CostForm change={props.changeLook} addData={addItem} />
    </div>
  );
};
