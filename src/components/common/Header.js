import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  toolBar: {
    minHeight: "3rem",
  },
  appBar: {
    height: "3rem",
  },
  title: {
    marginRight: "1rem",
  },
}));

/**
 * Application Header component
 */

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appBar} position="sticky">
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" className={classes.title}>
            Rick and Morty
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
