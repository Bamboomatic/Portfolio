import React, {Component} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

class MainMenu extends Component{



    handleBtn = (e) => {
        return(
            console.log(e.target)
            // tutaj dodać animacje przycisku po najechaniu
        )
    }

    render() {
        return(
            <>  <div className="emptyDivMenu">  </div>
                <div className="mainMenu">

                        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration= {500}  value="1" onMouseEnter={this.handleBtn} className="mainMenuDiv mainMenuButtons mainMenuButtonsText">
                            aboutMe
                        </Link>
                        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration= {500} value="3" onMouseEnter={this.handleBtn} className="mainMenuDiv mainMenuButtons mainMenuButtonsText">
                            Skills()
                        </Link>
                        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration= {500}  value="2" onMouseEnter={this.handleBtn} className="mainMenuDiv mainMenuButtons mainMenuButtonsText">
                            .Projects
                        </Link>
                        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-20} duration= {500}   value="4" onMouseEnter={this.handleBtn} className="mainMenuDiv mainMenuButtons mainMenuButtonsText">
                            @Contact
                        </Link>
                        <a value="5" onClick={this.props.handleClick} onMouseEnter={this.handleBtn} className="mainMenuDiv mainMenuButtons mainMenuButtonsText last">
                           Main Page
                        </a>

                </div>

            </>
        )
    }
}

export default MainMenu;

/*
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
                    <div className="mainMenuDiv">
                        <NavLink to={`/contact`} value="5" onClick={this.props.handleClick} onMouseEnter={this.handleBtn} className="mainMenuButtons">
                            <div className="mainMenuButtonsText">Main Page</div>
                        </NavLink>
                    </div>
                </div>
 */