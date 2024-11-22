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

import Recherche from './src/components/ui/Recherche/Recherche.connected';
import ScrollableProducts from './src/components/layout/ScrollableProducts/ScrollableProducts';
import ListProducts from './src/components/ui/ListProducts/ListProducts';
import {IProduct} from './src/interfaces/IProduct';
import {Provider} from 'react-redux';
import store from './src/store/store';

const productsInitialState: Array<IProduct> = [];

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <Header imageUri={logoImg} text="Orsys" />
        <Recherche />
       {/* 
       
       */}
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
