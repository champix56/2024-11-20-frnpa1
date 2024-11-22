import React from 'react';
import {View, TextInput} from 'react-native';
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
    </View>
  );
};

export default Recherche;
