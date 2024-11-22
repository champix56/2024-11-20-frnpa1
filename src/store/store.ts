import {combineReducers, configureStore} from '@reduxjs/toolkit';
import currentReducer from './current.slice';
import ressourcesReducer, {loadRessources} from './ressources.slice';

const store = configureStore({
  reducer: combineReducers({
    ressources: ressourcesReducer,
    current: currentReducer,
  }),
});

store.dispatch(loadRessources());
export type RootState = ReturnType<typeof store.getState>;
export default store;
