import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { IPlanetsDetails } from "../../types/planets";

interface IProps extends IPlanetsDetails {
  handlePlanetClick: (id: string) => void;
}

const useStyles = makeStyles({
  root: {
    cursor: "pointer",
    textAlign: "center",
  },
});

const Planet = ({
  name,
  population,
  climate,
  handlePlanetClick,
  id,
}: IProps) => {
  const handleClick = () => {
    handlePlanetClick(id);
  };
  const classes = useStyles();
  return (
    <Grid item xs={3} onClick={handleClick}>
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
