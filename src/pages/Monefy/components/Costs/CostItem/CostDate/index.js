import React from "react";
import styles from "./CostDate.module.css";
export const CostDate = ({ data }) => {
  console.log(data);
  const month = data.toLocaleString("ru-RU", { month: "long" });
  const year = data.getFullYear();
  const day = data.toLocaleString("ru-RU", { day: "2-digit" });

  return (
    <div className={styles.costDateWrapper}>
      <div className={styles.costDay}>{day}</div>
      <div className={styles.costMonth}>{month}</div>
      <div className={styles.costYear}>{year}</div>
    </div>
  );
};
