import React, { useState } from "react";
import styles from "./CostItem.module.css";
import { ChangeCostItem } from "./ChangeCostItem";
import { ShowCostItem } from "./ShowCostItem";

export const CostItem = ({ cost }) => {
  const [isLookChangeForm, setIsLookChangeForm] = useState(false);

  const changeForm = () => {
    setIsLookChangeForm((prev) => !prev);
  };

  return (
    <div className={styles.costItem}>
      {!isLookChangeForm && (
        <ShowCostItem cost={cost} changeForm={changeForm} />
      )}
      {isLookChangeForm && (
        <ChangeCostItem cost={cost} lookChangeForm={changeForm} />
      )}
    </div>
  );
};
