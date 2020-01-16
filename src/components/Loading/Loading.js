import React from 'react';
import classes from './Loading.module.css';

// Loading component
const Loading = () => {
  return (
    <div className={classes.loading}>
      <div className={classes.circle} />
    </div>);
};

export default Loading;
