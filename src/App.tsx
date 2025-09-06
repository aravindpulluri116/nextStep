import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ExamPreparationPage from './pages/ExamPreparationPage';
import PlacementPreparationPage from './pages/PlacementPreparationPage';
import AptitudeSubtopicsPage from './pages/AptitudeSubtopicsPage';
import DSASubtopicsPage from './pages/DSASubtopicsPage';
import InterviewSubtopicsPage from './pages/InterviewSubtopicsPage';
import PracticePage from './pages/PracticePage';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
}

function PublicRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? <>{children}</> : <Navigate to="/home" replace />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-black">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route 
              path="/login" 
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              } 
            />
            <Route 
              path="/home" 
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/exam-preparation" 
              element={
                <ProtectedRoute>
                  <ExamPreparationPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/placement-preparation" 
              element={
                <ProtectedRoute>
                  <PlacementPreparationPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/aptitude" 
              element={
                <ProtectedRoute>
                  <AptitudeSubtopicsPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/dsa" 
              element={
                <ProtectedRoute>
                  <DSASubtopicsPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/interview" 
              element={
                <ProtectedRoute>
                  <InterviewSubtopicsPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/practice/:topic" 
              element={
                <ProtectedRoute>
                  <PracticePage />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;