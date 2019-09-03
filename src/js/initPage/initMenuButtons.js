import React, {Component} from 'react';

class InitMenuButtons extends Component{

    // handleBtn = () => {
    //     return(
    //         console.log("Enter")
    //     )
    // }

    render() {
        return(
            <>
                <div onMouseEnter={this.handleBtn} className="initMenuButtons">
                    <div className="initMenuButtonsText">1</div>
                </div>
                <div onMouseEnter={this.handleBtn} className="initMenuButtons">
                    <div className="initMenuButtonsText">3</div>
                </div>
                <div onMouseEnter={this.handleBtn} className="initMenuButtons">
                    <div className="initMenuButtonsText">2</div>
                </div>
                <div onMouseEnter={this.handleBtn} className="initMenuButtons">
                    <div className="initMenuButtonsText">4</div>
                </div>
            </>
        )
    }
}

export default InitMenuButtons;