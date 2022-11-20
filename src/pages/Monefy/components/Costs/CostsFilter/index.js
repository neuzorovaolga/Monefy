import React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import styles from "./CostFilter.module.css";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedDay } from "../../../../../redux/costs/selectors";
import { setSelectedDayCostsAction } from "../../../../../redux/costs/actions";

export const CostsFilter = () => {
  const dispatch = useDispatch();
  const selectedDay = useSelector(getSelectedDay);
  return (
    <div className={styles.wrapper}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="Select date"
          value={selectedDay}
          minDate={dayjs("2017-01-01")}
          disableFuture
          onChange={(newValue) => {
            dispatch(setSelectedDayCostsAction(newValue.toDate()));
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              inputProps={{ ...params.inputProps, readOnly: true }}
            />
          )}
        />
      </LocalizationProvider>
    </div>
  );
};
