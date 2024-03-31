import react from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Teacher from './Teacher';
import classes from './about.module.css'
import levchenko from '../../style/img/levchenko.jpg'
import grinyak from '../../style/img/grinyak3.jpg'
import kiykova from '../../style/img/kiykova.jpg'



const FacultyMembers = function(props) {  
	return(
		<div className={classes.team} id='members'>
			<Container>
				<Row className='justify-content-center'>
					<Col lg='12'>
						<div className={classes.section_title_container}>
							<h2 className={classes.section_title}>{props.siteText.title}</h2>
							<div className={classes.section_subtitle}><p>{props.siteText.desc}</p></div>
						</div>
					</Col>
				</Row>
				<div className={classes.team_row}>
					<Row className='justify-content-center'>
					<Teacher image={levchenko} title={"Levchenko Dmitry Maksimovich"} subtitle={props.siteText.levchenkoDesc}/>
					<Teacher image={grinyak} title={"Grinyak Vicktor Mikhailovich"} subtitle={props.siteText.grinyakDesc}/>
					<Teacher image={kiykova} title={"Kiykova Elena Valerievna"} subtitle={props.siteText.kiykovaDesc}/>
					</Row>
				</div>
			</Container>
		</div>
	);
}
export default FacultyMembers