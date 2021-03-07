import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { fetchPlanetInfo } from "../../redux/actions/details";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardContent, Typography } from "@material-ui/core";
import { RootReducerType } from "../../redux/reducers/rootReducer";
import Spinner from "../Spinner/Spinner";

const PlanetDetails = () => {
  const { loading, error, planetInfo, personList } = useSelector(
    (state: RootReducerType) => state.details
  );
  const { pathname } = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPlanetInfo(pathname));
  }, [dispatch, pathname]);

  if (loading) return <Spinner />;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <Button onClick={history.goBack} variant="contained" color="primary">
        go back
      </Button>
      <Card>
        <CardContent>
          <Typography>name: {planetInfo.name}</Typography>
          <Typography>rotation period: {planetInfo.rotation_period}</Typography>
          <Typography>diameter: {planetInfo.diameter}</Typography>
          <Typography>climate: {planetInfo.climate}</Typography>
          <Typography>gravity: {planetInfo.gravity}</Typography>
          <Typography>terrain: {planetInfo.terrain}</Typography>
          <Typography>population: {planetInfo.population}</Typography>
          <Typography>
            residents:{" "}
            {personList.map((person) => {
              return <p key={person.name}>{person.name}</p>;
            })}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default PlanetDetails;
