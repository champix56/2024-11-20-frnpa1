import React, { ReactElement } from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import styles from './Button.style';

interface IButtonProps {
  children: React.ReactElement|Array<ReactElement>;
  style?: ViewStyle;
  onPress: Function;
}
const Button: React.FC<IButtonProps> = props => {
  console.log(props);

  return (
    <TouchableOpacity
      style={{...props.style, ...styles.Button}}
      onPress={evt => {
        console.log(evt);
        props.onPress();
      }}>
      {props.children}
    </TouchableOpacity>
  );
};
export default Button;
