import "./Home.css"
import logo from "../../images/avatar_roman.png";
import hand from "../../images/waving_hand.png";

function Home() {
    return (
        <section id="home">
            <div id="cont-bio">
                <div id="bio-info">
                    <h1>Hello, my name is Roman <img id="hand" src={hand} alt={"hand"} /></h1>
                    <p id="short-bio">I'm a full-stack software developer based out of New Jersey with a passion 
                    for creating innovative solutions and crafting seamless user experiences.</p>
                </div>
                <img id="avatar" src={logo} alt={"logo"} />
            </div>
        </section>
    );
}

export default Home;
