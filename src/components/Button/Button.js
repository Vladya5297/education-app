import React from 'react';
import classes from './Button.module.css';
/**
 * @callback callback
 * @param {Object} props
 * @param {callback} props.onClickHandler Функция, вызываемая по нажатию
 * @return {JSX} Button component
 */
const Button = (props) => {
  return (
    <button onClick={props.onClickHandler}
      className={classes.wrapper}>
      {props.children}
    </button>
  );
};

export default Button;
