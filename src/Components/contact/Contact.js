import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    return (
        <section id="contact">
            <div className='container'>
                <p className='title'>CONTACT</p>
                <div className='content-container'>
                    <div className='email-content'>
                        <div className='icon-container'>
                            <FontAwesomeIcon className="icon-email" icon={faEnvelopeOpenText} />
                        </div>
                        <div>
                            <p className='primary-text'>Email</p>
                            <a href="mailto:azimov308@live.com"><p className="secondary-text">azimov308@live.com</p></a>
                        </div>
                    </div>
                    <div className='linkedin-content'>
                        <div className='icon-container'>
                            <FontAwesomeIcon className="icon-linkedin" icon={faLinkedinIn} />
                        </div>
                        <div>
                            <p className='primary-text'>LinkedIn</p>
                            <a href="https://www.linkedin.com/in/roman-azimov/" rel="noreferrer" target="_blank"><p className="secondary-text">/in/roman-azimov</p></a>
                        </div>
                    </div>
                    <div className='github-content'>
                        <div className='icon-container'>
                        <FontAwesomeIcon className="icon-github" icon={faGithub} />
                        </div>
                        <div>
                            <p className='primary-text'>GitHub</p>
                            <a href="https://www.github.com/romanazimov/" rel="noreferrer" target="_blank"><p className="secondary-text">/romanazimov</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;