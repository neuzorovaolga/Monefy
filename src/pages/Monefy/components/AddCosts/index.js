import React from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styles from "./AddCosts.module.css";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export const AddCosts = ({ changeLook }) => {
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
        <h2 style={{ paddingLeft: `${30}px`, color: "#e91e63" }}>5000</h2>
        <AttachMoneyIcon />
      </div>
    </div>
  );
};
