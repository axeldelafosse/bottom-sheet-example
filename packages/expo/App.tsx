import React from 'react';
import { enableScreens } from 'react-native-screens';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Example from 'app/example';

enableScreens(true);

export default function App() {
  return (
    <SafeAreaProvider style={{ backgroundColor: 'black' }}>
      <StatusBar style="light" />
      <Example />
    </SafeAreaProvider>
  );
}
