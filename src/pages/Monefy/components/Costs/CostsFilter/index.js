import React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import styles from "./CostFilter.module.css";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";

export const CostsFilter = ({ date, setDate }) => {
  return (
    <div className={styles.wrapper}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="Select date"
          value={date}
          minDate={dayjs("2017-01-01")}
          onChange={(newValue) => {
            setDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};
