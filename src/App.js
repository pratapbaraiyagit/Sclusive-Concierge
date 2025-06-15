// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";

// Import Firebase Context
import { AuthProvider } from "./contexts/AuthContext";

// Import your components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import ServicesPage from "./pages/ServicesPage";
import MembershipPage from "./pages/MembershipPage";
import ContactPage from "./pages/ContactPage";
import ClientLogin from "./pages/ClientPortal/ClientLogin";
import ClientDashboard from "./pages/ClientPortal/ClientDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <ScrollToTop />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/membership" element={<MembershipPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/portal" element={<ClientLogin />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <ClientDashboard />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
