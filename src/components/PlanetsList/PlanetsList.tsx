import { Button, Grid } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlanets } from "../../redux/actions/planets";
import { RootReducerType } from "../../redux/reducers/rootReducer";
import Spinner from "../Spinner/Spinner";
import Planet from "./Planet/Planet";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    marginTop: "10px",
  },
});

const PlanetsList = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const { loading, error, planetsList, next } = useSelector(
    (state: RootReducerType) => state.planets
  );

  const handleClick = () => {
    if (!next) return false;
    dispatch(fetchPlanets(next));
  };

  const handlePlanetClick = (id: any) => {
    history.push(id);
  };

  if (error) return <ErrorIndicator />;

  return (
    <>
      <Header />
      <Grid container spacing={2}>
        {planetsList.map((planet) => {
          return (
            <Planet
              {...planet}
              key={planet.id}
              handlePlanetClick={handlePlanetClick}
            />
          );
        })}
      </Grid>
      {loading ? (
        <Spinner />
      ) : (
        next && (
          <Button
            className={classes.button}
            onClick={handleClick}
            variant="contained"
            color="primary"
          >
            Load more
          </Button>
        )
      )}
    </>
  );
};

export default PlanetsList;
