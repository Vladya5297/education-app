import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import view from './reducers/view.js';
import users from './reducers/users.js';
import sortBy from './reducers/sortBy.js';
import filterBy from './reducers/filterBy.js';
import error from './reducers/error.js';

// Создаём redux хранилище
export default createStore(combineReducers({
  view,
  sortBy,
  filterBy,
  users,
  error,
}), applyMiddleware(thunk));
