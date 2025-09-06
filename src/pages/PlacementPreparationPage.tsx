import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Code2, MessageCircle, ArrowLeft, TrendingUp, Calendar, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Button from '../components/Button';

const latestPlacementInfo = [
  {
    id: '1',
    company: 'Google',
    role: 'Software Engineer',
    package: '₹2.1 Cr',
    date: 'Dec 2024',
    type: 'On-Campus'
  },
  {
    id: '2',
    company: 'Microsoft',
    role: 'SDE-2',
    package: '₹1.8 Cr',
    date: 'Nov 2024',
    type: 'Pool Campus'
  },
  {
    id: '3',
    company: 'Amazon',
    role: 'Software Engineer',
    package: '₹1.5 Cr',
    date: 'Nov 2024',
    type: 'Virtual'
  },
  {
    id: '4',
    company: 'Netflix',
    role: 'Frontend Engineer',
    package: '₹1.9 Cr',
    date: 'Oct 2024',
    type: 'On-Campus'
  }
];

export default function PlacementPreparationPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="secondary"
              size="sm"
              icon={ArrowLeft}
              onClick={() => navigate('/home')}
            >
              Back
            </Button>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Placement Preparation</h1>
              <p className="text-gray-400">Master the skills needed for your dream job</p>
            </div>
          </div>

          {/* Latest Placement Info */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="text-green-400" size={24} />
              <h2 className="text-2xl font-bold text-white">Latest Placement Updates</h2>
            </div>
            
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {latestPlacementInfo.map(info => (
                <Card key={info.id} className="min-w-[300px] p-6 flex-shrink-0" glassmorphism>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-white">{info.company}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      info.type === 'On-Campus' ? 'bg-green-600/20 text-green-400' :
                      info.type === 'Pool Campus' ? 'bg-blue-600/20 text-blue-400' :
                      'bg-purple-600/20 text-purple-400'
                    }`}>
                      {info.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-2">{info.role}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-400">{info.package}</span>
                    <div className="flex items-center gap-1 text-gray-400">
                      <Calendar size={16} />
                      <span className="text-sm">{info.date}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Main Preparation Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card
              className="p-8 min-h-[280px] flex flex-col justify-between group cursor-pointer"
              onClick={() => navigate('/aptitude')}
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                    <Brain size={32} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Aptitude</h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Sharpen your logical reasoning, quantitative, and verbal skills
                </p>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-blue-400">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Logical Reasoning</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Quantitative Aptitude</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Verbal Ability</span>
                </div>
              </div>
            </Card>

            <Card
              className="p-8 min-h-[280px] flex flex-col justify-between group cursor-pointer"
              onClick={() => navigate('/dsa')}
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                    <Code2 size={32} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">DSA</h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Master data structures and algorithms for technical interviews
                </p>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-purple-400">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Arrays & Strings</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Trees & Graphs</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Dynamic Programming</span>
                </div>
              </div>
            </Card>

            <Card
              className="p-8 min-h-[280px] flex flex-col justify-between group cursor-pointer"
              onClick={() => navigate('/interview')}
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-green-700 rounded-xl group-hover:shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
                    <MessageCircle size={32} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Interview</h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Ace your behavioral and technical interview rounds
                </p>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Behavioral Questions</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>System Design</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>HR Round Tips</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Success Stats */}
          <Card className="p-8" glassmorphism>
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-yellow-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Success Stories</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
                <div className="text-gray-400 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">₹12L</div>
                <div className="text-gray-400 text-sm">Average Package</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">150+</div>
                <div className="text-gray-400 text-sm">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">5K+</div>
                <div className="text-gray-400 text-sm">Students Placed</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}