/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,

  StyleSheet,

  Text,

  useColorScheme,
  View,

} from 'react-native';

import {
  Colors,
  DebugInstructions,

  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Button from './src/components/ui/Button/Button';
import Header from "./src/components/ui/Header/Header";
import { logoImg } from './assert/datauri/logo';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Header imageUri={logoImg} text='Orsys'/>
      <View>
        <Text style={{ color: 'red', backgroundColor: 'blue' }}>Demat Breizh</Text>
        <Button style={{paddingVertical:5}}>
          <Text>Mon button</Text> 
        </Button>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({});

export default App;
