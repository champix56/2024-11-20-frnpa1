import React from 'react';
import styles from './ListOfProducts.styles';
import {IProduct} from '../../../interfaces/IProduct';
import ListProducts from '../ListProducts/ListProducts';
import ScrollableProducts from '../../layout/ScrollableProducts/ScrollableProducts';
import ProductOfList from '../ProductOfList/ProductOfList';

interface IListOfProductsProps {
  products: Array<IProduct>;
  onProductPressed: Function;
}

const ListOfProducts: React.FC<IListOfProductsProps> = props => {
  return (
    <ScrollableProducts>
      {props.products.map((item: IProduct, position: number) => (
        <ProductOfList
          Product={item}
          key={'produit-' + position}
          onPress={(produit: IProduct) => {
            props.onProductPressed(produit);
          }}
        />
      ))}
    </ScrollableProducts>
  );
};

export default ListOfProducts;
