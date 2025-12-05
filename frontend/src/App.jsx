import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import DashboardPage from "./pages/dashboard/DashboardPage.jsx";

import { Toaster } from "@/components/ui/sonner";
import { SidebarProvider } from "./components/ui/sidebar";
import Layout from "./pages/dashboard/Layout";

function App() {
  return (
    <Router>
      <Routes> 

        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route 
            path="/dashboard" 
            element={
              <SidebarProvider>
              <Layout>
            <DashboardPage />
            </Layout>
           </SidebarProvider>
            } 
            />
  
      </Routes>
      
      <Toaster />
    </Router>
  );
}

export default App;