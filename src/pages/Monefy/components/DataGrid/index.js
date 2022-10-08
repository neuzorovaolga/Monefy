import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  randomCreatedDate,
  randomTraderName,
  randomEmail,
  randomUpdatedDate,
} from "@mui/x-data-grid-generator";
import Box from "@mui/material/Box";

export default function ControlPinnedColumns() {
  const [pinnedColumns, setPinnedColumns] = React.useState({
    left: ["name"],
  });

  const handlePinnedColumnsChange = React.useCallback(
    (updatedPinnedColumns) => {
      setPinnedColumns(updatedPinnedColumns);
    },
    []
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ height: 400, mt: 1 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          //   pinnedColumns={pinnedColumns}
          //   onPinnedColumnsChange={handlePinnedColumnsChange}
        />
      </Box>
    </Box>
  );
}

const columns = [
  { field: "name", headerName: "Name", width: 180, editable: true },
  { field: "email", headerName: "Email", width: 200, editable: true },
  { field: "age", headerName: "Age", type: "number", editable: true },
  {
    field: "dateCreated",
    headerName: "Date Created",
    type: "date",
    width: 180,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    name: randomTraderName(),
    email: randomEmail(),
    age: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 2,
    name: randomTraderName(),
    email: randomEmail(),
    age: 36,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
];
