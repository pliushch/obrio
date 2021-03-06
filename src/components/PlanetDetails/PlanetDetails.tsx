import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { fetchPlanetInfo } from "../../redux/actions/details";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";

const PlanetDetails = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPlanetInfo(pathname));
  }, [dispatch, pathname]);

  return (
    <div>
      <Button onClick={history.goBack} variant="contained" color="primary">
        go back
      </Button>
    </div>
  );
};
export default PlanetDetails;
