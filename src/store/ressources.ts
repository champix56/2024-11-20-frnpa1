import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IProduct} from '../interfaces/IProduct';
import {RESSOURCES, REST_ADRESSE} from '../config/rest.config';

interface IRessourcesState {
  products: Array<IProduct>;
  searchValue: string;
  filtredProducts: Array<IProduct>;
}
const initialState: IRessourcesState = {
  products: [],
  searchValue: '',
  filtredProducts: [],
};

const ressources = createSlice({
  name: 'ressources',
  initialState,
  reducers: {
    // addProduct(s, a: {type: string; payload: IProduct}) {
    //   const position = s.products.findIndex(p => p.id === a.payload.id);
    //   if (position === -1) {
    //     s.products.push(a.payload);
    //   } else {
    //     s.products[position] = a.payload;
    //   }
    // },
    // fillProducts(s, a: {type: string; payload: Array<IProduct>}) {
    //   s.products.splice(0);
    //   s.products.push(...a.payload);
    // },
    filterProducts(s, a: {type: string; payload: string}) {
      s.searchValue = a.payload;
      s.filtredProducts = s.products.filter(p =>
        p.name.toLowerCase().includes(a.payload.toLowerCase()),
      );
    },
  },
  extraReducers(builder) {
    builder.addCase(loadRessourcesDatas.fulfilled, (oldState, action) => {
      oldState.products.splice(0);
      oldState.products.push(...action.payload);
      oldState.filtredProducts = oldState.products.filter(p =>
        p.name.toLowerCase().includes(oldState.searchValue.toLowerCase()),
      );
    });
    builder.addCase(
      'current/save/fulfilled',
      (
        s,
        a:any
      ) => {
        const position = s.products.findIndex(p => p.id === a.payload.id);
        if (position === -1) {
          s.products.push(a.payload);
        } else {
          s.products[position] = a.payload;
        }
      },
    );
    builder.addCase(loadRessourcesDatas.rejected, (s, a) => {
      console.log('%c%s', 'color:tomato;font-size:32pt;', 'loadingError');
    });
  },
});

export const {filterProducts} = ressources.actions;

const ressourcesReducer = ressources.reducer;
export default ressourcesReducer;

export const loadRessourcesDatas = createAsyncThunk(
  'ressources/fetch',
  async () => {
    const promise = await fetch(`${REST_ADRESSE}${RESSOURCES.products}`);
    const json = await promise.json();
    return json;
  },
);
