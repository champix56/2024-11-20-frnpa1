import {View, Text} from 'react-native';
import React from 'react';
import styles from './Recherche.styles';

interface IRechercheProps {}

const Recherche: React.FC<IRechercheProps> = props => {
  return (
    <View style={styles.Recherche}>
      <Text>Recherche</Text>
    </View>
  );
};

export default Recherche;
