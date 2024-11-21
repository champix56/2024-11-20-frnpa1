import {View, Text, TextInput, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Recherche.styles';

interface IRechercheProps {
  value: string;
  onFindValueChange: Function;
}

const Recherche: React.FC<IRechercheProps> = props => {
  // useEffect(() => {
  //    //Alert.alert('Nouvelle lettre saisie', inputValue);
  // },[inputValue]);
  return (
    <View style={styles.Recherche}>
      <TextInput
        placeholder="Saisie de recheche"
        onChangeText={t => {
          props.onFindValueChange(t);
        }}
        value={props.value}
      />
      <Text style={{backgroundColor: 'skyblue', color: 'tomato'}}>
        {props.value}
      </Text>
    </View>
  );
};

export default Recherche;
