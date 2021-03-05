import React from "react";
import {Switch, Route} from "react-router-dom";
import Header from "../Header/Header";
import PlanetsList from "../PlanetsList/PlanetsList";

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route
                    exact
                    path="/"
                    component={PlanetsList}
                />
                <Route
                    exact
                    path="/planets/:id"
                    render={() => <h1>Planets Details</h1>}
                />
                <Route render={() => <h1>Page not found</h1>} />
            </Switch>
        </div>
    );
}

export default App;
