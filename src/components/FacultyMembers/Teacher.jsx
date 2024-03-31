import React from 'react'
import classes from './about.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Teacher(props){
    return (
        <Col lg='3' md='6'>
        <div className={classes.team_col}>
        <div className={classes.team_item}>
            <div className={classes.team_image}><img src={props.image} alt=""></img></div>
            <div className={classes.team_body}>
                <div className={classes.team_title}><a href="#">{props.title}</a></div>
                <div className={classes.team_subtitle}>{props.subtitle}</div>
            </div>
        </div>
    </div>
    </Col>
    )
}
Teacher.defaultProps = {image: "../../style/img/team_1.jpg", title: "Jacke Masito", subtitle: "Marketing & Management"};
export default Teacher