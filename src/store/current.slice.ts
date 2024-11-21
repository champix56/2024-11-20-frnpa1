import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {IProduct} from '../interfaces/IProduct';
import {RESSOURCES, REST_ADRESSE} from '../config/restServeur';

const initialState: IProduct = {
  description: '',
  image: '',
  name: '',
  prix: 0,
  id: undefined,
  stock: 0,
};

const current = createSlice({
  name: 'current',
  initialState,
  reducers: {
    update: (
      state,
      action: {
        payload: IProduct;
        type: string;
      },
    ) => {
      Object.assign(state, action.payload);
    },
    clear: state => {
      Object.assign(state, initialState);
    },
  },
});

export const {clear, update} = current.actions;
export const saveCurrentProduct = createAsyncThunk(
  'current/save',
  async (product: IProduct) => {
    const pr = await fetch(
      `${REST_ADRESSE}${RESSOURCES.products}${
        product.id !== undefined ? `/${product.id}` : ''
      }`,
      {
        method: product.id !== undefined ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(product),
      },
    );
    return await pr.json();
  },
);
export default current.reducer;
