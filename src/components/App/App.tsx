import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" render={() => <h1>Planets</h1>} />
                <Route exact path="/planets/:id" render={() => <h1>Planets Details</h1>} />
                <Route render={() => <h1>Page not found</h1>} />
            </Switch>
        </div>
    );
}

export default App;
