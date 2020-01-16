import {SET_ERROR} from '../actionTypes.js';

// Начальное состояние
const initState = false;

/**
 * @param {Object} state Текущее состояние
 * @param {Object} action Действие
 * @return {Object} Изменённое состояние
 */
export default function(state = initState, action) {
  switch (action.type) {
    case SET_ERROR:
    {
      return action.state;
    }
    default:
    {
      return state;
    }
  }
}
