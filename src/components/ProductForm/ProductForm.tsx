import {View, Text, Image, Button, TextInput} from 'react-native';
import React from 'react';
import styles from './ProductForm.styles';
import {IProduct} from '../../interfaces/IProduct';

interface IProductFormProps {
  product: IProduct;
  onProductChange: Function;
  saveProduct:Function;
}

const ProductForm: React.FC<IProductFormProps> = props => {
  return (
    <View style={styles.ProductForm}>
      <Text>Edition du produit :{props.product.id}</Text>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{
            flexGrow: 1,
          }}>
          <TextInput
            placeholder="name"
            onChangeText={t => {
              props.onProductChange({...props.product, name: t});
            }}
          />
          <TextInput
            placeholder="desc"
            multiline={true}
            onChangeText={t => {
              props.onProductChange({...props.product, description: t});
            }}
          />
          <TextInput
            inputMode="decimal"
            placeholder="prix"
            multiline={true}
            onChangeText={t => {
              props.onProductChange({...props.product, prix: Number(t)});
            }}
          />
          <TextInput
            inputMode="decimal"
            placeholder="stock"
            onChangeText={t => {
              props.onProductChange({...props.product, stock: Number(t)});
            }}
          />
          <TextInput
            placeholder="image url"
            onChangeText={t => {
              props.onProductChange({...props.product, image: t});
            }}
          />
        </View>
        <View
          style={{
            width: 60,
          }}>
          <Image
            source={{uri: props.product.image}}
            style={{width: 50, height: 50}}
          />
        </View>
      </View>
      <Button
        title="Enregistrer"
        onPress={() => props.saveProduct(props.product)}
      />
    </View>
  );
};

export default ProductForm;
