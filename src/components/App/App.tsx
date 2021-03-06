import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import PlanetsList from "../PlanetsList/PlanetsList";
import PlanetDetails from "../PlanetDetails/PlanetDetails";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={PlanetsList} />
        <Route exact path="/:id" component={PlanetDetails} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </div>
  );
}

export default App;
