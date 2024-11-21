import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IProduct} from '../interfaces/IProduct';
import {RESSOURCES, REST_ADRESSE} from '../config/restServeur';
export interface IRessourcesSliceState {
  products: Array<IProduct>;
}

const initialState: IRessourcesSliceState = {
  products: [],
};

const ressources = createSlice({
  name: 'ressources',
  initialState,
  reducers: {},
  extraReducers: builder => {
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

//export const {} = ressources.actions;

export default ressources.reducer;
