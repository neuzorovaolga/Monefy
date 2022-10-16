import React from "react";
import { TbCurrencyDollar } from "react-icons/tb";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

import { CostDate } from "../CostDate";
import styles from "./ShowCostItem.module.css";
import { firebaseDeleteCostDoc } from "../../../../../../firebase/costs";
import { useSelector } from "react-redux";
import { getUserId } from "../../../../../../redux/user/selectors";

export const ShowCostItem = ({ cost, changeForm }) => {
  const userId = useSelector(getUserId);

  const onDelete = () => {
    firebaseDeleteCostDoc(userId, cost.id);
  };

  return (
    <>
      {/* <CostDate data={cost.date} /> */}
      <div className={styles.costItemDescription}>
        <h2>{cost.name}</h2>
        <div className={styles.costItemPrice}>
          <TbCurrencyDollar />
          {cost.sum}
        </div>
      </div>
      <IconButton aria-label="delete" onClick={changeForm}>
        <CreateOutlinedIcon />
      </IconButton>
      <IconButton aria-label="delete" onClick={onDelete}>
        <DeleteIcon />
      </IconButton>
    </>
  );
};
