import React, { Component } from 'react';
import Home from './pages/home';
import volunteer from './pages/volunteer'
import patient from './pages/patient'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (

            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} exact />
                        <Route path="/patient" component = {patient} />
                        <Route path = "/volunteer" component = {volunteer} />
                    </Switch>
                </Router>
            </div>
        );
    };
}


export default App;
