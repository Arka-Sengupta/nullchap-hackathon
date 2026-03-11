import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const [batchData, setBatchData] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  return (
    <DataContext.Provider value={{
      batchData,
      setBatchData,
      prediction,
      setPrediction,
      recommendations,
      setRecommendations
    }}>
      {children}
    </DataContext.Provider>
  );
};
