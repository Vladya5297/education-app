import React from 'react';
import classes from './tableStyle.module.css';
import dataFields from '../../store/dataFields.js';
import MarkerableField
  from '../../components/MarkerableField/MarkerableField.js';

/**
   * @param {Object[]} users Массив данных
   * @param {string} marker Выделяемая фраза
   * @param {number} width Ширина блока
   * @return {number} itemCount Количество элементов списка
   * @return {number} itemSize Размер элемента
   * @return {JSX} Row Компонент ряд
   * @return {number} overscanCount Количество элементов для предзагрузки
   */

const tableViewConfiguration = (users, marker, width) => {
  // Компонент ряд
  const Row = ({index, style}) => {
    const user = users[index];
    // Создаём массив необходимых полей объекта
    const fields = [
      {id: user[dataFields.id] + 0.1, data: user[dataFields.name]},
      {id: user[dataFields.id] + 0.2, data: user[dataFields.phone]},
      {id: user[dataFields.id] + 0.3, data: user[dataFields.group]},
    ].map(
        (field) =>
          <MarkerableField key={field.id} marker={marker}>
            {field.data}
          </MarkerableField>,
    );
    return (
      <div style={style}
        className={`${classes.row} ${
          index % 2 ? classes['row-odd'] : classes['row-even']
        }`}>
        {fields}
      </div>
    );
  };

  // Количество рядов
  const itemCount = users.length;

  // Высота ряда
  const itemSize = 25;

  // Количество компонентов для предзагрузки
  const overscanCount = 25;

  return [itemCount, itemSize, Row, overscanCount];
};

export default tableViewConfiguration;
