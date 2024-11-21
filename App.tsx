/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from './src/components/ui/Header/Header';
import {logoImg} from './assert/datauri/logo';

import Recherche from './src/components/ui/Recherche/Recherche';
import ScrollableProducts from './src/components/layout/ScrollableProducts/ScrollableProducts';
import ListProducts from './src/components/ui/ListProducts/ListProducts';
import {IProduct} from './src/interfaces/IProduct';

const productsInitialState:Array<IProduct>=[];

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [findValue, setfindValue] = useState('');
  const [products, setproducts] = useState(productsInitialState);
  useEffect(() => {
     fetch('http://localhost:5679/products').then(r=>r.json()).then(array=>setproducts(array));
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <Header imageUri={logoImg} text="Orsys" />
      <Recherche
        value={findValue}
        onFindValueChange={(value: string) => {
          setfindValue(value);
        }}
      />
      <ScrollableProducts>
        {/* <View key={"t"}>
          <Text>Resultats :</Text>
        </View> */}
        {products
          .filter(i => i.name.toLowerCase().includes(findValue.toLowerCase()))
          .map((item: IProduct, position: number) => (
            <ListProducts
              produit={item}
              key={'produit-' + position}
              onProductPressed={(id: number) => {
                const p = products.find(
                  (aProduct: IProduct) =>
                    aProduct.id !== undefined && aProduct.id === id,
                );
                if (p !== undefined) {
                  setfindValue(p.name);
                } else setfindValue('');
              }}
            />
          ))}
      </ScrollableProducts>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
