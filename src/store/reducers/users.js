import {SET_USERS} from '../actionTypes.js';

const initState = '';

/**
 * @param {Object} state Текущее состояние
 * @param {Object} action Действие
 * @return {Object} Изменённое состояние
 */
export default function(state = initState, action) {
  switch (action.type) {
    case SET_USERS:
    {
      return action.users;
    }
    default:
    {
      return state;
    }
  }
}
