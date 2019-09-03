import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Switch,
    Route
} from "react-router-dom";

import NotFound from "./404";

import './../sass/style.scss';

import InitMenu from "./initPage/initMenu";
import Subsite from "./initPage/links";

const App = props => (
    <>
        <HashRouter>
            <>

                <Switch>
                    <InitMenu/>
                    <Route path={`/:subsite`} component={Subsite}/>
                    <Route component={NotFound} />
                </Switch>
            </>
        </HashRouter>

    </>
);

ReactDOM.render(<App/>, document.getElementById("app"));