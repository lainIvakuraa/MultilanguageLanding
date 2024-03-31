import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import classes from './PopularDestinations.module.css';
import PopularDestination from '../destination/PopularDestination';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap';

const PopularDestinations = function (props) {
    return (
        <div className={classes.destinations} id='destinations'>
            <Container fluid="md">
                <h1 className={classes.destinationsHeader}>{props.siteText.Title}</h1>
                
                <div className={classes.destinationsContent}>
                <Row className="justify-content-center">
                <Carousel variant="dark" indicators={false}>
                    <CarouselItem>
                        <Row className="justify-content-center">
                    <Col xs lg="6">
                    {/*<Row className="justify-content-center">*/}
                    <div className={classes.destinationContainer}>
                        <PopularDestination post={{id:1, title:props.siteText.destinationSoftwareEngineeringTitle1, body:props.siteText.destinationSoftwareEngineeringDesc1, budgetPlacesCount:props.siteText.destinationSoftwareEngineeringPlaceCount1, budgetPlaces:props.siteText.destinationSoftwareEngineeringPlace}}></PopularDestination>
                        </div>
                        </Col>
                        <Col xs lg="6">
                        <div className={classes.destinationContainer}>
                        <PopularDestination post={{id:2, title:props.siteText.destinationSoftwareEngineeringTitle2, body:props.siteText.destinationSoftwareEngineeringDesc2, budgetPlacesCount:props.siteText.destinationSoftwareEngineeringPlaceCount2, budgetPlaces:props.siteText.destinationSoftwareEngineeringPlace}}></PopularDestination>
                        </div>
                        </Col>
                        </Row>
                        </CarouselItem>
                        <CarouselItem>
                        <Row className="justify-content-center">
                        <Col xs lg="6">
                        <div className={classes.destinationContainer}>
                        <PopularDestination post={{id:3, title:props.siteText.destinationSoftwareEngineeringTitle3, body:props.siteText.destinationSoftwareEngineeringDesc3, budgetPlacesCount:props.siteText.destinationSoftwareEngineeringPlaceCount3, budgetPlaces:props.siteText.destinationSoftwareEngineeringPlace}}></PopularDestination>
                        </div>
                        </Col>
                        <Col xs lg="6">
                        <div className={classes.destinationContainer}>
                        <PopularDestination post={{id:3, title:props.siteText.destinationSoftwareEngineeringTitle3, body:props.siteText.destinationSoftwareEngineeringDesc3, budgetPlacesCount:props.siteText.destinationSoftwareEngineeringPlaceCount3, budgetPlaces:props.siteText.destinationSoftwareEngineeringPlace}}></PopularDestination>
                        </div>
                        </Col>
                        </Row>
                        </CarouselItem>
                        </Carousel>
                </Row>
                </div>
                
                <Button>{props.siteText.destinationSoftwareEngineeringViewAllBtn}</Button>
            </Container>
        </div>    
    )
}
export default PopularDestinations;