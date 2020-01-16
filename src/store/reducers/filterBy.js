import {CHANGE_FILTER_WORD} from '../actionTypes.js';

// Начальное состояние
const initState = '';

/**
 * @param {Object} state Текущее состояние
 * @param {Object} action Действие
 * @return {Object} Изменённое состояние
 */
export default function(state = initState, action) {
  switch (action.type) {
    case CHANGE_FILTER_WORD:
    {
      return action.filter;
    }
    default:
    {
      return state;
    }
  }
}
