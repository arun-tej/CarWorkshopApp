// src/services/obdService.js
import OBD2 from 'react-native-obd2';
import { requestBluetoothPermissions } from './permissionsService';

export async function connectToOBD() {
  const hasPermissions = await requestBluetoothPermissions();
  if (hasPermissions) {
    try {
      await OBD2.connect();
      OBD2.startAutoFetch();
      return true;
    } catch (error) {
      console.error('Failed to connect:', error);
      return false;
    }
  } else {
    console.warn('Bluetooth permissions not granted');
    return false;
  }
}

export function disconnectOBD() {
  OBD2.disconnect();
  OBD2.stopAutoFetch();
}

export function onOBDDataReceived(callback) {
  OBD2.onReceived(data => {
    callback(data);
  });
}
