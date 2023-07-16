// import Bio from "../../Components/bio/Bio";
// import Projects from "./Components/projects/Projects";

import Bio from '../Components/bio/Bio';
import Projects from "../Components/projects/Projects";
import "../Components/home/Home.css"

function Home() {
    return (
        <section id="home">
            <Bio />
			<Projects />
        </section>
    );
}

export default Home;
