import React from 'react'
import MainNews from './MainNews'
import SideNews from './SideNews'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import classes from './News.module.css'

const News = function(props) {
    return(
        <div className={classes.News}>
            <Container>
            <h2 className={classes.Latest_news}>Latest News</h2> 
            <Row>
            <Col lg='6'>
                <MainNews></MainNews>
            </Col>
            <Col lg='6'>
                <SideNews></SideNews>
            </Col>
            </Row>
            </Container>
        </div>
    );
}
export default News