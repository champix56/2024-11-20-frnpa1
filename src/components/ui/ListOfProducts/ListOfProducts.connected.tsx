import React from 'react';

import ListProductsUnconnected from './ListOfProducts';

import {useDispatch, useSelector} from 'react-redux';
import {TStoreState} from '../../../store/store';
import {IProduct} from '../../../interfaces/IProduct';
import { update } from '../../../store/current';

const ListOfProducts: React.FC = (props: any) => {
  const products = useSelector(
    (s: TStoreState) => s.ressources.filtredProducts,
  );
  const d = useDispatch();
  return (
    <ListProductsUnconnected
      {...props}
      products={products}
      onProductPressed={(produit: IProduct) => {
        d(update(produit));
      }}
    />
  );
};

export default ListOfProducts;
