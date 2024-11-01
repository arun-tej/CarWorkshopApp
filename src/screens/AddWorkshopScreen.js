// src/screens/AddWorkshopScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function AddWorkshopScreen({ navigation, route }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [services, setServices] = useState('');

  useEffect(() => {
    // Set the `onSave` function in navigation options
    navigation.setOptions({
      onSave: (newWorkshop) => {
        // Invoke the callback from HomeScreen
        if (route.params && route.params.onSave) {
          route.params.onSave(newWorkshop);
        }
      },
    });
  }, [navigation, route.params]);

  const handleSave = () => {
    if (name && location && services) {
      const newWorkshop = { name, location, services };

      // Use the onSave function set in navigation options
      navigation.getParent()?.getState()?.routes[0].params?.onSave(newWorkshop);

      Alert.alert('Success', 'Workshop profile added successfully!');
      navigation.goBack();
    } else {
      Alert.alert('Error', 'Please fill in all fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Workshop Profile</Text>
      <TextInput
        placeholder="Workshop Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Location"
        style={styles.input}
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        placeholder="Services Offered"
        style={styles.input}
        value={services}
        onChangeText={setServices}
      />
      <Button title="Save Workshop" onPress={handleSave} />
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
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});
