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

export default function ProcessCharts() {
  const { formDataPayload, mlResponse } = useContext(DataContext);

  if (!formDataPayload) return null;

  // Create dummy process data for demonstration
  const data = [
    { time: 0, temperature: 25 },
    { time: 10, temperature: 45 },
    { time: 20, temperature: 68 },
    { time: 30, temperature: 82 },
    { time: 40, temperature: 91 },
    { time: 50, temperature: 95 },
    { time: 60, temperature: 93 },
    { time: 70, temperature: 88 },
    { time: 80, temperature: 78 },
    { time: 90, temperature: 65 },
    { time: 100, temperature: 52 },
    { time: 110, temperature: 38 },
    { time: 120, temperature: 28 }
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-light text-gray-900 mb-2">Process Monitoring</h2>
        <p className="text-gray-500">Real-time temperature readings during batch processing</p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="time" 
              stroke="#9ca3af"
              tick={{ fill: '#9ca3af' }}
              label={{ value: 'Time (min)', position: 'insideBottom', offset: -5, fill: '#9ca3af' }}
            />
            <YAxis 
              stroke="#9ca3af"
              tick={{ fill: '#9ca3af' }}
              label={{ value: 'Temperature (°C)', angle: -90, position: 'insideLeft', fill: '#9ca3af' }}
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
              stroke="#000000" 
              strokeWidth={2}
              dot={{ fill: '#000000', r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">Min Temp</p>
          <p className="text-lg font-medium text-gray-900">{Math.min(...data.map(d => d.temperature))}°C</p>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">Avg Temp</p>
          <p className="text-lg font-medium text-gray-900">
            {(data.reduce((sum, d) => sum + d.temperature, 0) / data.length).toFixed(1)}°C
          </p>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">Max Temp</p>
          <p className="text-lg font-medium text-gray-900">{Math.max(...data.map(d => d.temperature))}°C</p>
        </div>
      </div>
    </div>
  );
}