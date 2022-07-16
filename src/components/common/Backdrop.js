import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";

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

export default CustomBackdrop;
