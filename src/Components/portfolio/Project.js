import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { HiExternalLink } from "react-icons/hi";
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
                    <div className='tech-cont'>
                        <p>React</p>
                    </div>
                    <div className='tech-cont'>
                        <p>TypeScript</p>
                    </div>
                </div>
                <div className="proj-links">
                    <a href={githubLink} rel="noreferrer" target="_blank">
                        {/* <button className="btn-code">Code</button> */}
                        <div className='action-container'>
                            <p className='proj-action'>Code</p>
                            <AiFillGithub className='proj-icon'/>
                        </div>
                    </a>
                    <a href={demoLink} rel="noreferrer" target="_blank">
                        {/* <button className="btn-demo">Demo</button> */}
                        <div className='action-container'>
                            <p className='proj-action'>Demo</p>
                            <HiExternalLink className='proj-icon'/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;