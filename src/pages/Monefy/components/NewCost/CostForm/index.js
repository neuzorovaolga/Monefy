import React, { useState } from "react";
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
import "./CostForm.module.css";

export const CostForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputSum, setInputSum] = useState("");
  const [inputDate, setInputDate] = useState(
    new Date().toISOString().substring(0, 10)
  );
  console.log(inputDate);

  const [value, setValue] = React.useState(
    new Date().toISOString().substring(0, 10)
  );

  const handleChange = (newValue) => {
    setValue(newValue);
    console.log(value);
  };

  // const [userInput, setUserInput]= useState ({
  //     name: '',
  //     sum:'',
  //     date:'',
  // })

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
    //   setUserInput({...userInput, name:event.target.value})
  };
  const sumChangeHandler = (event) => {
    setInputSum(event.target.value);
    // setUserInput({...userInput, sum:event.target.value})
  };
  const dateChangeHandler = (newValue) => {
    setInputDate(newValue);
    // setUserInput({...userInput, date:event.target.value})
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      name: inputName,
      sum: inputSum,
      date: new Date(inputDate),
    };

    props.addData(costData);

    setInputName("");
    setInputSum("");
    setInputDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      {/* <div className="new-cost__controls"> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          // background: "white",
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
        />
        {/* </div> */}
        {/* <div className="new-cost__controls"> */}
        <TextField
          sx={{ marginRight: "20px" }}
          id="outlined-adornment-amount"
          label="Amount"
          variant="outlined"
          type="number"
          value={inputSum}
          onChange={sumChangeHandler}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        {/* </div> */}
        {/* <div className="new-cost__control">
          <label>Название</label>
          <input type="text" value={inputName} onChange={nameChangeHandler} />
        </div> */}
        {/* <div className="new-cost__control"> */}
        {/* <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={inputSum}
              onChange={sumChangeHandler}
              label="Amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl> */}{" "}
        {/* <label>Сумма</label>
        <input
          type="number"
          value={inputSum}
          min="0.01"
          step="0,01"
          onChange={sumChangeHandler}
        />
      </div> */}
        {/* <div className="new-cost__control">
        <label>Дата</label>
        <input
          type="date"
          min="2019-01-01"
          step="2022-12-31"
          value={inputDate}
          onChange={dateChangeHandler}
        />
      </div> */}
        {/* <div> */}
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
        {/* </div> */}
      </Box>
      <div className="addButton">
        <Button
          sx={{ marginRight: "20px" }}
          type="button"
          onClick={props.change}
          variant="outlined"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Add
        </Button>
        {/* <button type="submit">Добавить расход</button>
          <button type="button" onClick={props.change}>
            отменить
          </button> */}
      </div>
      {/* </div> */}
    </form>
  );
};
