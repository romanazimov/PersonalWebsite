import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <section id="contact">
            <div className='container'>
                <p className='title'>CONTACT</p>
                <div className='content'>
                    <div className='icon-container'>
                        <FontAwesomeIcon className="icon-email" icon={faEnvelopeOpenText} />
                    </div>
                    <div className='email-info'>
                        <p className='primary-text'>Email</p>
                        <a className="secondary-text" href="mailto:azimov308@live.com">azimov308@live.com</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;