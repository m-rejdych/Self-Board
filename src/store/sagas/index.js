import { all } from 'redux-saga/effects';
import { setLoadNews } from './newsFeedSagas';
import { setAuth } from './authSagas';
import {
  setPostTodo,
  setLoadTodos,
  setDeleteTodo,
  setPatchCheckTodo,
} from './todosSagas';
import {
  setPostAppointment,
  setLoadAppointments,
  setUpdateAppointments,
  setDeleteAppointment,
} from './calendarSagas';

function* rootSaga() {
  yield all([
    setLoadNews(),
    setAuth(),
    setPostTodo(),
    setLoadTodos(),
    setDeleteTodo(),
    setPatchCheckTodo(),
    setPostAppointment(),
    setLoadAppointments(),
    setUpdateAppointments(),
    setDeleteAppointment(),
  ]);
}

export default rootSaga;
