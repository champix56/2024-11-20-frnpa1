import {View, Text, Image, TouchableHighlight} from 'react-native';
import React from 'react';
import styles from './ProductOfList.styles';
import {IProduct} from '../../../interfaces/IProduct';

interface IProductOfListProps {
  Product: IProduct;
  onPress: Function;
  onLongPress?: Function;
}

const ProductOfList: React.FC<IProductOfListProps> = props => {
  return (
    <TouchableHighlight
      onPress={() => props.onPress(props.Product.id)}
      onLongPress={() => {
        if (props.onLongPress !== undefined) {
          props.onLongPress(props.Product.id);
        }
      }}
      style={styles.ProductOfList}>
      <Text style={styles.name}>
        {props.Product.id}:{props.Product.name}
      </Text>
      <Image style={styles.image} source={{uri: props.Product.image}} />
    </TouchableHighlight>
  );
};

export default ProductOfList;
