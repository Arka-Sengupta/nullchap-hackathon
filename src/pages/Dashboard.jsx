import DashboardCards from "../components/DashboardCards";
import ProcessCharts from "../components/ProcessCharts";
import PredictionPanel from "../components/PredictionPanel";
import RecommendationPanel from "../components/RecommendationPanel";

export default function Dashboard(){

 return(
  <div className="min-h-screen bg-gray-50 py-8">

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Factory Dashboard
        </h1>
        <p className="text-gray-600">
          Real-time monitoring and AI-powered insights for your batch production
        </p>
      </div>

      <div className="space-y-8">
        
        <DashboardCards/>
        
        <ProcessCharts/>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PredictionPanel/>
          <RecommendationPanel/>
        </div>

      </div>

    </div>

  </div>
 );

}
