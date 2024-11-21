import {View, Text} from 'react-native';
import React from 'react';
import styles from './ListProducts.styles';

interface IListProductsProps {}

const ListProducts: React.FC<IListProductsProps> = props => {
  return (
    <View style={styles.ListProducts}>
      <Text>ListProducts</Text>
    </View>
  );
};

export default ListProducts;
