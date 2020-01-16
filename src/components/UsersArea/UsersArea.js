import React from 'react';
import {FixedSizeList as List} from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import dataFields from '../../store/dataFields.js';

/**
 * @callback callback
 * @param {*} props
 * @param {Object[]} users Массив пользователей
 * @param {string} marker Выделяемая фраза
 * @param {callback} configViewFunc Функция, задающая вид
 * @return {JSX} UsersArea component
 */
const UsersArea = (props) => {
  return (
    // AutoSizer - компонент, импортированный из библиотеки,
    // высчитывает высоту и ширину родительского компонента
    <AutoSizer>
      {({height, width}) => {
        // Переменные для настройки списка
        const [itemCount, itemSize, Row, overscanCount] =
          // В функцию настройки передаём список пользователей,
          // фразу для маркировки и ширину блока
          props.configViewFunc(props.users, props.marker, width);
        return (
          // List - компонент, импортированный из библиотеки,
          // позволяет рендерить список частями
          <List
            height={height}
            width={width}
            itemCount={itemCount}
            itemSize={itemSize}
            itemKey={(index) => props.users[index][dataFields.id]}
            overscanCount={overscanCount}
          >
            {Row}
          </List>
        );
      }}
    </AutoSizer>
  );
};

export default UsersArea;
