import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import styles from "./SelectedYearFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedYear } from "../../redux/costs/selectors";
import { costsSelectedYearAction } from "../../redux/costs/actions";

export const SelectedYearFilter = () => {
  const selectedYear = useSelector(getSelectedYear);
  const dispatch = useDispatch();
  return (
    <div className={styles.wrapper}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          views={["year"]}
          label="Selected year"
          value={selectedYear}
          minDate={"2017"}
          maxDate={"2030"}
          onChange={(newValue) => {
            dispatch(costsSelectedYearAction(`${newValue.$y}`));
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </LocalizationProvider>
    </div>
  );
};
