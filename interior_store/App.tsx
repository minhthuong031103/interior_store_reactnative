import {View, Text} from 'react-native';
import React from 'react';
import {Navigator} from './navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigator />
    </SafeAreaProvider>
  );
}
