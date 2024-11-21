import {View} from 'react-native';
import React from 'react';
import styles from './ScrollableProducts.styles';

interface IScrollableProductsProps {
  children: React.ReactElement|Array<React.ReactElement>
}

const ScrollableProducts: React.FC<IScrollableProductsProps> = props => {
  return (
    <View style={styles.ScrollableProducts}>
      {props.children}
    </View>
  );
};

export default ScrollableProducts;
