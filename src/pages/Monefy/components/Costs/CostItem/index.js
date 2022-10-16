import React, { useState } from "react";
import { TbCurrencyDollar } from "react-icons/tb";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

import { CostDate } from "./CostDate";
import styles from "./CostItem.module.css";
import { Card } from "../../../../../components/Card";
import { firebaseDeleteCostDoc } from "../../../../../firebase/costs";
import { useSelector } from "react-redux";
import { getUserId } from "../../../../../redux/user/selectors";
import { ChangeCostItem } from "./ChangeCostItem";
import { ShowCostItem } from "./ShowCostItem";

export const CostItem = ({ cost }) => {
  const userId = useSelector(getUserId);
  const [isLookChangeForm, setIsLookChangeForm] = useState(false);

  const onDelete = () => {
    firebaseDeleteCostDoc(userId, cost.id);
  };

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
