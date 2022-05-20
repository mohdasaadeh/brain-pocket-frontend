import * as React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable({ list, originalWords }) {
  const { listId } = list;

  const rows = originalWords.map((word, index) => {
    return {
      firstColumn: word.firstWordId.word,
      secondColumn: word.secondWordId.word,
      thirdColumn: word.thirdWordId.word,
    };
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1 align="center">{listId.title}</h1>
      </Grid>
      <Grid item xs={12} align="center">
        <Grid item xs={10}>
          <div
            style={{
              maxHeight: 300,
              overflowY: "auto",
            }}
          >
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>{listId.firstColumnTitle}</TableCell>
                    <TableCell>{listId.secondColumnTitle}</TableCell>
                    <TableCell>{listId.thirdColumnTitle}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.firstColumn}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.secondColumn}
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        style={{
                          whiteSpace: "normal",
                          wordBreak: "break-word",
                        }}
                      >
                        {row.thirdColumn}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Grid>
        <Grid item xs={10} style={{ marginTop: 10 }} align="left">
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
