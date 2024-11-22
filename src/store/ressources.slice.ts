import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IProduct} from '../interfaces/IProduct';
import {RESSOURCES, REST_ADRESSE} from '../config/restServeur';
import ProductDetailViewer from '../components/ui/ProductDetailViewer/ProductDetailViewer';
export interface IRessourcesSliceState {
  products: Array<IProduct>;
  filterProductValue: string;
  filtredProductList: Array<IProduct>;
}

const initialState: IRessourcesSliceState = {
  products: [],
  filterProductValue: '',
  filtredProductList: [],
};

const ressources = createSlice({
  name: 'ressources',
  initialState,
  reducers: {
    filterProductList: (s, a) => {
      s.filterProductValue = a.payload;
      s.filtredProductList = s.products.filter(p =>
        p.name.toLowerCase().includes(a.payload.toLowerCase()),
      );
    },
  },
  extraReducers: builder => {
    builder.addCase(
      'current/save/fulfilled',
      (oldState, action: {type: any; payload: IProduct}) => {
        const position = oldState.products.findIndex(
          item => item.id === action.payload.id,
        );
        if (position >= 0) {
          oldState.products[position] = action.payload;
        } else {
          oldState.products.push(action.payload);
        }
      },
    );
    builder.addCase(
      loadRessources.fulfilled,
      (
        oldState: IRessourcesSliceState,
        action: PayloadAction<
          Array<IProduct>,
          string,
          {
            arg: void;
            requestId: string;
            requestStatus: 'fulfilled';
          },
          never
        >,
      ) => {
        //vidange de  l'array
        oldState.products.splice(0);
        //remplissage de l'array de state
        oldState.products.push(...action.payload);
      },
    );
  },
});
export const loadRessources = createAsyncThunk('ressources/load', async () => {
  const pr = await fetch(`${REST_ADRESSE}${RESSOURCES.products}`);
  return await pr.json();
});

export const {filterProductList} = ressources.actions;

export default ressources.reducer;
