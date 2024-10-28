// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen (Map View)</Text>
      <Button title="Go to Workshop Details" onPress={() => navigation.navigate('WorkshopDetails')} />
      <Button title="Go to Diagnostics" onPress={() => navigation.navigate('Diagnostics')} />
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
