import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './Title.module.css'
import vvsu from '../../style/img/VVSU.png'
import handset from '../../style/img/Handset.png'
import mail from '../../style/img/mail.png'
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import DropdownButton from 'react-bootstrap/DropdownButton';


const Title = function (props) {
    return (
        <div className={classes.navigation}>
            <Container>
    
            <div className = {classes._header}>
                <Row>
                    <Col lg="5">
                        <div className={classes.logo}>
                            <img src={vvsu}></img>
                        </div>
                    </Col>
                    <Col lg="7">
                        <div className={classes.info}>
                            <div className={classes.phoneNum}>
                                <img src={handset}></img>
                                88005553535
                                </div>
                            <div className={classes.mail}>
                                <img src={mail}></img>
                                info.vvsu@gmail.com
                                </div>
                            <div className={classes.language}>
                            <DropdownButton
                            
                            title={props.siteText.Language}
                            id="input-group-dropdown-1"
                            >
                                <Dropdown.Item href="#" onClick={props.siteText.changeFuncChi}>中文</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#">Tiếng Việt</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#">한국어</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#"onClick={props.siteText.changeFuncEng}>English</Dropdown.Item>
                            </DropdownButton>
                                </div>
                        </div>
                        <nav>
                            <a href="#about" name='about'>{props.siteText.About}</a>
                            <a href="#destinations" name='destinations'>{props.siteText.Destinations}</a>
                            <a href="#form" name='form'>{props.siteText.Form}</a>
                            <a href="#members">{props.siteText.Members}</a>
                        </nav>
                    </Col>
                </Row>
            </div>
            </Container>
            <div className={classes.intro}>
                <Container>
                {props.siteText.Welcome} <u>{props.siteText.Vladivostok}</u><br></br>
                {props.siteText.Welcome} <u>{props.siteText.VVSU}</u> <br></br>
                {props.siteText.Welcome} <u>{props.siteText.ITS}</u> <br></br>
                </Container>
            </div>
        
    
    </div>
    );
}
export default Title;