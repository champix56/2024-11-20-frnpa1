/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Header from './src/components/ui/Header/Header';
import {logoImg} from './assert/datauri/logo';

import Recherche from './src/components/ui/Recherche/Recherche.connected';

//
import ProductsInScroll from './src/components/ui/ProductsInScroll/ProductsInScroll.connected';
import {Provider} from 'react-redux';
import store from './src/store/store';

//const productsInitialState: Array<IProduct> = [];

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Provider store={store}>
        <Header imageUri={logoImg} text="Orsys" />
        <Recherche/>
        <ProductsInScroll />
      </Provider>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({});

export default App;
