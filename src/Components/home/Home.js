import "./Home.scss"
import avatar from "../../images/avatar_roman.png";
import hand from "../../images/waving_hand.png";
import resume from "../../files/razimov_resume.docx";
// import linkedin_logo from "../../images/linkedin_logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Home() {
    return (
        <section id="home">
            <div className="container">
                <div className="intro">
                    <div>
                        <h1>Hello, my name is Roman <img className="hand" src={hand} alt={""} /></h1>
                        <p className="secondary-text">I'm a full-stack software developer based out of New Jersey with a passion 
                        for creating innovative solutions and crafting seamless user experiences.</p>
                        <div className="bio-actions">
                            <a href={resume} download="roman_azimov_resume"><button className="resume-download">Download Resume</button></a>
                            <a href="https://www.linkedin.com/in/roman-azimov/" rel="noreferrer" target="_blank"><FontAwesomeIcon className="linkedin" icon={faLinkedin} /></a>
                            {/* <img className="linkedin" src={linkedin} alt={"logo"} /> */}
                            {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
                        </div>
                    </div>
                    <img className="avatar" src={avatar} alt={"logo"} />
                </div>
                {/* <div className="cont-skills">
                    <p>Techstack</p>
                    <p>Front-end: HTML, CSS, JavaScript</p>
                    <p>Back-end: C#, Visual Basic, Python</p>
                    <p>Frameworks: .NET, Django, Flask</p>
                    <p>Databases: MySQL, PostgreSQL</p>
                    <p>Devops: AWS, Git, Docker</p>
                </div> */}
            </div>
        </section>
    );
}

export default Home;
