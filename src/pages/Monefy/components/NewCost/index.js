import React from "react";
import { CostForm } from "./CostForm";
import styles from "./NewCost.module.css";

export const NewCost = ({ changeLook }) => {
  return (
    <div className={styles.newCost}>
      <CostForm changeLook={changeLook} />
    </div>
  );
};
