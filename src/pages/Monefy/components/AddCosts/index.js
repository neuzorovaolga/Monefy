import React from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styles from "./AddCosts.module.css";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { getCostsExpenses } from "../../../../redux/costs/selectors";
import { useSelector } from "react-redux";

export const AddCosts = ({ changeLook }) => {
  const costsExpenses = useSelector(getCostsExpenses);
  console.log("costsExpenses", costsExpenses);
  return (
    <div className={styles.wrapper}>
      <Fab
        className={styles.button}
        color="primary"
        aria-label="add"
        onClick={changeLook}
      >
        <AddIcon />
      </Fab>
      <div className={styles.spent}>
        <h2>Daily expenses:</h2>
        <h2 style={{ paddingLeft: `${30}px`, color: "#e91e63" }}>
          {costsExpenses}
        </h2>
        <AttachMoneyIcon />
      </div>
    </div>
  );
};
