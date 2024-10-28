// src/screens/WorkshopDetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WorkshopDetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Workshop Details Screen</Text>
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
