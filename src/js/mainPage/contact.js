import React, {Component} from 'react';

class Contact extends Component{
    render() {
        return(
            <div className="mainWidth mainHeight container"  id="contact">
                /// Contact
                <div className='contact'>

                    <form className='contactForm' method="POST" action="https://formspree.io/bambynek.pawel@gmail.com">
                        <input className="input" type="email" name="email" placeholder="Your email"/>
                            <textarea className="textarea" name="message" placeholder="Write me something :)"></textarea>
                            <button className="button" type="submit">Send Email</button>
                    </form>
                    <p className="icons">
                            <a href="https://github.com/bamboomatic" target="_blank" className="fab fa-github"> </a>
                                  <span style={{width: "50px"}}>       </span>
                            <a href="https://www.linkedin.com/in/pawelbambynek/" target="_blank" className="fab fa-linkedin"> </a>
                    </p>
                </div>
            </div>
        )
    }
}

export default Contact;