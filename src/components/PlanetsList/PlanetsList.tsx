import { Button, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlanets } from "../../redux/actions/planets";
import { RootState } from "../../redux/reducers/rootReducer";
import Spinner from "../Spinner/Spinner";
import Planet from "../Planet/Planet";
import { useHistory } from "react-router-dom";

const PlanetsList = () => {
  const history = useHistory();
  const { loading, error, planetsList, next } = useSelector(
    (state: RootState) => state.planets
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlanets());
  }, [dispatch]);

  const handleClick = () => {
    if (!next) return false;
    dispatch(fetchPlanets(next));
  };

  const handleCardClick = (id: any) => {
    history.push(id);
  };

  if (error) return <p>Error</p>;

  return (
    <div>
      <Grid container spacing={2}>
        {planetsList.map(
          (planet: {
            url: string;
            name: string;
            climate: string;
            population: string;
            id: string;
          }) => {
            return (
              <Planet
                {...planet}
                key={planet.id}
                handleCardClick={handleCardClick}
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
