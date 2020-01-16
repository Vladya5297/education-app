import React from 'react';
import dataFields from '../../store/dataFields.js';
import classes from './groupStyle.module.css';
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

const groupViewConfiguration = (users, marker, width) => {
  // Создаём массив, содержащий уникальные значения групп
  const groupTypes = [];
  for (const user of users) {
    if (!groupTypes.includes(user[dataFields.group])) {
      groupTypes.push(user[dataFields.group]);
    }
  }
  // Переменная для хранения компонентов групп
  const groups = [];
  // Переменная для хранения количества дочерних элементов
  // в каждой группе
  const groupsLengths = [];
  // Цикл по каждой группе
  for (const groupName of groupTypes) {
    // Отфильтровываем пользователей по группе
    const filteredUsers = users.filter(
        (user) => user[dataFields.group] === groupName,
    );
    // Сохраняем полученное число элементов
    groupsLengths.push(filteredUsers.length);
    // Добавляем новый компонент в массив
    groups.push(
        <div key={String(groupName)} className={classes.group}>
          <strong>{groupName}</strong>

          {filteredUsers.map((user) => {
          // Создаём массив необходимых полей объекта
            const fields = [
              {id: user[dataFields.id] + 0.1, data: user[dataFields.name]},
              {id: user[dataFields.id] + 0.2, data: user[dataFields.phone]},
            ].map(
                (field) => (
                  <MarkerableField key={field.id} marker={marker}>
                    {field.data}
                  </MarkerableField>
                ),
            );
            return (
              <div key={user[dataFields.id]} className={classes.slot}>
                {fields}
              </div>
            );
          })}

        </div>,
    );
  }

  // Количество групп в ряду
  const groupsPerRow = Math.floor(width / 140);

  // Компонент ряд
  const Row = ({index, style}) => {
    const slotIndex = index * groupsPerRow;
    return (
      <div className={classes.row} style={style}>
        {groups.slice(slotIndex, slotIndex + groupsPerRow)}
      </div>
    );
  };

  // Количество рядов
  const itemCount = Math.ceil(groups.length / groupsPerRow);

  // Высота ряда
  debugger;
  const itemSize = Math.max(...groupsLengths) * 60 + 35;

  // Количество компонентов для предзагрузки
  const overscanCount = 1;

  return [itemCount, itemSize, Row, overscanCount];
};

export default groupViewConfiguration;
