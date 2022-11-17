import React from "react";
import styles from "./DiagramBar.module.css";

export const DiagramBar = (props) => {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className={styles.diagramBar}>
      <div className={styles.diagramBarInner}>
        <div
          className={styles.diagramBarFill}
          style={{
            height: barFillHeight,
          }}
        ></div>
      </div>
      <div className={styles.diagramBarLabel}>{props.label}</div>
    </div>
  );
};
