import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";

// Updating the style of TableCell component
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

// Updating the style of TableRow component
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

// Updating the table width and height. Based on requirement this can be confiured through props.
const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
  container: {
    maxHeight: "50vh",
    overflowY: "auto",
  },
});

/**
 * Table requires rows and tableHeader as props.
 * rows is an array of object that contains key and the label.
 * rows is an array of object that contains property key and its value.
 */

function CustomTable(props) {
  const classes = useStyles();
  const { rows, tableHeader } = props;

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table stickyHeader className={classes.table} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            {tableHeader.map((col) => (
              <StyledTableCell key={col.key}>{col.label}</StyledTableCell>
            ))}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              {tableHeader.map((header) => (
                <StyledTableCell key={header.key}>{row[header.key]}</StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// Validating the props typ
CustomTable.propTypes = {
  rows: PropTypes.array.isRequired,
  tableHeader: PropTypes.array.isRequired,
};

export default CustomTable;
