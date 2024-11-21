import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './Recherche.styles';

interface IRechercheProps {}

const Recherche: React.FC<IRechercheProps> = props => {
  const [inputValue, setInputValue] = useState('');
  return (
    <View style={styles.Recherche}>
      <TextInput
        placeholder="Saisie de recheche"
        onChangeText={t => {
          setInputValue(t);
          console.log(t);
        }}
      />
      <Text style={{backgroundColor: 'skyblue', color: 'tomato'}}>
        {inputValue}
      </Text>
    </View>
  );
};

export default Recherche;
