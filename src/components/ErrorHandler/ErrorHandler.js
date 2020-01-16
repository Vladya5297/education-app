import React from 'react';
import classes from './ErrorHandler.module.css';
import {connect} from 'react-redux';

// ErrorHandler component
const ErrorHandler = (props) => {
  const ErrorPage = (<div className={classes.error}>
    <div className={classes.title}>Ooops, something went wrong =(</div>
    <div className={classes.errorDino} />
  </div>);
  return (
    <>
      {props.error ? ErrorPage : props.children}
    </>
  );
};

// Переменная для прокидывания данных из store в компонент
const mapStateToProps = (state) => ({
  error: state.error,
});

// Подключаем компонент к store
export default connect(mapStateToProps)(ErrorHandler);
