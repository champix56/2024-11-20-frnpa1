const initialState = {
  lists: {
    products: [],
    clients: [],
  },
};

const ressourcesReducer= (state = initialState, {type, payload}) => {
  switch (type) {
    case 'ressources/add':
      return {
        ...state,
        lists: {...state.lists, products: [...state.lists.products, payload]},
      };

    default:
      return state;
  }
};
export default ressourcesReducer;