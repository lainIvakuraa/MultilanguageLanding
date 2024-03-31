import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'; 
import Classes from './Join.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Join = function(props){
    return (
        <div className = {Classes.Join} id="form">
        <Container>  
            <Row className="justify-content-sm-center">
                <Col xs lg="8">
                    <div className = {Classes.JoinUs}>
                    <h1>{props.siteText.title}</h1>
                    <p>{props.siteText.desc1} <br/> {props.siteText.desc2}
                    </p>
                    <div className={Classes.numbers}>
                        <div className={Classes.incoming}>
                            <h2>{props.siteText.incoming}</h2>
                            <p>{props.siteText.incomingText}</p>
                        </div>
                        <div className={Classes.line}>
                            
                        </div>
                        <div className={Classes.incoming}>
                            <h2>{props.siteText.graduated}</h2>
                            <p>{props.siteText.graduatedText}</p>
                        </div>                        
                        <div className={Classes.line}>
                            
                        </div>
                        <div className={Classes.incoming}>
                            <h2>{props.siteText.success}%</h2>
                            <p>{props.siteText.successText}</p>
                        </div>
                    </div>
                    </div>
                </Col>
                <Col sm = "8" lg="4" className="justify-content-sm-center">
<div className = {Classes.Direction}>
    <div className = {Classes.Choose}>
        <h2>{props.siteText.chooseDirection}</h2>
    </div>
    <div className = {Classes.Columns}>
        <Form.Control size="lg" type="text" placeholder={props.siteText.name} />
        <Form.Control size="lg" type="text" placeholder={props.siteText.surname} />
        <Form.Select size="lg">
        <option>{props.siteText.direction}</option>
        </Form.Select>   
        <Form.Check required label={props.siteText.agreement} feedback={props.siteText.agreementFeedback} feedbackType="invalid"/>
    </div>
    <div className = {Classes.Button}>
        <Button variant="primary" type="submit" size="lg">
            {props.siteText.submit}
        </Button>
    </div>
</div>
                </Col>
            </Row>
    </Container>
</div>
    );
} 
export default Join;