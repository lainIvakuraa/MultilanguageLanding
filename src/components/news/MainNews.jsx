import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'; 
import China_news from '../../style/img/China news.svg'
import classes from './News.module.css'

const MainNews = function(porps) {
    return(
            <div className={classes.Main_News }> {/*Main-News*/}
              <img src={China_news} className={classes.China_news} alt="" />
              <p className={classes.Main_Article}>
                The number of Chinese partner universities is increasing at VVGU
              </p>
              <p className={classes.Author}>
                ADMIN    |    SEPTEMBER 9, 2016
              </p>
              <p className={classes.Desc}>
                The Rector of VVGU Tatiana Terentyeva and Ms. He Ying, Rector of one of the largest universities in China...
              </p>
            </div>      
    );   
}
export default MainNews