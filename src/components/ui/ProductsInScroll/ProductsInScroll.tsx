import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from './ProductsInScroll.styles';
import {IProduct} from '../../../interfaces/IProduct';
import ProductOfList from '../ProductOfList/ProductOfList';

interface IProductsInScrollProps {
  products: Array<IProduct>;
  nameFilterValue: string;
  onProductPressed: Function;
}

const ProductsInScroll: React.FC<IProductsInScrollProps> = props => {
  return (
    <ScrollView style={styles.ProductsInScroll}>
      {props.products
        .filter(p =>
          p.name.toLowerCase().includes(props.nameFilterValue.toLowerCase()),
        )
        .map(p => (
          <ProductOfList
            Product={p}
            onPress={() => {
              props.onProductPressed(p);
            }}
            key={'p' + p.id}
          />
        ))}
    </ScrollView>
  );
};

export default ProductsInScroll;
