import React, {useState} from 'react';
import classes from './PopularDestination.module.css';
import destinationImage from '../../style/img/destination.png';
import { Button } from 'react-bootstrap';
import '../../style/css/style.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const PopularDestination = function (props) {
    return (
       <div className= {classes.destination}>
            <div className={classes.destinationImageContainer}>
                
            </div>
            <div className={classes.destinationTitleContainer}>
                <h2>{props.post.title}</h2>
            </div>
            <div className={classes.destinationBodyContainer}>
                <h4>{props.post.body}</h4>
            </div>
            <div className={classes.destinationBodyFooter}>
            <hr></hr>
            <Row className="justify-content-md-center">
                <Col xs lg="8">
                    <div className={classes.budgetPlaces}>
                    <p>{props.post.budgetPlacesCount}</p><p> {props.post.budgetPlaces}</p>
                    </div>
                </Col>
                <Col xs lg="4">
                    <Button>Read</Button>
                </Col>
            </Row>
            </div>
       </div> 
    )
}
export default PopularDestination;