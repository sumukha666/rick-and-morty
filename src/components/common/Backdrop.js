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

/**
 * This component accepts any component as a child and displays with backdrop effect.
 */

function CustomBackdrop(props) {
  const classes = useStyles();
  const { open, children } = props;

  return (
    <Backdrop className={classes.backdrop} open={open}>
      {children}
    </Backdrop>
  );
}

// Validating the props type
CustomBackdrop.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default CustomBackdrop;
