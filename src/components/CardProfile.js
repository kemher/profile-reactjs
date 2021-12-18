import '../styles/CardProfile.css';


import {useEffect} from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faMobileAlt, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faFacebook, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

export default function CardProfile () {

	return (
		<Card>
		  <Card.Img variant="top" src="./image/avatar-2.png" />
		  <Card.Body className='profile_details'>
		    <Card.Title className='Name'>Quinnie Maja</Card.Title>
		    <Card.Text><FontAwesomeIcon icon={faEnvelope}/> quinniemaja@gmail.com</Card.Text>
		    <Card.Text><FontAwesomeIcon icon={faMobileAlt}/> (+63) 918-4333-824</Card.Text>
		    <Card.Text><FontAwesomeIcon icon={faMapMarkerAlt}/> Makati, Philippines</Card.Text>
		    <a role='button' className="cv-button" aria-pressed='true' href='https://drive.google.com/file/d/1YsluMGVwG-SkdF1DIRZzlmUH-wY7uPyY/view?usp=sharing' target='_blank'>Download CV</a>
		    <div>
		    	<a href="https://github.com/kemher" target='_blank'><FontAwesomeIcon icon={faGithub} className='profile-icon'/></a>
		    	<a href="https://www.facebook.com/kwiniMaja/" target='_blank'><FontAwesomeIcon icon={faFacebook} className='profile-icon'/></a>
		    	<a href="https://linkedin.com/in/quinnie-maja" target='_blank'><FontAwesomeIcon icon={faLinkedinIn} className='profile-icon'/></a>
		    </div>

		  </Card.Body>
		</Card>
	)
}