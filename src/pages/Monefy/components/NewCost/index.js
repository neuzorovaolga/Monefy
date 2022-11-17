import React, { useState } from "react";
import { useSelector } from "react-redux";
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

export const NewCost = ({ changeLook }) => {
  const userId = useSelector(getUserId);
  const [inputName, setInputName] = useState("");
  const [inputSum, setInputSum] = useState("");
  const [inputDate, setInputDate] = useState(
    new Date().toISOString().substring(0, 10)
  );

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const sumChangeHandler = (event) => {
    setInputSum(event.target.value);
  };

  const dateChangeHandler = (newValue) => {
    setInputDate(newValue);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      name: inputName,
      sum: inputSum,
      date: new Date(inputDate),
    };

    firebaseAddCostDoc(userId, costData);
    setInputName("");
    setInputSum("");
    changeLook();
  };

  return (
    <div className={styles.newCost}>
      <form onSubmit={submitHandler}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "20px",
            borderRadius: "8px",
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
                onChange={dateChangeHandler}
                renderInput={(params) => <TextField {...params} />}
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
