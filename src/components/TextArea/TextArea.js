import React from 'react';
import classes from './TextArea.module.css';
import crossIcon from '../../icons/crossIcon.svg';

/**
 * @param {*} props
 * @return {JSX} TextArea component
 */
const TextArea = (props) => {
  // Используем хук состояния, чтобы сделать компонент управляемым
  const [text, setText] = React.useState('');
  // Обработчик событий
  const handleChange = (event) => {
    // Обновляем состояние
    setText(event.target.value);
    // Если обработчик передан - вызываем его
    props.onChangeHandler &&
      props.onChangeHandler(event.target.value);
  };
  return (
    <div className={classes.wrapper}>
      <input
        type={'text'}
        className={classes.textArea}
        value={text}
        onChange={handleChange}
        placeholder={props.placeholder} />
      { // если в поле есть текст - отобразить кнопку очистки
        text &&
        <img src={crossIcon} alt={'x'} className={classes.cross}
          onClick={() => {
            setText('');
            props.onChangeHandler('');
          }} />
      }
    </div>
  );
};

export default TextArea;
