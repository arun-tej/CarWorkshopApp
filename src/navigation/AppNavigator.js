// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import WorkshopDetailsScreen from '../screens/WorkshopDetailsScreen';
import DiagnosticsScreen from '../screens/DiagnosticsScreen';
import AddWorkshopScreen from '../screens/AddWorkshopScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="WorkshopDetails" component={WorkshopDetailsScreen} />
      <Stack.Screen name="Diagnostics" component={DiagnosticsScreen} />
      <Stack.Screen name="AddWorkshop" component={AddWorkshopScreen} />
    </Stack.Navigator>
  );
}
