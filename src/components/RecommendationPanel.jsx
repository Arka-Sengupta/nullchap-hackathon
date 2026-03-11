import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { getRecommendations } from "../api/api";

export default function RecommendationPanel(){

 const { batchData, recommendations, setRecommendations } = useContext(DataContext);
 const [isLoading, setIsLoading] = useState(false);
 const [error, setError] = useState(null);

 if(!batchData) return null;

 const loadRecommendations = async () => {
   setIsLoading(true);
   setError(null);
   
   try {
     const res = await getRecommendations(batchData.batch_id);
     setRecommendations(res.recommendations);
   } catch (error) {
     setError('Failed to get recommendations. Please check your backend connection.');
     console.error('Recommendations failed:', error);
   } finally {
     setIsLoading(false);
   }
 };

 return(
  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">

    <div className="mb-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">AI Recommendations</h2>
      <p className="text-gray-600">Optimization suggestions based on batch analysis</p>
    </div>

    <button 
      onClick={loadRecommendations}
      disabled={isLoading}
      className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
    >
      {isLoading ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Generating Recommendations...
        </>
      ) : (
        <>
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Get AI Recommendations
        </>
      )}
    </button>

    {error && (
      <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-700 text-sm">{error}</p>
      </div>
    )}

    {recommendations.length > 0 && (
      <div className="mt-6 space-y-3">
        
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Optimization Suggestions</h3>
        </div>

        {recommendations.map((recommendation, index) => (
          <div 
            key={index}
            className="flex items-start p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-100 hover:from-amber-100 hover:to-orange-100 transition-colors duration-200"
          >
            <div className="flex-shrink-0 w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center mr-3 mt-0.5">
              <span className="text-xs font-bold text-amber-800">{index + 1}</span>
            </div>
            <p className="text-gray-700 leading-relaxed">{recommendation}</p>
          </div>
        ))}

        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            <span className="font-medium">AI Analysis:</span> These recommendations are generated based on historical batch data and optimal parameter ranges.
          </p>
        </div>

      </div>
    )}

  </div>
 );

}
