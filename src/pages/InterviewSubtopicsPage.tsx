import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, MessageCircle, Users, Settings } from 'lucide-react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Button from '../components/Button';

const interviewTopics = [
  {
    id: 'behavioral',
    title: 'Behavioral Questions',
    description: 'Master the art of storytelling and showcasing your experiences',
    icon: MessageCircle,
    difficulty: 'Medium',
    questions: 25,
    duration: '45 min',
    topics: ['STAR Method', 'Leadership', 'Teamwork', 'Problem Solving', 'Adaptability'],
    color: 'blue',
    tips: 'Prepare specific examples from your experience'
  },
  {
    id: 'system-design',
    title: 'System Design',
    description: 'Learn to design scalable and distributed systems',
    icon: Settings,
    difficulty: 'Hard',
    questions: 15,
    duration: '60 min',
    topics: ['Scalability', 'Load Balancing', 'Database Design', 'Microservices', 'Caching'],
    color: 'purple',
    tips: 'Start with requirements and scale step by step'
  },
  {
    id: 'hr-round',
    title: 'HR Round',
    description: 'Navigate the final hurdle with confidence and professionalism',
    icon: Users,
    difficulty: 'Easy',
    questions: 20,
    duration: '30 min',
    topics: ['Company Research', 'Salary Negotiation', 'Career Goals', 'Work-Life Balance'],
    color: 'green',
    tips: 'Research the company culture and values'
  }
];

const commonQuestions = [
  "Tell me about yourself",
  "Why do you want to work here?",
  "What are your strengths and weaknesses?",
  "Where do you see yourself in 5 years?",
  "Why are you leaving your current job?"
];

export default function InterviewSubtopicsPage() {
  const navigate = useNavigate();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400 bg-green-400/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-400/20';
      case 'Hard': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-700 shadow-blue-500/25',
      green: 'from-green-500 to-green-700 shadow-green-500/25',
      purple: 'from-purple-500 to-purple-700 shadow-purple-500/25'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getButtonVariant = (color: string) => {
    const variantMap = {
      blue: 'primary',
      green: 'success',
      purple: 'purple'
    };
    return variantMap[color as keyof typeof variantMap] as 'primary' | 'success' | 'purple';
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="secondary"
              size="sm"
              icon={ArrowLeft}
              onClick={() => navigate('/placement-preparation')}
            >
              Back
            </Button>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Interview Preparation</h1>
              <p className="text-gray-400">Master all rounds of the interview process</p>
            </div>
          </div>

          {/* Topics Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {interviewTopics.map(topic => (
              <Card key={topic.id} className="p-8 group" glassmorphism>
                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${getColorClasses(topic.color)} group-hover:shadow-lg transition-all duration-300 mb-4`}>
                    <topic.icon size={40} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">{topic.title}</h2>
                  <p className="text-gray-400 leading-relaxed">{topic.description}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{topic.questions}</div>
                    <div className="text-xs text-gray-400">Questions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-400">{topic.duration}</div>
                    <div className="text-xs text-gray-400">Duration</div>
                  </div>
                  <div className="text-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(topic.difficulty)}`}>
                      {topic.difficulty}
                    </span>
                  </div>
                </div>

                {/* Topics List */}
                <div className="space-y-3 mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                    Key Areas
                  </h4>
                  <div className="space-y-2">
                    {topic.topics.map((subtopic, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          topic.color === 'blue' ? 'bg-blue-400' :
                          topic.color === 'green' ? 'bg-green-400' :
                          'bg-purple-400'
                        }`}></div>
                        <span className="text-gray-300 text-sm">{subtopic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tip */}
                <div className="mb-6 p-3 bg-yellow-600/10 border border-yellow-600/30 rounded-lg">
                  <p className="text-yellow-400 text-sm">💡 {topic.tips}</p>
                </div>

                {/* Start Button */}
                <Button
                  variant={getButtonVariant(topic.color)}
                  size="lg"
                  icon={Play}
                  className="w-full"
                  onClick={() => navigate(`/practice/${topic.id}`)}
                >
                  Start Practice
                </Button>
              </Card>
            ))}
          </div>

          {/* Common Questions */}
          <Card className="p-8 mb-8" glassmorphism>
            <h2 className="text-2xl font-bold text-white mb-6">🔥 Most Asked Interview Questions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {commonQuestions.map((question, index) => (
                <div key={index} className="p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-colors duration-200">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold text-sm">{index + 1}.</span>
                    <span className="text-gray-300 text-sm">{question}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Interview Tips */}
          <Card className="p-8" glassmorphism>
            <h2 className="text-2xl font-bold text-white mb-6">🚀 Interview Success Tips</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-blue-400">Before Interview</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Research the company thoroughly</li>
                  <li>• Practice common questions</li>
                  <li>• Prepare your own questions</li>
                  <li>• Review your resume</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-green-400">During Interview</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Maintain eye contact</li>
                  <li>• Use the STAR method</li>
                  <li>• Ask clarifying questions</li>
                  <li>• Stay calm and confident</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-purple-400">After Interview</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Send thank you email</li>
                  <li>• Follow up appropriately</li>
                  <li>• Reflect on performance</li>
                  <li>• Prepare for next rounds</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}