import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
}));

function CustomLoader(props) {
  const { size = "3.5rem" } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress size={size} />
    </div>
  );
}

export default CustomLoader;
