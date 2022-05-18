import * as React from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function DataTable({ list }) {
  const { listId } = list;
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstColumn", headerName: listId.firstColumnTitle, width: 130 },
    { field: "secondColumn", headerName: listId.secondColumnTitle, width: 130 },
    { field: "thirdColumn", headerName: listId.thirdColumnTitle, width: 200 },
  ];
  const rows = [];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1 align="center">{listId.title}</h1>
      </Grid>
      <Grid item xs={6}>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
        <Grid item xs={6} style={{ marginTop: 10 }}>
          <Link
            to={`/lists/${list._id}/edit`}
            style={{ textDecoration: "none" }}
          >
            <Button variant="contained" size="large">
              Edit
            </Button>
          </Link>
          <Link
            to={`/lists/${list._id}/delete`}
            style={{ textDecoration: "none", marginLeft: 10 }}
          >
            <Button variant="contained" size="large">
              Delete
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}
