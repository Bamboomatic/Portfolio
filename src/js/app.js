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

import MainMenu from "./mainPage/mainMenu";
import About from "./mainPage/about";
import Knowledge from "./mainPage/knowledge";
import Projects from "./mainPage/projects";
import Contact from "./mainPage/contact";
import Footer from "./mainPage/footer";

const App = props => (
    <>
        <HashRouter>
            <>
                <InitMenu/>

                <MainMenu/>
                <Switch>
                    <Route path={`/:subsite`} component={Subsite}/>
                    <Route component={NotFound} />
                 </Switch>
                <About/>
                <Knowledge/>
                <Projects/>
                <Contact/>
                <Footer/>
            </>
        </HashRouter>

    </>
);

ReactDOM.render(<App/>, document.getElementById("app"));