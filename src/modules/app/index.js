import './style.styl';

import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { render } from 'react-dom';

import { Container, Layout } from '@core/components';

import * as effects from './store/effects';
import { RootRoute, TaskExchange, Board, ChatRoute, ProfilePage } from './routes';
import { store, history } from './store';

//debug
import AvailableMentors from './routes/ProfilePage/AvailableMentors'
//debug

@withRouter
@hot(module)
export class App extends Component {
    state={
        routes: [{
            component: RootRoute,
            exact: true,
            link: '/',
            title: 'RootRoute',
        },{
            component: Board,
            exact: false,
            link: '/board',
            title: 'Board',
        },{
            component: TaskExchange,
            exact: false,
            link: '/taskExchange',
            title: 'Биржа задач',
        },{
            component: ProfilePage,
            exact: false,
            link: '/profilePage',
            title: 'Личный кабинет',
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
                    <App/>
                </Router>
            </ConnectedRouter>
        </Provider>,
        document.getElementById('root')
    );
}
