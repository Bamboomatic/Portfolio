import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './../sass/style.scss';

import InitMenu from "./initPage/initMenu";

const App = props => (
    <>
      <InitMenu/>
    </>
);

ReactDOM.render(<App/>, document.getElementById("app"));