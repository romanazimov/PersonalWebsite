import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons';
import './Project.scss';

const Project = (props) => {
    const { image, primaryText, secondaryText, technologies, githubLink, demoLink } = props;

    return (
        <div className="project-container">
            <img className="image" src={image} alt="" />
            <div className="right-section">
                <p className="primary-text">{primaryText}</p>
                <p className="secondary-text">{secondaryText}</p>
                <div className="proj-tech">
                    {technologies.includes('React') && <FontAwesomeIcon className="icon-react" icon={faReact} />}
                    {technologies.includes('HTML') && <FontAwesomeIcon className="icon-html" icon={faHtml5} />}
                    {technologies.includes('CSS') && <FontAwesomeIcon className="icon-css" icon={faCss3Alt} />}
                    {technologies.includes('JavaScript') && <FontAwesomeIcon className="icon-javascript" icon={faJs} />}
                </div>
                <div className="proj-links">
                    <a href={githubLink} rel="noreferrer" target="_blank">
                        <button className="btn-code">Code</button>
                    </a>
                    <a href={demoLink} rel="noreferrer" target="_blank">
                        <button className="btn-demo">Demo</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;