import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
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

CustomLoader.propTypes = {
  size: PropTypes.string,
};

export default CustomLoader;
