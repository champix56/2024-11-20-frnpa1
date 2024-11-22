 import React from 'react';
import Header from '../../components/ui/Header/Header';
import Recherche from '../../components/ui/Recherche/Recherche.connected';
import ListOfProducts from '../../components/ui/ListOfProducts/ListOfProducts.connected';
import { logoImg } from '../../../assert/datauri/logo';

const Home = () => {
  return (
    <>
      <Header imageUri={logoImg} text="Orsys" />
      <Recherche />
      <ListOfProducts />
    </>
  );
};

export default Home;
