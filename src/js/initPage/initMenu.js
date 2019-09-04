import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import { bounce, rotateInDownLeft, rotateInDownRight } from 'react-animations';


const ButtonAnimated = styled.div`animation: ${keyframes`${bounce}`} 2s infinite;`;
const LeftDiv = styled.div`animation: ${keyframes`${rotateInDownLeft}`} 2s;`;
const RightDiv = styled.div`animation: ${keyframes`${rotateInDownRight}`} 2s;`;


class InitMenu extends Component{

    render() {
        return(
            <div className="mainInit">

                <LeftDiv>
                    <div  className="mainInitDiv L">

                    </div>
                </LeftDiv>
                <RightDiv>
                    <div  className="mainInitDiv R">
                        <InitMenuButtons handleClick={this.props.handleClick}/>
                    </div>
                </RightDiv>
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