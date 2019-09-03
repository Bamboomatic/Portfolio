import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class InitMenuButtons extends Component{

    handleBtn = (e) => {
        return(
            console.log(e.target)
        )
    }

    render() {
        return(
            <>
                <NavLink  to={`/about` } value="1" onMouseEnter={this.handleBtn} className="initMenuButtons">
                    <div className="initMenuButtonsText">1</div>
                </NavLink>
                <NavLink to={`/knowledge`} value="3" onMouseEnter={this.handleBtn} className="initMenuButtons">
                    <div className="initMenuButtonsText">3</div>
                </NavLink>
                <NavLink to={`/projects`} value="2" onMouseEnter={this.handleBtn} className="initMenuButtons">
                    <div className="initMenuButtonsText">2</div>
                </NavLink>
                <NavLink to={`/contact`} value="4" onMouseEnter={this.handleBtn} className="initMenuButtons">
                    <div className="initMenuButtonsText">4</div>
                </NavLink>
            </>
        )
    }
}

export default InitMenuButtons;