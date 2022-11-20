import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import styles from "./NewCost.module.css";
import { getUserId } from "../../../../redux/user/selectors";
import { firebaseAddCostDoc } from "../../../../firebase/costs";
import { getSelectedDay } from "../../../../redux/costs/selectors";
import { Grid } from "@mui/material";

export const NewCost = ({ changeLook }) => {
  const userId = useSelector(getUserId);
  const selectedDay = useSelector(getSelectedDay);
  const [inputName, setInputName] = useState("");
  const [inputSum, setInputSum] = useState("");
  const [inputDate, setInputDate] = useState(selectedDay);

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const sumChangeHandler = (event) => {
    setInputSum(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      name: inputName,
      sum: inputSum,
      date: inputDate,
    };

    firebaseAddCostDoc(userId, costData);
    setInputName("");
    setInputSum("");
    changeLook();
  };

  return (
    <div className={styles.newCost}>
      <form onSubmit={submitHandler} className={styles.form}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{ marginRight: "20px" }}
            id="outlined-basic"
            label="Name of expenses"
            variant="outlined"
            type="text"
            value={inputName}
            onChange={nameChangeHandler}
            autoComplete="off"
          />
          <TextField
            sx={{ marginRight: "20px" }}
            id="outlined-adornment-amount"
            label="Amount"
            variant="outlined"
            type="number"
            inputProps={{ min: 0 }}
            value={inputSum}
            onChange={sumChangeHandler}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/DD/YYYY"
                value={inputDate}
                onChange={(newValue) => {
                  setInputDate(newValue.toDate());
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    inputProps={{ ...params.inputProps, readOnly: true }}
                  />
                )}
              />
            </Stack>
          </LocalizationProvider>
        </Box>
        <div className={styles.addButton}>
          <Button
            sx={{ marginRight: "20px" }}
            type="button"
            onClick={changeLook}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};
