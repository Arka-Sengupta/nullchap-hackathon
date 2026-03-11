import { useContext } from "react";
import { DataContext } from "../context/DataContext";

import {
 LineChart,
 Line,
 XAxis,
 YAxis,
 Tooltip,
 CartesianGrid,
 ResponsiveContainer
} from "recharts";

export default function ProcessCharts(){

 const { batchData } = useContext(DataContext);

 if(!batchData) return null;

 const data = batchData.process_data;

 return(
  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
    
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Process Monitoring</h2>
      <p className="text-gray-600">Real-time temperature readings during batch processing</p>
    </div>

    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="time" 
            stroke="#6b7280"
            tick={{ fill: '#6b7280' }}
            label={{ value: 'Time (min)', position: 'insideBottom', offset: -5, fill: '#6b7280' }}
          />
          <YAxis 
            stroke="#6b7280"
            tick={{ fill: '#6b7280' }}
            label={{ value: 'Temperature (°C)', angle: -90, position: 'insideLeft', fill: '#6b7280' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #e5e7eb', 
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="temperature" 
            stroke="#3b82f6" 
            strokeWidth={3}
            dot={{ fill: '#3b82f6', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>

    <div className="mt-4 grid grid-cols-3 gap-4">
      <div className="text-center p-3 bg-blue-50 rounded-lg">
        <p className="text-sm text-gray-600">Min Temp</p>
        <p className="text-lg font-semibold text-blue-600">{Math.min(...data.map(d => d.temperature))}°C</p>
      </div>
      <div className="text-center p-3 bg-green-50 rounded-lg">
        <p className="text-sm text-gray-600">Avg Temp</p>
        <p className="text-lg font-semibold text-green-600">
          {(data.reduce((sum, d) => sum + d.temperature, 0) / data.length).toFixed(1)}°C
        </p>
      </div>
      <div className="text-center p-3 bg-orange-50 rounded-lg">
        <p className="text-sm text-gray-600">Max Temp</p>
        <p className="text-lg font-semibold text-orange-600">{Math.max(...data.map(d => d.temperature))}°C</p>
      </div>
    </div>

  </div>
 );

}
