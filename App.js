import React, { useEffect, useState } from 'react';
import { AppLoading } from 'expo';

import * as Font from 'expo-font';

import { StyleSheet, View } from 'react-native';

import FoodItem from './src/Food/FoodItem';

const App = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      });
      setLoading(false);
    };
    loadFonts()
  }, []);

  if (isLoading) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <FoodItem />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
