import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import DashboardCards from "../components/DashboardCards";
import ProcessCharts from "../components/ProcessCharts";
import PredictionPanel from "../components/PredictionPanel";
import RecommendationPanel from "../components/RecommendationPanel";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { formDataPayload, mlResponse } = useContext(DataContext);

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Navigation */}
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-light tracking-tight">
            BATCH<span className="font-semibold">AI</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link 
              to="/home"
              className="text-sm text-gray-500 hover:text-black transition-colors"
            >
              New Batch
            </Link>
            <Link 
              to="/"
              className="text-sm text-gray-500 hover:text-black transition-colors"
            >
              ← Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-light mb-2">
            Dashboard <span className="font-semibold">Results</span>
          </h1>
          <p className="text-gray-500">
            AI-powered analysis and recommendations for your batch
          </p>
        </div>

        {/* Results Section */}
        {formDataPayload ? (
          <div className="space-y-8">
            {/* Cards */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <DashboardCards />
            </div>

            {/* Charts */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <ProcessCharts />
            </div>

            {/* AI Panels */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <PredictionPanel />
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <RecommendationPanel />
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-xl border border-gray-200">
            <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-xl font-light mb-2">No batch data available</h3>
            <p className="text-gray-500 mb-6">Please configure a batch first</p>
            <Link
              to="/home"
              className="inline-block bg-black text-white px-6 py-2 text-sm rounded-full hover:bg-gray-800 transition-colors"
            >
              Go to Configuration
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}