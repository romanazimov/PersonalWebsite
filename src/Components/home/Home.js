import "./Home.css"
import logo from "../../images/avatar_roman.png";
import hand from "../../images/waving_hand.png";

function Home() {
    return (
        <section id="home" className="container">
            <div className="content">
                <div className="intro">
                    <div>
                        <h1>Hello, my name is Roman <img className="hand" src={hand} alt={""} /></h1>
                        <p className="short-bio">I'm a full-stack software developer based out of New Jersey with a passion 
                        for creating innovative solutions and crafting seamless user experiences.</p>
                    </div>
                    <img className="avatar" src={logo} alt={"logo"} />
                </div>
                <div className="cont-skills">
                    <p>Techstack</p>
                    <p>Front-end: HTML, CSS, JavaScript</p>
                    <p>Back-end: C#, Visual Basic, Python</p>
                    <p>Frameworks: .NET, Django, Flask</p>
                    <p>Databases: MySQL, PostgreSQL</p>
                    <p>Devops: AWS, Git, Docker</p>
                </div>
            </div>
        </section>
    );
}

export default Home;
