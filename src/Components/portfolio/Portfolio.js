import './Portfolio.scss';
import gym from '../../images/proj_gym.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons';

function Portfolio() {
    return(
        <section id='portfolio'>
            <div className='container'>
                <p className='title'>PORTFOLIO</p>
                <div className='project-cont'>
                    <img className="image" src={gym} alt={""} />
                    <div className='right-section'>
                        <p className='primary-text'>Gym Landing Page</p>
                        <p className='secondary-text'>
                            A simple yet effective single page application showcasing
                            the gym, memberships, trial and personal trainers that it
                            has to offer.
                        </p>
                        <div className='proj-tech'>
                            {/* React, HTML, CSS, Javascript */}
                            <FontAwesomeIcon className="icon-react" icon={faReact} />
                            <FontAwesomeIcon className="icon-html" icon={faHtml5} />
                            <FontAwesomeIcon className="icon-css" icon={faCss3Alt} />
                            <FontAwesomeIcon className="icon-javascript" icon={faJs} />
                        </div>
                        <div className='proj-links'>
                            <a href="https://github.com/romanazimov/gym-app" rel="noreferrer" target="_blank"><button className='btn-code'>Code</button></a>
                            <a href="https://gym.romanazimov.com/" rel="noreferrer" target="_blank"><button className='btn-demo'>Demo</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;