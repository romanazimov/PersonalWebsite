import './Portfolio.scss';
import gymImage from '../../images/proj_gym.png'
import swaggerApiImage from '../../images/swagger_api.png'
import ecomCandleImage from '../../images/ecom_candle.png'
import Project from './Project';

function Portfolio() {
    return(
        <section id='portfolio'>
            <div className='container'>
                <p className='title'>PORTFOLIO</p>
                <div className='project-cont'>
                    <Project
                        image={ecomCandleImage}
                        primaryText="[In Progress] Ecommerce Store"
                        secondaryText="Utilizing a headless architecture, this ecommerce candle shop integrates 
                        securely with the back-end for data management and Stripe for seamless payment processing."
                        technologies={['React+Vite', 'Redux', 'Stripe']}
                        githubLink="https://github.com/romanazimov/candle-app"
                        demoLink="https://candle.romanazimov.com/"
                    />
                    <Project
                        image={swaggerApiImage}
                        primaryText="Ecommerce Candle API"
                        secondaryText="The backend API for an ecommerce application to manage user data, 
                        purchase orders, authentication using JWT, and authorization."
                        technologies={['.NET Core', 'Entity FWK', 'PostgreSQL']}
                        githubLink="https://github.com/romanazimov/CandleApi"
                        demoLink=""
                    />
                    <Project
                        image={gymImage}
                        primaryText="GYM24"
                        secondaryText="A simple yet effective single page application showcasing the gym, perks, 
                        memberships, and team that it has to offer."
                        technologies={['React', 'TypeScript']}
                        githubLink="https://github.com/romanazimov/gym-app"
                        demoLink="https://gym.romanazimov.com/"
                    />
                </div>
            </div>
        </section>
    );
}

export default Portfolio;