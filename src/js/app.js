import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './../sass/style.scss';

import InitMenu from "./initPage/initMenu";

import MainMenu from "./mainPage/mainMenu";
import About from "./mainPage/about";
import Knowledge from "./mainPage/knowledge";
import Projects from "./mainPage/projects";
import Gallery from "./mainPage/gallery";
import Contact from "./mainPage/contact";
import Footer from "./mainPage/footer";

class App extends Component{
    state = {
        visibility: true,
        didMount: false,
    }

    handleClick = (e) => {
        this.setState({
            visibility: !this.state.visibility,
            didMount: !this.state.didMount,
        })
        console.log(this.state.visibility)
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({didMount: true})
        }, 100);
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.setState({didMount: true})
        }, 100);
    }


    render() {
        const {didMount} = this.state;
        if(this.state.visibility){

            return(
                <div className={`load-in ${didMount && 'visible'}`}>
                    <InitMenu handleClick={this.handleClick}/>
                </div>
            )
        }

        return(

            <div className={`load-in ${didMount && 'visible'}`}>
                    <MainMenu handleClick={this.handleClick}/>
                    <About/>
                    <Knowledge/>
                    <Projects/>
                    <Gallery/>
                    <Contact/>
                    <Footer/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));

