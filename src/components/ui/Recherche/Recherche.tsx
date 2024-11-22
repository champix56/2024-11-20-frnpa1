import {View, Text, TextInput, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Recherche.styles';

interface IRechercheProps {
  value: string;
  onFindValueChange: Function;
  style?:object;
}

const Recherche: React.FC<IRechercheProps> = props => {
  return (
    <View style={{...styles.Recherche, ...props.style}}>
      <TextInput
        placeholder="Saisie de recheche"
        onChangeText={t => {
          props.onFindValueChange(t);
        }}
        value={props.value}
      />
    </View>
  );
};

export default Recherche;
