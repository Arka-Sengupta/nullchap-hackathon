import UploadJSON from "../components/UploadJSON";
import { Link } from "react-router-dom";

export default function Home(){

 return(
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">

    <div className="max-w-4xl mx-auto">
      
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Batch AI Optimization
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Transform your manufacturing process with AI-powered predictions and recommendations
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <UploadJSON/>
      </div>

      <div className="text-center">
        <Link 
          to="/dashboard"
          className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Go to Dashboard
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>

    </div>

  </div>
 );

}
