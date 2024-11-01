// src/screens/WorkshopDetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WorkshopDetailsScreen({ route }) {
  const { workshop } = route.params || {};

  if (!workshop) {
    return <Text style={styles.errorText}>Workshop details not available.</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workshop Details</Text>
      <Text style={styles.detailText}>Name: {workshop.name}</Text>
      <Text style={styles.detailText}>Location: {workshop.location}</Text>
      <Text style={styles.detailText}>Services: {workshop.services}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailText: {
    fontSize: 18,
    marginBottom: 10,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});
