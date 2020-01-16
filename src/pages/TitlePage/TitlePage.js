import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './TitlePage.module.css';

// TitlePage component
const TitlePage = () => {
  return (
    <div className={classes.wrapper}>
      <NavLink to={'/main'}>Let's do some magic</NavLink>
    </div>
  );
};

export default TitlePage;
