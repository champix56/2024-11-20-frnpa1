import {combineReducers, configureStore} from '@reduxjs/toolkit';
import currentReducer, {update} from './current';
import ressourcesReducer from './ressources';

const store = configureStore({
  reducer:combineReducers({current: currentReducer, ressources:ressourcesReducer}),
});

store.subscribe(() => {
  console.log(store.getState());
});
// store.dispatch(
//   update({id: 1, name: 'toto', description: '', image: '', prix: 10}),
// );
// store.dispatch(
//   update({
//     id: 1,
//     name: 'toto',
//     description: '',
//     image: '',
//     prix: 10,
//     stock: 10,
//   }),
// );
export default store;
