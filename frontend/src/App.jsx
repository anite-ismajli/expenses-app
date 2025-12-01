import { BrowserRouter as Router, Routes, Route } from "react-router"
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import OverviewPage from "./pages/dashboard/overview/OverviewPage";

import {Toaster} from "@/components/ui/sonner" 
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
         {/* Private Route */}
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/cards" element={<OverviewPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
