import { BrowserRouter, Routes, Route } from "react-router-dom";
import Marketing from "./pages/Marketing";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Marketing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;