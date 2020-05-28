import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';

import Header from './Header';
import history from '../history';


class App extends React.Component {

    render() {
        return (
            <div className="ui container">
                <Router history={history}>
                    <div>
                        <Header />
                        <Switch>
                            <Route path="/" exact component={StreamList} />
                            <Route path="/streams/new" exact component={StreamCreate} />
                        </Switch>
                    </div>
                </Router>

            </div>
        );
    }
}

export default App;