import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, BookOpen } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Button from './Button';

export default function Navbar() {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleLogoClick = () => {
    navigate('/home');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity duration-200"
            onClick={handleLogoClick}
          >
            <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg">
              <BookOpen size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold text-white">StudyPortal</span>
          </div>

          {/* User Info & Logout */}
          <div className="flex items-center gap-4">
            {user && (
              <div className="hidden sm:block text-right">
                <p className="text-sm text-gray-300">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            )}
            <Button
              variant="error"
              size="sm"
              icon={LogOut}
              onClick={handleLogout}
            >
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}