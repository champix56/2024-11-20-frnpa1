import {combineReducers, configureStore} from '@reduxjs/toolkit';
import currentReducer, {update} from './current';
import ressourcesReducer, { loadRessourcesDatas } from './ressources';

function r(s = {}, a: {type: string}) {
  console.log(a);
  return s;
}

const store = configureStore({
  reducer: combineReducers({
    current: currentReducer,
    ressources: ressourcesReducer,
    ecouteur: r,
  }),
});

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(loadRessourcesDatas());
export default store;
export type TStoreState = ReturnType<typeof store.getState>;
