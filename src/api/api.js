import axios from "axios";

const API = "http://localhost:8000/api";

export const getPrediction = async (data) => {
  try {
    const res = await axios.post(`${API}/predict`, data);
    return res.data;
  } catch (error) {
    console.error('Prediction API error:', error);
    throw error;
  }
};

export const getRecommendations = async (batchId) => {
  try {
    const res = await axios.get(`${API}/recommendations/${batchId}`);
    return res.data;
  } catch (error) {
    console.error('Recommendations API error:', error);
    throw error;
  }
};
