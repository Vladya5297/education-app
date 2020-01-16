import {CHANGE_SORT_TYPE} from '../actionTypes.js';

// Начальное состояние
const initState = 'none';

/**
 * @param {Object} state Текущее состояние
 * @param {Object} action Действие
 * @return {Object} Изменённое состояние
 */
export default function(state = initState, action) {
  switch (action.type) {
    case CHANGE_SORT_TYPE:
    {
      return action.sort;
    }
    default:
    {
      return state;
    }
  }
}
