import React from 'react'
import classes from './News.module.css'
import Button from 'react-bootstrap/Button';

const SideNews = function(props) {
    return(
        <div className={classes.Sub_News}>

              <div className={classes.Small_News}>
                <p className={classes.Small_Article}>
                  VVGU together with Chinese scientists held the second International Master's Forum in Harbin
                </p>
                  <p className={classes.Small_Author}>ADMIN | JUNE 25, 2015 </p>
                </div>
              <div className={classes.Line}/>

              <div className={classes.Small_News}>
                <p className={classes.Small_Article}>
                  Warm greetings from China: Graduates of the Institute of Pedagogy and Linguistics share their experience.
                </p>
                  <p className={classes.Small_Author}>ADMIN | JUNE 25, 2015 </p>
                </div>
              <div className={classes.Line}/>

              <div className={classes.Small_News}>
                <p className={classes.Small_Article}>
                  New prospects for cooperation between VVGU and the Chinese University of Culture
                </p>
                  <p className={classes.Small_Author}>ADMIN | JUNE 25, 2015 </p>
                </div>
              <div className={classes.Line_Last}/>

              <div className={classes.Small_News_Last}>
                <p className={classes.Small_Article}>
                  VVGU discussed the trends in the development of Chinese law
                </p>
                  <p className={classes.Small_Author}>ADMIN | JUNE 25, 2015 </p>
                </div>
                <Button>More News</Button>

            </div>
    );
}
export default SideNews