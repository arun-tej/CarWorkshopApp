// src/screens/DiagnosticsScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { connectToOBD, disconnectOBD, onOBDDataReceived } from '../services/obdService';

export default function DiagnosticsScreen() {
  const [obdData, setObdData] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    async function initOBD() {
      const connected = await connectToOBD();
      setIsConnected(connected);

      onOBDDataReceived((data) => {
        setObdData((prevData) => [
          ...prevData,
          { name: data.name, value: data.value, unit: data.unit },
        ]);
      });
    }

    initOBD();

    return () => {
      disconnectOBD();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diagnostics</Text>
      {isConnected ? (
        <FlatList
          data={obdData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.obdItem}>
              <Text>{item.name}: {item.value} {item.unit}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.connectionText}>Connecting to OBD-II...</Text>
      )}
      <Button title="Disconnect" onPress={disconnectOBD} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  connectionText: {
    fontSize: 18,
    color: 'grey',
    textAlign: 'center',
    marginTop: 20,
  },
  obdItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
