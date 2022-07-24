import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 9,
    color: "#fff",
  },
}));

function CustomBackdrop(props) {
  const classes = useStyles();
  const { open, children } = props;

  return (
    <Backdrop className={classes.backdrop} open={open}>
      {children}
    </Backdrop>
  );
}

CustomBackdrop.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node,
};

export default CustomBackdrop;
