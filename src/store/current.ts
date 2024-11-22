import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {IProduct} from '../interfaces/IProduct';
import {RESSOURCES, REST_ADRESSE} from '../config/rest.config';

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
  extraReducers(builder) {
    builder.addCase(saveProduct.fulfilled, (s, a) => {
      Object.assign(s, a.payload);
    });
  },
});

export const {clear, update} = current.actions;

const currentReducer = current.reducer;
export default currentReducer;
export const saveProduct = createAsyncThunk(
  'current/save',
  async (product: IProduct) => {
    const pr = await fetch(
      `${REST_ADRESSE}${RESSOURCES.products}${
        product.id !== undefined ? '/' + product.id : ''
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
