import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from "./redux/store";
import App from './components/App/App';

ReactDOM.render(
    <Provider store={store}>
        <Router basename="/cabinet/">
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'),
);
