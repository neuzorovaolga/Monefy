import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import styles from "./SelectedYearFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedYear } from "../../redux/costs/selectors";
import { setSelectedYearCostsAction } from "../../redux/costs/actions";

const MIN_DATE = "2017";
const MAX_DATE = "2030";

export const SelectedYearFilter = () => {
  const selectedYear = useSelector(getSelectedYear);
  const dispatch = useDispatch();

  const handlerOnChange = (newValue) => {
    dispatch(setSelectedYearCostsAction(`${newValue.year()}`));
  };
  return (
    <div className={styles.wrapper}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          views={["year"]}
          label="Selected year"
          value={selectedYear}
          minDate={MIN_DATE}
          maxDate={MAX_DATE}
          onChange={handlerOnChange}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </LocalizationProvider>
    </div>
  );
};
