import '../styles/Skills.css';

import { Fragment } from "react";
import { Container, Row, Col, ProgressBar} from "react-bootstrap";


export default function Skills() {
	const html = 80;
	const rjs = 60;
	const bootstrap = 70;
	const js = 60;
	const node= 70;
	const ejs = 70;
	const monggo = 70;

	return (
		<Fragment>
			<Container fluid>
			<Row className='mb-5 ms-auto'>
				<Col md={5}sm={6} className='m-3'>
				<h4>Front-end</h4>
				<img src='./image/fed.png'/>
				</Col>
				<Col md={5} sm={4} className='ms-3 p-3'>
				<h4>Level of Expertise</h4>
				<h6>HTML & CSS</h6>
				<ProgressBar now={html} label={`${html}`}/>
				<h6>Bootstrap</h6>
				<ProgressBar now={bootstrap} label={`${bootstrap}`}/>
				<h6>JavaScript</h6>
				<ProgressBar now={js} label={`${js}`}/>
				<h6>ReactJs</h6>
				<ProgressBar now={rjs} label={`${rjs}`}/>
				</Col>
			</Row>
			<Row className='mt-5 ms-auto'>
				<Col md={5}sm={6} className='m-3'>
				<h4>Back-end</h4>
				<img src='./image/bed.png'/>
				</Col>
				<Col md={5} sm={4} className='ms-3 p-3'>
				<h4>Level of Expertise</h4>
				<h6>NodeJS</h6>
				<ProgressBar now={node} label={`${node}`}/>
				<h6>ExpressJs</h6>
				<ProgressBar now={ejs} label={`${ejs}`}/>
				<h6>Mongoose/MongoDB</h6>
				<ProgressBar now={monggo} label={`${monggo}`}/>
				<h6>RESTful API</h6>
				<ProgressBar now={js} label={`${js}`}/>
				</Col>
			</Row>
			<Row className='mt-5 ms-auto'>
				<Col md={5}sm={6} className='m-3'>
				<h4>Version Controls</h4>
				<img src='./image/tool.png'/>
				</Col>
				
			</Row>
			</Container>
		</Fragment>
	)
}