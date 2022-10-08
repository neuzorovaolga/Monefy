import React from "react";
import "./Card.module.css";

export const Card = (props) => {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};
