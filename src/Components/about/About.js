import './About.scss'
import coffee_work from '../../images/cofee_work.png'

function About() {
    return (
        <section id="about">
            <div className="container">
                <img className="img-about" src={coffee_work} alt={""} />
                <div>
                    <p className='title'>ABOUT ME</p>
                    <p className='secondary-text'>As a full-stack developer, I bring extensive professional experience in back-end 
                        development along with front-end expertise in working with large datasets.  With 
                        a knack for design, I can transform ideas into engaging user experiences and handle 
                        end-to-end deployment and hosting configurations. Beyond my professional work, I'm
                        an avid front-end enthusiast, pursuing it as a hobby and showcasing my skills through
                        this personal website. When I'm not coding, you can find me exploring the great
                        outdoors, exercising, or enjoying my time out on the water.</p>
                </div>
            </div>
        </section>
    );
}

export default About;