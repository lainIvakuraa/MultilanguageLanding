import react from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'; 
import classes from './Footer.module.css'
import background from './src/background.png'
import telegram from './src/telegram.png'
import vkont from './src/vk.png'
import vvsu from './src/VVSU.png'
import youtube from './src/youtube.png'
const Footer = function (props) {
    return (
        <div className={classes.site} id='footer'>
        <div className={classes.site_footer}>
            <div className={classes.site_top}>
                
                    
                    
                        <div className={classes.site_text}>
                        <Container>
                        <Row>
                            <Col lg='8'>
                            <div className={classes.left}>
                                <div className={classes.top_title}>
                                    {props.siteText.title}
                                </div>
                                <div className={classes.top_subtitle}>
                                {props.siteText.desc}
                                </div>
                            </div>
                            </Col>
                            <Col lg='4'>
                                <div className={classes.right}>
                                    <a href="#form" className={classes.site_btn}>{props.siteText.submitBtn}</a>
                                </div>
                            </Col>
                            </Row>
                            </Container>
                        </div>
                        
                    
                
            </div>
            <div className={classes.site_bot}>
                <Container>
                    <Row>
                        <div className={classes.desctiption}>
                        <Row>
                        <Col sm='12' lg='4' > {/*edge*/}
                            <img src={vvsu} className={classes.bot_logo} alt="vvsu"/>
                            <div className={classes.circle_social}>
                                <div className={classes.circle}> {/*ytb */}
                                    <a href="#" className={classes.site_ytb}><img src={youtube} alt="youtube"></img></a> {/*social */}
                                </div>
                                <div className={classes.circle}> {/*tg*/}
                                    <a href="#" className={classes.site_tg} ><img src={telegram} alt="telegram"></img></a> {/*social*/}
                                </div>
                                <div className={classes.circle}> {/*vk*/}
                                    <a href="#" className={classes.site_vk}><img src={vkont} alt="вконтакте"></img></a> {/*social*/}
                                </div>
                            </div>
                        </Col>
                        <Col sm='6' lg='4'> {/*middle about*/}
                        <div className={classes.about}>
                            <h4>{props.siteText.information}</h4>
                            <br></br>
                            
                            <ul>
                                <li>
                                    <a href="#">{props.siteText.about}</a>
                                </li>
                                <li>
                                    <a href="#">{props.siteText.informationAbout}</a>
                                </li>
                                
                                <li>
                                    <a href="#">{props.siteText.destination}</a>
                                </li>
                                
                                <li>
                                    <a href="#">{props.siteText.partnerUniverse}</a>
                                </li>
                            </ul>
                            </div>
                        </Col>
                        <Col sm='6' lg='4'> {/*edge about */}
                        <div className={classes.about}>
                            <h4>{props.siteText.contacts}</h4>
                            <br></br>
                            <a href="tel: +74232404023">8 (911) 345-23-45</a><br></br>
                            <a href="email: vvsu@edu.vvsu.ru">Email: vvgu@edu.vvsu.ru</a>
                            <br></br>
                            <br></br>
                            <h4>{props.siteText.location}</h4>
                            <br></br>
                            Gogol str., 41, Vladivostok, Primorsky Krai 690014
                            </div>
                        </Col>
                        </Row>
                        </div>
                        </Row>
                    <div className={classes.site_bot_copyright}>
                        © 2023 Vladivostok State University
                    </div>
                </Container>
            </div>
            
        </div>
    </div>
    )
}
export default Footer