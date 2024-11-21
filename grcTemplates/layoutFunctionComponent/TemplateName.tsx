import {View} from 'react-native';
import React from 'react';
import styles from './TemplateName.styles';

interface ITemplateNameProps {
  children: React.ReactElement|Array<React.ReactElement>
}

const TemplateName: React.FC<ITemplateNameProps> = props => {
  return (
    <View style={styles.TemplateName}>
      {props.children}
    </View>
  );
};

export default TemplateName;
