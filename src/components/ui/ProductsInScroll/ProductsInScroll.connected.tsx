import React from 'react';
import ProductsInScrollUnConnected from './ProductsInScroll';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {IProduct} from '../../../interfaces/IProduct';
import {update} from '../../../store/current.slice';

const ProductsInScroll: React.FC<any> = props => {
  const products = useSelector(
    (storeState: RootState) => storeState.ressources.filtredProductList,
  );
  const dispatch = useDispatch();
  return (
    <ProductsInScrollUnConnected
      {...props}
      products={products}
      onProductPressed={(product: IProduct) => {
        dispatch(update(product));
      }}
    />
  );
};

export default ProductsInScroll;
