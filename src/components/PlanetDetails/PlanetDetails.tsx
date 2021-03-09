import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { fetchPlanetInfo } from "../../redux/actions/details";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  CardContent,
  Dialog,
  Typography,
} from "@material-ui/core";
import { RootReducerType } from "../../redux/reducers/rootReducer";
import Spinner from "../Spinner/Spinner";
import PersonDetails from "../PersonDetails/PersonDetails";
import { PersonInfo } from "../../types/details";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Header/Header";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

const useStyles = makeStyles({
  root: {
    width: 350,
    margin: "0 auto",
  },
  prop: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  list: {
    margin: 0,
  },
  person: {
    cursor: "pointer",
    width: "fit-content",
  },
});

const PlanetDetails = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const { loading, error, planetInfo, personList } = useSelector(
    (state: RootReducerType) => state.details
  );

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

  const handleClick = (personInfo: PersonInfo) => {
    setModalVisible((prev) => !prev);
    setPersonInfo(personInfo);
  };

  const goBack = () => history.push("/");

  if (loading) return <Spinner />;
  if (error) return <ErrorIndicator />;

  return (
    <>
      <Header />
      <Button variant="contained" color="secondary" onClick={goBack}>
        go back
      </Button>
      <Card className={classes.root}>
        <CardContent>
          <Typography>
            <span className={classes.prop}>name:</span>
            {planetInfo.name}
          </Typography>
          <Typography>
            <span className={classes.prop}>rotation period:</span>
            {planetInfo.rotation_period}
          </Typography>
          <Typography>
            <span className={classes.prop}>diameter:</span>
            {planetInfo.diameter}
          </Typography>
          <Typography>
            <span className={classes.prop}>climate:</span>
            {planetInfo.climate}
          </Typography>
          <Typography>
            <span className={classes.prop}>gravity:</span>
            {planetInfo.gravity}
          </Typography>
          <Typography>
            <span className={classes.prop}>terrain:</span>
            {planetInfo.terrain}
          </Typography>
          <Typography>
            <span className={classes.prop}>population:</span>
            {planetInfo.population}
          </Typography>
          <Typography component="div">
            <span className={classes.prop}>residents:</span>
            {personList.length > 0 ? (
              <ul className={classes.list}>
                {personList.map((person) => (
                  <li
                    className={classes.person}
                    key={person.name}
                    onClick={() => handleClick(person)}
                  >
                    {person.name}
                  </li>
                ))}
              </ul>
            ) : (
              "-"
            )}
          </Typography>
        </CardContent>
      </Card>
      <Dialog onClose={handleClick} open={isModalVisible}>
        <PersonDetails person={personInfo} />
      </Dialog>
    </>
  );
};
export default PlanetDetails;
