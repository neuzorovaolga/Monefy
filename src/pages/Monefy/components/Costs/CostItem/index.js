import React, { useState } from "react";
import styles from "./CostItem.module.css";
import { Card } from "../../../../../components/Card";
import { firebaseDeleteCostDoc } from "../../../../../firebase/costs";
import { useSelector } from "react-redux";
import { getUserId } from "../../../../../redux/user/selectors";
import { ChangeCostItem } from "./ChangeCostItem";
import { ShowCostItem } from "./ShowCostItem";

export const CostItem = ({ cost }) => {
  const [isLookChangeForm, setIsLookChangeForm] = useState(false);

  const changeForm = () => {
    setIsLookChangeForm((prev) => !prev);
  };

  return (
    <>
      <Card className={styles.costItem}>
        {!isLookChangeForm && (
          <ShowCostItem cost={cost} changeForm={changeForm} />
        )}
        {isLookChangeForm && (
          <ChangeCostItem cost={cost} lookChangeForm={changeForm} />
        )}
      </Card>
    </>
  );
};
