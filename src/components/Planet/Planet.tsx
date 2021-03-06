import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface IPlanet {
  name: string;
  population: string;
  climate: string;
  id: string;
  handleCardClick: (id: string) => void;
}

const useStyles = makeStyles({
  root: {
    cursor: "pointer",
  },
});

const Planet = ({ name, population, climate, handleCardClick, id }: IPlanet) => {
  const handleClick = (id: string) => () => {
    handleCardClick(id)
  }
  const classes = useStyles();
  return (
    <Grid item xs={3} onClick={handleClick(id)}>
      <Card className={classes.root}>
        <CardContent>
          <Typography>Name: {name}</Typography>
          <Typography>Climate: {climate}</Typography>
          <Typography>Population: {population}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Planet;
