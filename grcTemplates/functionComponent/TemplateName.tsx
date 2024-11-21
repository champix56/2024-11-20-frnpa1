import {View, Text} from 'react-native';
import React from 'react';
import styles from './TemplateName.styles';

interface ITemplateNameProps {}

const TemplateName: React.FC<ITemplateNameProps> = props => {
  return (
    <View style={styles.TemplateName}>
      <Text>TemplateName</Text>
    </View>
  );
};

export default TemplateName;
