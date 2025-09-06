import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, BookOpen } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleGoogleLogin = () => {
    // Simulate Google OAuth login
    const userData = {
      name: 'John Doe',
      email: 'john.doe@example.com'
    };
    
    login(userData);
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl shadow-xl shadow-blue-500/25">
            <BookOpen size={48} className="text-white" />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-white">StudyPortal</h1>
          <p className="text-gray-400 text-lg">Your gateway to exam and placement success</p>
        </div>

        {/* Login Button */}
        <div className="pt-8">
          <Button
            onClick={handleGoogleLogin}
            variant="primary"
            size="lg"
            icon={LogIn}
            className="w-full text-xl py-4"
          >
            Continue with Google
          </Button>
        </div>

        {/* Features */}
        <div className="pt-8 space-y-3 text-sm text-gray-500">
          <p>✨ Access exam preparation materials</p>
          <p>🎯 Practice placement questions</p>
          <p>📚 Download notes and resources</p>
        </div>
      </div>
    </div>
  );
}