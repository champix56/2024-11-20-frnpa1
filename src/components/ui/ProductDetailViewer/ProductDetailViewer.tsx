import {View, Text} from 'react-native';
import React from 'react';
import styles from './ProductDetailViewer.styles';

interface IProductDetailViewerProps {}

const ProductDetailViewer: React.FC<IProductDetailViewerProps> = props => {
  return (
    <View style={styles.ProductDetailViewer}>
      <Text>ProductDetailViewer</Text>
    </View>
  );
};

export default ProductDetailViewer;
