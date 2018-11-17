import './style.styl';

import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { render } from 'react-dom';

import { Container, Layout } from '@core/components';

import * as effects from './store/effects';
import { store, history } from './store';
import RootRoute from "./routes/RootRoute";
import ProfilePage from "./routes/ProfilePage";
import {CreateTask} from "./routes/ProfilePage/CreateTask";

@withRouter
@hot(module)
export class Mentor extends Component {
    state={
        routes: [{
            component: RootRoute,
            exact: true,
            link: '/',
            title: 'RootRoute',
        },{
            component: ProfilePage,
            exact: false,
            link: '/profilePage',
            title: 'Профиль',
        },{
            component: CreateTask,
            exact: false,
            link: '/createTask',
            title: 'Профиль',
        }],
    };

    render() {
        const { routes } = this.state;
        return (
            <div style={{height: '100%'}}>
                <Switch>
                    {routes.map(route =>
                        <Route key={route.link}
                            exact={route.exact}
                            component={route.component}
                            path={route.link}
                        />
                    )}
                    <Redirect to="/" />
                </Switch>
            </div>
        );
    }
}

export default function(user = {}) {
    store?.dispatch(
        effects.setUser(user),
    );

    window.store = store;
    render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Router>
                    <Mentor />
                </Router>
            </ConnectedRouter>
        </Provider>,
        document.getElementById('root')
    );
}
