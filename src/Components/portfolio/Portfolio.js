import './Portfolio.scss';
import gymImage from '../../images/proj_gym.png'
import dotnetImage from '../../images/dotnet-core.jpeg'
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
                        image={dotnetImage}
                        primaryText="[IN PROGRESS] Ecommerce Shop API"
                        secondaryText="The backend of the ecommerce app to handle users, purchase orders, authentication and authorization."
                        technologies={['.NET Core', 'Entity FWK', 'PostgreSQL']}
                        githubLink="https://github.com/romanazimov/"
                        demoLink="https://romanazimov.com/"
                    /> */}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;