// src/screens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [workshops, setWorkshops] = useState([]);

  // Callback function to add a new workshop
  const handleAddWorkshop = (newWorkshop) => {
    setWorkshops([...workshops, newWorkshop]);
  };

  return (
    <View style={styles.container}>
      {/* Display Logo */}
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} />

      {/* App Title */}
      <Text style={styles.title}>Car Workshop Finder</Text>

      {/* Navigation Buttons */}
      <Button
        title="Go to Workshop Details"
        onPress={() => navigation.navigate('WorkshopDetails')}
      />
      <Button
        title="Go to Diagnostics"
        onPress={() => navigation.navigate('Diagnostics')}
      />

      {/* Button to navigate to AddWorkshopScreen */}
      <Button
        title="Add Workshop Profile"
        onPress={() => navigation.navigate('AddWorkshop')}
      />

      {/* Display the list of workshops */}
      <FlatList
        data={workshops}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.workshopItem}
            onPress={() => navigation.navigate('WorkshopDetails', { workshop: item })}
          >
            <Text style={styles.workshopText}>Name: {item.name}</Text>
            <Text style={styles.workshopText}>Location: {item.location}</Text>
            <Text style={styles.workshopText}>Services: {item.services}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  workshopItem: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
    borderRadius: 8,
  },
  workshopText: {
    fontSize: 16,
  },
});
