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
      onPress={() => props.onPress(props.Product)}
      style={styles.ProductOfList}>
      <View style={styles.ProductOfListView}>
        <Text style={styles.name}>
          {props.Product.id}:{props.Product.name}
        </Text>
        <Image style={styles.image} source={{uri: props.Product.image}} />
      </View>
    </TouchableHighlight>
  );
};

export default ProductOfList;
