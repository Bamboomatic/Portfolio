import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class MainMenu extends Component{

    handleBtn = (e) => {
        return(
            console.log(e.target)
            // tutaj dodać animacje przycisku po najechaniu
        )
    }

    render() {
        return(
            <>
                <div className="mainMenu">
                    <div className="mainMenuDiv">
                        <NavLink  to={`/about` } value="1" onMouseEnter={this.handleBtn} className="mainMenuButtons">
                            <div className="mainMenuButtonsText">About</div>
                        </NavLink>
                    </div>
                    <div className="mainMenuDiv">
                        <NavLink to={`/knowledge`} value="3" onMouseEnter={this.handleBtn} className="mainMenuButtons">
                            <div className="mainMenuButtonsText">Skills</div>
                        </NavLink>
                    </div>
                    <div className="mainMenuDiv">
                        <NavLink to={`/projects`} value="2" onMouseEnter={this.handleBtn} className="mainMenuButtons">
                            <div className="mainMenuButtonsText">Projects</div>
                        </NavLink>
                    </div>
                    <div className="mainMenuDiv">
                        <NavLink to={`/contact`} value="4" onMouseEnter={this.handleBtn} className="mainMenuButtons">
                            <div className="mainMenuButtonsText">Contact</div>
                        </NavLink>
                    </div>
                </div>

            </>
        )
    }
}

export default MainMenu;