import React from 'react';
import ProductFormUnconnected from './ProductForm';
import {useDispatch, useSelector} from 'react-redux';
import {TStoreState} from '../../store/store';
import {saveProduct, update} from '../../store/current';

const ProductForm = props => {
  const p = useSelector(s => s.current);
  const d = useDispatch();
  return (
    <ProductFormUnconnected
      product={p}
      onProductChange={product => {
        d(update(product));
      }}
      saveProduct={product => {
        d(saveProduct(product));
      }}
    />
  );
};

export default ProductForm;
