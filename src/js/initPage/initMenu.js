import React, {Component} from 'react';
import InitMenuButtons from './initMenuButtons';

class InitMenu extends Component{
    render() {
        return(
            <div className="mainInit">
                <div className="mainInitDiv">

                </div>
                <div className="mainInitDiv">
                    <InitMenuButtons/>
                </div>
            </div>
        )
    }
}

export default InitMenu;