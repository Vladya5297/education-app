import React from 'react';
import Button from '../../components/Button/Button.js';
import Select from '../../components/Select/Select.js';
import TextArea from '../../components/TextArea/TextArea.js';
import UsersArea from '../../components/UsersArea/UsersAreaContainer.js';
import dataFields from '../../store/dataFields.js';
import classes from './MainPage.module.css';
import ErrorHandler from '../../components/ErrorHandler/ErrorHandler.js';
import viewTypes from '../../store/viewTypes.js';

/**
 * @callback callback
 * @param {*} props
 * @param {callback} props.enableTableView Включение табличного вида
 * @param {callback} props.enableGridView Включение сеточного вида
 * @param {callback} props.enableGroupView Включение группового вида
 * @param {callback} props.changeSortType Изменить поле сортировки
 * @param {callback} props.changeFilterWord Изменить фразу фильтрации
 * @return {JSX} MainPage component
 */

const MainPage = (props) => {
  // Получаем список пользователей с помощью запроса
  React.useEffect(() => props.getUsers());
  return (
    <div className={classes.page}>
      <div className={classes.header}>
        <div className={classes.left}>
          <Button onClickHandler={props.enableTableView}>table</Button>
          <Button onClickHandler={props.enableGridView}>grid</Button>
          <Button onClickHandler={props.enableGroupView}>group</Button>
        </div>
        <div className={classes.center}>
          SafeBoard
        </div>
        <div className={classes.right}>
          <span style={{width: '55px'}}>Sort by</span>
          <Select onChangeHandler={props.changeSortType}>
            {dataFields.name}
            {dataFields.phone}
            {dataFields.group}
          </Select>
          <TextArea
            placeholder={'Type something to filter'}
            onChangeHandler={props.changeFilterWord} />
        </div>
      </div>
      <ErrorHandler>
        {props.view === viewTypes.table &&
        <div className={classes['table-header']}>
          <div>{dataFields.name}</div>
          <div>{dataFields.phone}</div>
          <div>{dataFields.group}</div>
        </div>}
        <div className={classes.main}>
          <UsersArea />
        </div>
      </ErrorHandler>
    </div>
  );
};

export default MainPage;
