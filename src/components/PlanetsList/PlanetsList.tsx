import { Button, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlanets } from "../../redux/actions/planets";
import { RootReducerType } from "../../redux/reducers/rootReducer";
import Spinner from "../Spinner/Spinner";
import Planet from "../Planet/Planet";
import { useHistory } from "react-router-dom";

const PlanetsList = () => {
  const history = useHistory();
  const { loading, error, planetsList, next } = useSelector(
    (state: RootReducerType) => state.planets
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlanets());
  }, [dispatch]);

  const handleClick = () => {
    if (!next) return false;
    dispatch(fetchPlanets(next));
  };

  const handlePlanetClick = (id: any) => {
    history.push(id);
  };

  if (error) return <p>Error</p>;

  return (
    <div>
      <Grid container spacing={2}>
        {planetsList.map(
          (planet) => {
            return (
              <Planet
                {...planet}
                key={planet.id}
                handlePlanetClick={handlePlanetClick}
              />
            );
          }
        )}
      </Grid>

      {loading ? (
        <Spinner />
      ) : (
        next && (
          <Button onClick={handleClick} variant="contained" color="primary">
            Load more
          </Button>
        )
      )}
    </div>
  );
};

export default PlanetsList;
