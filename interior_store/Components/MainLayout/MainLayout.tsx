import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {Colors} from '../../constants';

export default function MainLayout({children}: {children: React.ReactNode}) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={{backgroundColor: Colors.background, flex: 1}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={Colors.background}
      />
      {children}
    </SafeAreaView>
  );
}
