import React from 'react';

import ListProductsUnconnected from './ListOfProducts';

import {useSelector} from 'react-redux';
import {TStoreState} from '../../../store/store';

const ListOfProducts: React.FC = () => {
  const products = useSelector(
    (s: TStoreState) => s.ressources.filtredProducts,
  );
  return <ListProductsUnconnected products={products} />;
};

export default ListOfProducts;
