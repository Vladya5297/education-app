import React from 'react';
import classes from './Select.module.css';

/**
 * @callback callback
 * @param {*} props
 * @param {callback} props.onChangeHandler Функция, вызываемая по нажатию
 * @param {string[]} props.children Названия опций
 * @return {JSX} Select component
 */

const Select = (props) => {
  // Создаём массив опций
  const options = React.Children.map(props.children, (elem) => {
    return (
      <option key={elem} value={elem}>{elem}</option>
    );
  });
  // Используем хук состояния, чтобы сделать компонент управляемым
  const [value, setValue] = React.useState('none');
  // Обработчик событий
  const handleChange = (event) => {
    // Обновляем состояние
    setValue(event.target.value);
    // Если обработчик передан - вызываем его
    props.onChangeHandler &&
            props.onChangeHandler(event.target.value);
  };
  return (
    <select onChange={handleChange}
      value={value}
      className={classes.select}>
      <option value={'none'}>none</option>
      {options}
    </select>
  );
};

export default Select;
