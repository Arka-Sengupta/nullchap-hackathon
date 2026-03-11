import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function UploadJSON() {

  const { setBatchData } = useContext(DataContext);

  const handleUpload = async (e) => {

    const file = e.target.files[0];
    const text = await file.text();

    const json = JSON.parse(text);

    setBatchData(json);
  };

  return (
    <div className="text-center">
      
      <div className="mb-8">
        <div className="mx-auto w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Upload Batch Dataset
        </h2>
        
        <p className="text-gray-600 mb-6">
          Upload your JSON file containing batch process data to get started with AI analysis
        </p>
      </div>

      <div className="relative">
        <input 
          type="file" 
          accept=".json" 
          onChange={handleUpload}
          className="hidden"
          id="file-upload"
        />
        <label 
          htmlFor="file-upload"
          className="cursor-pointer inline-flex items-center px-6 py-3 border-2 border-dashed border-indigo-300 rounded-lg hover:border-indigo-400 transition-colors duration-200 bg-indigo-50 hover:bg-indigo-100"
        >
          <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-indigo-700 font-medium">Choose JSON File</span>
        </label>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        Supported format: JSON with batch_id, process_data, and production_data
      </div>

    </div>
  );
}
