import {Fragment} from 'react';
import Cards from '../components/Card';

export default function Experience () {

		const experience1 = {
				title: 'Sr. PCB Designer',
				sub: 'Key Role:',
				content1: 'Designed various Printed Wiring Boards depending on customer/consumer specifications.',
				content2: 'Studied PCB standards in routing high speed signals (USB 2.0, 3.0, DDR, PCIE).',
				content3: 'Conduct Circuit Analysis and familiar with Power Integrity.',
				content4: 'Designed PCB/PWB using ZUKEN Board Design and VALOR Enterprise 3000 for CAM check.',
				content5: 'Products: Motherboards, printers, medical equipment and test boards.'
			}

		const experience2 = {
				title: 'Right -of- Way Officer',
				sub: 'Key Role:',
				content1: 'Secured permits from LGUs and private sectors for PLDT Fiber Optic Laying Projects.',
				content2: 'Presents plan review and other documents for construction/rehabilitation to clients and subcontractors.'
			}

	return (
		<Fragment>
			<Cards details={experience1}/>
			<Cards details={experience2}/>
		</Fragment>

	)
}