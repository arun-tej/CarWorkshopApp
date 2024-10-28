// src/screens/DiagnosticsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DiagnosticsScreen() {
  return (
    <View style={styles.container}>
      <Text>Diagnostics Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
