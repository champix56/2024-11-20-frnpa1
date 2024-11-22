import React from 'react';
import styles from './ListOfProducts.styles';
import {IProduct} from '../../../interfaces/IProduct';
import ListProducts from '../ListProducts/ListProducts';
import ScrollableProducts from '../../layout/ScrollableProducts/ScrollableProducts';

interface IListOfProductsProps {
  products: Array<IProduct>;
}

const ListOfProducts: React.FC<IListOfProductsProps> = props => {
  return (
    <ScrollableProducts>
      {props.products.map((item: IProduct, position: number) => (
        <ListProducts
          produit={item}
          key={'produit-' + position}
          onProductPressed={(id: number) => {}}
        />
      ))}
    </ScrollableProducts>
  );
};

export default ListOfProducts;
