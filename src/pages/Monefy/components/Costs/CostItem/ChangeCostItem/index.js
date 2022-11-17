import React, { useState } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { getUserId } from "../../../../../../redux/user/selectors";
import { firebaseUpdateCost } from "../../../../../../firebase/costs";

export const ChangeCostItem = ({ cost, lookChangeForm }) => {
  const userId = useSelector(getUserId);
  const [inputChangeName, setInputChangeName] = useState(cost.name);
  const [inputChangeSum, setInputChangeSum] = useState(cost.sum);
  const [inputChangeDate, setInputChangeDate] = useState(
    new Date().toISOString().substring(0, 10)
  );

  const nameChangeHandler = (event) => {
    setInputChangeName(event.target.value);
  };

  const sumChangeHandler = (event) => {
    setInputChangeSum(event.target.value);
  };

  const dateChangeHandler = (newValue) => {
    setInputChangeDate(newValue);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const costChangeData = {
      name: inputChangeName,
      sum: inputChangeSum,
      date: new Date(inputChangeDate),
    };
    firebaseUpdateCost(userId, cost.id, costChangeData);

    setInputChangeName("");
    setInputChangeSum("");
    lookChangeForm();
  };

  return (
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
          value={inputChangeName}
          onChange={nameChangeHandler}
        />
        <TextField
          sx={{ marginRight: "20px" }}
          id="outlined-adornment-amount"
          label="Amount"
          variant="outlined"
          type="number"
          value={inputChangeSum}
          onChange={sumChangeHandler}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={3}>
            <DesktopDatePicker
              label="Date desktop"
              inputFormat="MM/DD/YYYY"
              value={inputChangeDate}
              onChange={dateChangeHandler}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
        <Button
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
          sx={{
            marginLeft: "200px",
          }}
        >
          Change
        </Button>
      </Box>
    </form>
  );
};
