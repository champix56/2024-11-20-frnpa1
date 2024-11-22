import {createSlice} from '@reduxjs/toolkit';
import {IProduct} from '../interfaces/IProduct';

const initialState: IProduct = {
  description: '',
  name: '',
  prix: 0,
  stock: 0,
  image: '',
  id: undefined,
};

const current = createSlice({
  name: 'current',
  initialState,
  reducers: {
    update(
      oldState,
      action: {
        payload: IProduct;
        type: string;
      },
    ) {
      Object.assign(oldState, action.payload);
    },
    clear(oldState) {
      Object.assign(oldState, initialState);
    },
  },
});

export const {clear,update} = current.actions;

const currentReducer= current.reducer;
export default currentReducer;