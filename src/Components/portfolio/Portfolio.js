import './Portfolio.scss';
import gymImage from '../../images/proj_gym.png'
import Project from './Project';

function Portfolio() {
    return(
        <section id='portfolio'>
            <div className='container'>
                <p className='title'>PORTFOLIO</p>
                <div className='project-cont'>
                    <Project
                        image={gymImage}
                        primaryText="GYM24"
                        secondaryText="A simple yet effective single page application showcasing the gym, perks, memberships, and team that it has to offer."
                        technologies={['React', 'TypeScript']}
                        githubLink="https://github.com/romanazimov/gym-app"
                        demoLink="https://gym.romanazimov.com/"
                    />
                    {/* <Project
                        image={gymImage}
                        primaryText="[In Progress] Ecommerce Shop"
                        secondaryText="Utilizing a decoupled approach, the React front-end communicates with the .NET API to handle payment processing with Stripe."
                        technologies={['React', 'HTML', 'CSS', 'JavaScript']}
                        githubLink="https://github.com/romanazimov/gym-app"
                        demoLink="https://gym.romanazimov.com/"
                    /> */}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;