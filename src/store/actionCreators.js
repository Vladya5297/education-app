import {
  CHANGE_MAIN_PAGE_VIEW,
  CHANGE_SORT_TYPE,
  CHANGE_FILTER_WORD,
  SET_USERS,
  SET_ERROR,
} from './actionTypes.js';
import axios from 'axios';

// ActionCreator принимает параметр и возвращиет
// action с нужным типом и payload'ом

export const changeMainPageView = (view) =>
  ({type: CHANGE_MAIN_PAGE_VIEW, view});

export const changeSortType = (sort) => ({type: CHANGE_SORT_TYPE, sort});

export const changeFilterWord = (filter) =>
  ({type: CHANGE_FILTER_WORD, filter});

export const setUsers = (users) =>
  ({type: SET_USERS, users});

export const setError = (state) =>
  ({type: SET_ERROR, state});

// Thunk возвращает функцию, которая будет асинхронно запущена в store

export const getUsers = () => {
  return (dispatch) => {
    axios.post('/main', {get: 'users'})
        .then((response) => {
          dispatch(setUsers(response.data));
        })
        .catch((error) => {
          dispatch(setError(true));
        });
  };
};
