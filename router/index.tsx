import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import UserPage from '../pages/user';
import TimeseriesPage from '../pages/timeseries';
import ArticlePage from '../pages/article'
 
class Index extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={UserPage} />
                    <Route path="/timeseries" exact component={TimeseriesPage} />
                    <Route path="/article" exact component={ArticlePage} />
                    {/* <Route path="*" exact component={LandingPage} /> */}
                    <Redirect exact from="*" to="/" />
                </Switch>
            </BrowserRouter>
        );
    }
}
 
export default Index;