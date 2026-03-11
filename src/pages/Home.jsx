import UploadJSON from "../components/UploadJSON";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple Navigation */}
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-light tracking-tight">
            BATCH<span className="font-semibold">AI</span>
          </Link>
          <Link 
            to="/"
            className="text-sm text-gray-500 hover:text-black transition-colors"
          >
            ← Back
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-light mb-4">
            Configure <span className="font-semibold">Your Batch</span>
          </h1>
          <p className="text-gray-500 text-lg">
            Enter your parameters and upload sensor data to get AI-powered insights
          </p>
        </div>

        {/* Form Card with the step-by-step style */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <UploadJSON />
        </div>
      </div>
    </div>
  );
}