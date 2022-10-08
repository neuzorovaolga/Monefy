import React from "react";
import "./CostDate.module.css";
export const CostDate = (props) => {
  const month = props.data.toLocaleString("ru-RU", { month: "long" });
  const year = props.data.getFullYear();
  const day = props.data.toLocaleString("ru-RU", { day: "2-digit" });

  return (
    <div className="costDateWrapper">
      <div className="costDay">{day}</div>
      <div className="costMonth">{month}</div>
      <div className="costYear">{year}</div>
    </div>
  );
};
