import React from 'react';
import dataFields from '../../store/dataFields.js';
import classes from './gridStyle.module.css';
import defaultIcon from '../../icons/defaultUserIcon.svg';
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

const gridViewConfiguration = (users, marker, width) => {
  // Создаём массив компонентов - карточек пользователя
  const slots = users.map(
      (user) => {
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
          <div key={user[dataFields.id]} className={classes.slot}>
            {fields[0]}
            <div className={classes.icon}>
              <img src={user[dataFields.icon] || defaultIcon}
                alt={'User avatar'} />
            </div>
            {fields.slice(1)}
          </div>
        );
      },
  );

  // Количество карточек в ряду
  const slotsPerRow = Math.floor(width / 140);

  // Компонент ряд
  const Row = ({index, style}) => {
    const slotIndex = index * slotsPerRow;
    return (
      <div className={classes.row} style={style}>
        {slots.slice(slotIndex, slotIndex + slotsPerRow)}
      </div>
    );
  };

  // Количество рядов
  const itemCount = Math.ceil(slots.length / slotsPerRow);

  // Высота ряда
  const itemSize = 195;

  // Количество компонентов для предзагрузки
  const overscanCount = 5;

  return [itemCount, itemSize, Row, overscanCount];
};

export default gridViewConfiguration;
