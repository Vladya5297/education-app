import React from 'react';
import classes from './MarkerableField.module.css';

/**
 * @param {*} props
 * @param {string} props.marker Выделяемая фраза
 * @param {string} props.children Исходная строка
 * @return {JSX} MarkerableField component
 */

const MarkerableField = (props) => {
  // Создаём регулярное выражение для поиска
  const regexp = RegExp(props.marker, 'gi');
  // Делаем копию переданной строки
  const initialText = props.children;
  // Массив для хранения элементов текста и выделенной части
  const markeredText = [];
  // Если передана одна строка и она содержит искомый текст
  if (React.Children.count(props.children) === 1 &&
        regexp.test(initialText)) {
    initialText.replace(regexp, (match, index) => {
      // Добавляем в массив часть строки до искомой
      markeredText[0] = initialText.slice(0, index);
      // Искомую часть обрамляем в span для подсветки
      markeredText[1] = <span key={index} className="marker">{match}</span>;
      // Часть строки после искомой
      markeredText[2] = initialText.slice(index + match.length);
    });
  } else {
    // Иначе в массив передаём исходную строку
    markeredText.push(initialText);
  }
  return (
    <div className={classes.field}>
      {markeredText}
    </div>
  );
};

export default MarkerableField;
