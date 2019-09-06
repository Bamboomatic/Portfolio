import React, {Component} from 'react';
import Gallery from "./gallery";

const images1 = [
    {
        original: './src/images/abrys/01.jpg',
        thumbnail: './src/images/abrys/01.jpg',
    },
    {
        original: './src/images/abrys/02.jpg',
        thumbnail: './src/images/abrys/02.jpg',
    },
    {
        original: './src/images/abrys/03.jpg',
        thumbnail: './src/images/abrys/03.jpg',
    },
    {
        original: './src/images/abrys/04.jpg',
        thumbnail: './src/images/abrys/04.jpg',
    }
];
const images2 = [
    {
        original: './src/images/bombay/01.jpg',
        thumbnail: './src/images/bombay/01.jpg',
    },
    {
        original: './src/images/bombay/02.jpg',
        thumbnail: './src/images/bombay/02.jpg',
    },
    {
        original: './src/images/bombay/03.jpg',
        thumbnail: './src/images/bombay/03.jpg',
    }
];
const images3 = [
    {
        original: './src/images/grolsh/01.jpg',
        thumbnail: './src/images/grolsh/01.jpg',
    },
    {
        original: './src/images/grolsh/02.jpg',
        thumbnail: './src/images/grolsh/02.jpg',
    },
    {
        original: './src/images/grolsh/03.jpg',
        thumbnail: './src/images/grolsh/03.jpg',
    },
    {
        original: './src/images/grolsh/04.jpg',
        thumbnail: './src/images/grolsh/04.jpg',
    },
    {
        original: './src/images/grolsh/05.jpg',
        thumbnail: './src/images/grolsh/05.jpg',
    }
];

class Projects extends Component{

    state = {
        gallery: '',
    }

    chooseGallery1 = (e) => {
        this.setState({
            gallery: images1,
        })
    }
    chooseGallery2 = (e) => {
        this.setState({
            gallery: images2,
        })
    }
    chooseGallery3 = (e) => {
        this.setState({
            gallery: images3,
        })
    }
    chooseGallery4 = (e) => {
        this.setState({
            gallery: '',
        })
    }

    render() {
        return(
            <>
                <div className="centering mainHeight projectGalHeight projects container" id="projects">
                    /// Projects
                    <div className="projectTable" >
                        <button className="projectBtn">L</button>
                        <div className="projectGrid">
                            <div className="projectElement L">
                                    <div onClick={this.chooseGallery1}><img className="thumb" src="/src/images/abrys/03.jpg"/></div>
                                    <div onClick={this.chooseGallery2}><img className="thumb" src="/src/images/bombay/01.jpg"/></div>
                                    <div onClick={this.chooseGallery3}><img className="thumb" src="/src/images/grolsh/03.jpg"/></div>
                                    <div onClick={this.chooseGallery1}><img className="thumb" src="/src/images/abrys/03.jpg"/></div>
                                    <div onClick={this.chooseGallery2}><img className="thumb" src="/src/images/bombay/01.jpg"/></div>
                                    <div onClick={this.chooseGallery3}><img className="thumb" src="/src/images/grolsh/03.jpg"/></div>
                                    <div onClick={this.chooseGallery1}><img className="thumb" src="/src/images/abrys/03.jpg"/></div>
                                    <div onClick={this.chooseGallery2}><img className="thumb" src="/src/images/bombay/01.jpg"/></div>
                                    <div onClick={this.chooseGallery4} className="thumb">TurnOff</div>
                            </div>
                            {/*<div className="projectElement R">Prawy BOX</div>*/}
                        </div>
                        <button className="projectBtn">R</button>
                    </div>
                </div>
                <Gallery gallery={this.state.gallery}/>
            </>
        )
    }
}

export default Projects;