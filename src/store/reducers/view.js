import {CHANGE_MAIN_PAGE_VIEW} from '../actionTypes.js';
import viewTypes from '../viewTypes.js';

// Начальное состояние
const initState = viewTypes.table;

/**
 * @param {Object} state Текущее состояние
 * @param {Object} action Действие
 * @return {Object} Изменённое состояние
 */
export default function(state = initState, action) {
  switch (action.type) {
    case CHANGE_MAIN_PAGE_VIEW:
    {
      return action.view;
    }
    default:
    {
      return state;
    }
  }
}
