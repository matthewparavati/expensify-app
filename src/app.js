import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';

const store = configureStore();

store.dispatch(
  addExpense({
    description: 'Water Bill',
    note: 'Water Bill',
    amount: 4500,
  }),
);

store.dispatch(
  addExpense({
    description: 'Gas Bill',
    note: 'Gas Bill',
    amount: 500,
    createdAt: 1000,
  }),
);

store.dispatch(
  addExpense({
    description: 'Rent',
    note: 'Rent',
    amount: 109500,
  }),
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
