/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
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
import {products} from './db.json';
import Recherche from './src/components/ui/Recherche/Recherche';
import ScrollableProducts from './src/components/layout/ScrollableProducts/ScrollableProducts';
import ListProducts from './src/components/ui/ListProducts/ListProducts';
import {IProduct} from './src/interfaces/IProduct';
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Header imageUri={logoImg} text="Orsys" />
      <Recherche />
      <ScrollableProducts>
        {/* <View key={"t"}>
          <Text>Resultats :</Text>
        </View> */}
        {products.map((item: IProduct, position) => (
          <ListProducts produit={item} key={'produit-' + position} />
        ))}
      </ScrollableProducts>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
