import {IProduct} from '../interfaces/IProduct';

const initialState: IProduct = {
  description: '',
  name: '',
  image: '',
  prix: 0,
  id: undefined,
  stock: 0,
};

const reducer = (
  state = initialState,
  action: {type: string; payload: any},
) => {
  switch (action.type) {
    case 'current/update':
      return {...state, ...action.payload};
    case 'current/clear':
      return {...initialState};
    default:
      return state;
  }
};

export const update=(obj:any)=>{
  return {type:'current/update',payload:obj};
}
export default reducer;
