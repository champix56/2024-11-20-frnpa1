import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './ProductEditor.styles';
import {IProduct} from '../../interfaces/IProduct';

interface IProductEditorProps {}
const initialStateProduct: IProduct = {
  description: '',
  image: '',
  name: '',
  prix: 0,
  stock: 0,
};
const ProductEditor: React.FC<IProductEditorProps> = props => {
  const [state, setstate] = useState(initialStateProduct);
  return (
    <View style={styles.ProductEditor}>
      <TextInput value={state.name} placeholder='name' onChangeText={t=>setstate({...state, name:t})}/>
    </View>
  );
};

export default ProductEditor;
