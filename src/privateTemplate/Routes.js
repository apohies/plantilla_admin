import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashBoard from './page/DashBoard';

function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={DashBoard} />
        </Switch>
    );
};

export default Routes;
