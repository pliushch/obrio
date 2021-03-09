import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import PlanetsList from "../PlanetsList/PlanetsList";
import PlanetDetails from "../PlanetDetails/PlanetDetails";
import { fetchPlanets } from "../../redux/actions/planets";
import { useDispatch } from "react-redux";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlanets());
  }, [dispatch]);

  return (
    <ErrorBoundary>
      <Switch>
        <Route exact path="/" component={PlanetsList} />
        <Route exact path="/:id" component={PlanetDetails} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </ErrorBoundary>
  );
};

export default App;
