import React from "react";
import { TbCurrencyDollar } from "react-icons/tb";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { CostDate } from "./CostDate";
import "./CostItem.module.css";
import { Card } from "../../../../../components/Card";

export const CostItem = (props) => {
  console.log(props);
  return (
    <Card className="costItem">
      <CostDate data={props.dannie.date} />
      <div className="costItemDescription">
        <h2>{props.dannie.name}</h2>
        <div className="costItemPrice">
          <TbCurrencyDollar />
          {props.dannie.sum}
        </div>
      </div>
      <IconButton
        sx={{
          display: "flex",
          marginBottom: "50px",
          // position: "relative",
          // marginBottom: "50px",
          // marginLeft: "930px",
        }}
        aria-label="delete"
        onClick={() => props.onDelete(props.dannie.id)}
      >
        <DeleteIcon />
      </IconButton>

      {/* <button className="buttonFilter">
        <BsThreeDotsVertical
          className="s"
          onClick={() => props.onDelete(props.dannie.id)}
        />
      </button> */}
    </Card>
  );
};
