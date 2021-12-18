import {Fragment} from 'react';
import Cards from '../components/Card';

export default function Experience () {

		const education1 = {
				title: 'Zuitt BootCamp',
				sub: 'September-December 2021',
				content1: 'Full Stack Web Developer'
			}

		const education2 = {
				title: 'Polytechnic University of the Philippines-Manila',
				sub: 'April 2016',
				content1: 'Bachelor of Science in Electronics Engineering.'
				
			}

	return (
		<Fragment>
			<Cards details={education1}/>
			<Cards details={education2}/>
		</Fragment>

	)
}