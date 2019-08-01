import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => {
    return(
        <Provider store={store}>
            <Fragment>
                <Switch>
                    <Route exact path='/' component={} />
                </Switch>
            </Fragment>
        </Provider>
);
};
export default App;