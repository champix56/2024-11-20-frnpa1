import {combineReducers, createStore} from '@reduxjs/toolkit';
import reducer, { update } from './current';
import ressourcesReducer from './ressources';

export const store = createStore(combineReducers({current:reducer,ressources:ressourcesReducer}));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(update( {id: 12, name: 'toto'}));
store.dispatch({type: 'current/update', payload: {id: 1, name: 'coca'}});
store.dispatch({type: 'current/update', payload: {stock: 24}});
