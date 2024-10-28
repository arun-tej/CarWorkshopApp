// src/services/api.js
import axios from 'axios';
import { API_URL } from '../utils/constants';

export async function fetchWorkshops() {
  try {
    const response = await axios.get(`${API_URL}/workshops`);
    return response.data;
  } catch (error) {
    console.error("Error fetching workshops:", error);
    throw error;
  }
}
