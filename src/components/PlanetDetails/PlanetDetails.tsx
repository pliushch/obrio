import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { fetchPlanetInfo } from "../../redux/actions/details";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent, Dialog, Typography } from "@material-ui/core";
import { RootReducerType } from "../../redux/reducers/rootReducer";
import Spinner from "../Spinner/Spinner";
import PersonDetails from "../PersonDetails/PersonDetails";
import { PersonInfo } from "../../types/details";

const PlanetDetails = () => {
  const { loading, error, planetInfo, personList } = useSelector(
    (state: RootReducerType) => state.details
  );
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlanetInfo(pathname));
  }, [dispatch, pathname]);

  const [personInfo, setPersonInfo] = useState<PersonInfo>({
    name: "",
    gender: "",
    height: "",
    mass: "",
    image: "",
  });
  const [isModalVisible, setModalVisible] = useState(false);

  const handleClick = (personInfo: PersonInfo) => () => {
    setModalVisible((prev) => !prev);
    setPersonInfo(personInfo);
  };

  if (loading) return <Spinner />;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <Link to="/" color="primary">
        go back
      </Link>
      <Card>
        <CardContent>
          <img src={planetInfo.image} alt="" />
          <Typography>name: {planetInfo.name}</Typography>
          <Typography>rotation period: {planetInfo.rotation_period}</Typography>
          <Typography>diameter: {planetInfo.diameter}</Typography>
          <Typography>climate: {planetInfo.climate}</Typography>
          <Typography>gravity: {planetInfo.gravity}</Typography>
          <Typography>terrain: {planetInfo.terrain}</Typography>
          <Typography>population: {planetInfo.population}</Typography>
          <Typography component="div">
            residents:
            {personList.map((person) => (
              <Typography key={person.name} onClick={() => handleClick(person)}>
                {person.name}
              </Typography>
            ))}
          </Typography>
        </CardContent>
      </Card>
      <Dialog onClose={handleClick} open={isModalVisible}>
        <PersonDetails person={personInfo} />
      </Dialog>
    </div>
  );
};
export default PlanetDetails;
