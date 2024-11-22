import {createSlice} from '@reduxjs/toolkit';
import {IProduct} from '../interfaces/IProduct';
import {products} from '../../db.json'
interface IRessourcesState {
  products: Array<IProduct>;
}
const initialState: IRessourcesState = {
  products: products,
};

const ressources = createSlice({
  name: 'ressources',
  initialState,
  reducers: {
    addProduct(s, a: {type: string; payload: IProduct}) {
        const position=s.products.findIndex(p=>p.id===a.payload.id);
        if(position===-1){
            s.products.push(a.payload);
        }
        else{
            s.products[position]=a.payload;
        }
    },
    fillProducts(s, a: {type: string; payload: Array<IProduct>}) {
        s.products.splice(0);
        s.products.push(...a.payload);
    },
  },
});

export const {addProduct, fillProducts} = ressources.actions;

const ressourcesReducer = ressources.reducer;
export default ressourcesReducer;
