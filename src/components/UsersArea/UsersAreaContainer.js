import React from 'react';
import {connect} from 'react-redux';
import viewTypes from '../../store/viewTypes.js';
import dataFields from '../../store/dataFields.js';
import UsersArea from './UsersArea.js';
import {qsort} from '../../scripts/qsort.js';
import tableUsersArea
  from '../../scripts/tableViewConfiguration/tableViewConfiguration.js';
import gridUsersArea
  from '../../scripts/gridViewConfiguration/gridViewConfiguration.js';
import groupUsersArea
  from '../../scripts/groupViewConfiguration/groupViewConfiguration.js';

/**
 * @param {*} props
 * @return {JSX} UsersArea component
 */
const UsersAreaContainer = (props) => {
  // Создаём поверхностную копию массива данных
  let users = [...props.users];
  // Если задана фраза для фильтрации
  if (props.filterBy !== '') {
    // Создаём массив из элементом содержащих искомую фразу
    users = users.filter((user) => {
      // Переменная флаг - показывает соответствие элемента условию
      let flag = false;
      // Производим поиск фразы по каждому полю объекта
      for (const key in user) {
        // Игнорируем поле id и проверяем наличие в строке искомой фразы
        if (key !== dataFields.id &&
          user[key].toLowerCase()
              .includes(props.filterBy.toLowerCase())) {
          flag = true;
        }
      }
      return flag;
    });
  }
  // Если задан параметр сортировки
  if (props.sortBy !== 'none') {
    // Вызываем функцию сортировки
    users = qsort(users, (a, b) => {
      // Сравниваем указанные поля, а так же проверяем их на undefined
      if (a[props.sortBy] < b[props.sortBy] ||
        (!a[props.sortBy] && b[props.sortBy])) {
        return -1;
      }
      if (a[props.sortBy] > b[props.sortBy] ||
        (a[props.sortBy] && !b[props.sortBy])) {
        return 1;
      }
      return 0;
    });
  }

  // В зависимости от текущего состояния,
  // выбираем функцию для настройки отображения
  const currentViewFunc =
    (props.view === viewTypes.table && tableUsersArea) ||
    (props.view === viewTypes.grid && gridUsersArea) ||
    (props.view === viewTypes.group && groupUsersArea);

  return (
    <UsersArea
      users={users}
      getUsers={props.getUsers}
      marker={props.filterBy}
      configViewFunc={currentViewFunc} />
  );
};

// Переменная для прокидывания данных из store в компонент
const mapStateToProps = (state) => ({
  users: state.users,
  sortBy: state.sortBy,
  filterBy: state.filterBy,
  view: state.view,
});

// Подключаем компонент к store
export default connect(mapStateToProps)(UsersAreaContainer);
