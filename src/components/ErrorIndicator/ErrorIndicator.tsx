import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#c78f22",
  },
  text: {
    fontSize: "1.7rem",
  },
});

const ErrorIndicator = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span className={classes.text}>BOOM!</span>
      <span>something has gone terribly wrong</span>
      <span>(but we already sent droids to fix it)</span>
    </div>
  );
};

export default ErrorIndicator;
