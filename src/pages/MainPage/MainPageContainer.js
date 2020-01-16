import {connect} from 'react-redux';
import {
  changeMainPageView,
  changeSortType,
  changeFilterWord,
  getUsers,
} from '../../store/actionCreators.js';
import viewTypes from '../../store/viewTypes.js';
import MainPage from './MainPage.js';

// Переменная для прокидывания данных из store в контейнерный компонент
const mapStateToProps = (state) => ({
  view: state.view,
});

// Переменная для прокидывания действий в контейнерный компонент
const mapDispatchToProps = (dispatch) => ({
  enableTableView: () => {
    dispatch(changeMainPageView(viewTypes.table));
  },
  enableGridView: () => {
    dispatch(changeMainPageView(viewTypes.grid));
  },
  enableGroupView: () => {
    dispatch(changeMainPageView(viewTypes.group));
  },
  changeSortType: (sort) => {
    dispatch(changeSortType(sort));
  },
  changeFilterWord: (filter) => {
    dispatch(changeFilterWord(filter));
  },
  getUsers: () => {
    dispatch(getUsers());
  },
});

// Подключаем компонент к store
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainPage)
;
