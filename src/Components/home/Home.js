import "./Home.scss"
import avatar from "../../images/avatar_roman.png";
import hand from "../../images/waving_hand.png";
import resume from "../../files/razimov_resume.docx";

function Home() {
    return (
        <section id="home">
            <div className="container">
                <div className="intro">
                    <div>
                        <p className="greeting">Hello, my name is Roman <img className="hand" src={hand} alt={""} /></p>
                        <p className="secondary-text">I'm a full-stack software developer based out of New Jersey with a passion 
                        for creating innovative solutions and crafting seamless user experiences.</p>
                        <div className="bio-actions">
                            <a href={resume} download="roman_azimov_resume"><button className="resume-download">Download Resume</button></a>
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
