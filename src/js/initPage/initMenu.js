import React, {Component} from 'react';


class InitMenu extends Component{

    render() {
        return(
            <div className="mainInit">
                <div className="mainInitDiv">
                </div>
                <div className="mainInitDiv">
                    <InitMenuButtons handleClick={this.props.handleClick}/>
                </div>
            </div>
        )
    }
}

class InitMenuButtons extends Component{
    state = {
        visibility: true,
    }

    handleEnterAnimation = (e) => {
        return(
            console.log(e.target)
        )
    }


    render() {
        return(
            <>
                <a href="#about" value="1" onMouseEnter={this.handleEnterAnimation} onClick={this.props.handleClick} className="initMenuButtons">
                    <div className="initMenuButtonsText">O mnie</div>
                </a>
                <a href="#skills" value="3" onMouseEnter={this.handleEnterAnimation} onClick={this.props.handleClick} className="initMenuButtons">
                    <div className="initMenuButtonsText">Skills</div>
                </a>
                <a href="#projects"  value="2" onMouseEnter={this.handleEnterAnimation} onClick={this.props.handleClick} className="initMenuButtons">
                    <div className="initMenuButtonsText">Projects</div>
                </a>
                <a href="#contact"  value="4" onMouseEnter={this.handleEnterAnimation} onClick={this.props.handleClick} className="initMenuButtons">
                    <div className="initMenuButtonsText">Contact</div>
                </a>
            </>
        )
    }
}

export default InitMenu;