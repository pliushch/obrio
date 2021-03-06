import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  root: {
    display: "block",
    width: "100%",
    textAlign: "center",
  },
});

const Spinner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress color="primary" />
    </div>
  );
};

export default Spinner;
