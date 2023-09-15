import "./Home.scss"
import avatar from "../../images/avatar_roman.png";
import hand from "../../images/waving_hand.png";

function Home() {
    return (
        <section id="home">
            <div className="container">
                <div className="hero">
                    <div>
                        <p className="greeting">Hello, my name is Roman <img className="hand" src={hand} alt={""} /></p>
                        <p className="secondary-text">I'm a full-stack software developer based out of New Jersey with a passion 
                        for creating innovative solutions and crafting seamless user experiences.</p>
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
