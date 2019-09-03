import React, {Component} from 'react';

class Projects extends Component{
    render() {
        return(
            <div className="centering mainHeight">
                <div className="projectTable" >
                    <button className="projectBtn">L</button>
                    <div className="projectGrid">
                        <div className="projectElement L">Lewy BOX</div>
                        <div className="projectElement R">Prawy BOX</div>
                    </div>
                    <button className="projectBtn">R</button>
                </div>

            </div>
        )
    }
}

export default Projects;