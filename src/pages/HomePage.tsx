import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Briefcase, GraduationCap, Target } from 'lucide-react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Welcome to <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">StudyPortal</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your comprehensive platform for exam preparation and placement success. Choose your path and start your journey.
            </p>
          </div>

          {/* Main Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card
              className="p-8 min-h-[300px] flex flex-col justify-between group"
              onClick={() => navigate('/exam-preparation')}
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                    <GraduationCap size={32} className="text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Exam Preparation</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Access comprehensive study materials, notes, and previous year questions organized by branches and subjects.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-blue-400">
                  <BookOpen size={18} />
                  <span>Branch-wise study materials</span>
                </div>
                <div className="flex items-center gap-3 text-blue-400">
                  <Target size={18} />
                  <span>Previous year questions</span>
                </div>
              </div>
            </Card>

            <Card
              className="p-8 min-h-[300px] flex flex-col justify-between group"
              onClick={() => navigate('/placement-preparation')}
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-green-700 rounded-xl group-hover:shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
                    <Briefcase size={32} className="text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Placement Preparation</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Master aptitude, data structures, algorithms, and interview skills with curated practice materials.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-green-400">
                  <Target size={18} />
                  <span>Aptitude & logical reasoning</span>
                </div>
                <div className="flex items-center gap-3 text-green-400">
                  <Briefcase size={18} />
                  <span>Technical interview prep</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-400">Study Materials</div>
            </div>
            <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="text-3xl font-bold text-green-400 mb-2">200+</div>
              <div className="text-gray-400">Practice Questions</div>
            </div>
            <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-400">Interview Topics</div>
            </div>
            <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="text-3xl font-bold text-yellow-400 mb-2">10K+</div>
              <div className="text-gray-400">Students Helped</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}