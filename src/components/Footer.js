import {Link} from 'react-router-dom';

// css
import '../styles/Footer.css';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faFacebook, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
	return (
		<div className = 'Footer'>
			<div className="Footer-icon-box">
			<p className='notes'>You can reach me here</p>
			<a href="https://linkedin.com/in/quinnie-maja"><FontAwesomeIcon className='Footer-icons' icon={faLinkedinIn}/></a>
			<a href="https://www.facebook.com/kwiniMaja/"><FontAwesomeIcon className='Footer-icons' icon={faFacebook}/></a>
			<a href="https://github.com/kemher"><FontAwesomeIcon className='Footer-icons' icon={faGithub} /></a>
			</div>
		</div>

	)
}