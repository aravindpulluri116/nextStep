import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Calculator, MessageSquare, ArrowLeft, Play } from 'lucide-react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Button from '../components/Button';

const aptitudeTopics = [
  {
    id: 'lr',
    title: 'Logical Reasoning',
    description: 'Enhance your logical thinking and problem-solving abilities',
    icon: Brain,
    topics: ['Patterns', 'Analogies', 'Blood Relations', 'Syllogisms', 'Coding-Decoding'],
    difficulty: 'Medium',
    questions: 45,
    color: 'blue'
  },
  {
    id: 'quantitative',
    title: 'Quantitative Aptitude',
    description: 'Master mathematical concepts and numerical reasoning',
    icon: Calculator,
    topics: ['Arithmetic', 'Algebra', 'Geometry', 'Probability', 'Data Interpretation'],
    difficulty: 'Hard',
    questions: 60,
    color: 'green'
  },
  {
    id: 'verbal',
    title: 'Verbal Ability',
    description: 'Improve language skills and reading comprehension',
    icon: MessageSquare,
    topics: ['Grammar', 'Vocabulary', 'Reading Comprehension', 'Sentence Correction'],
    difficulty: 'Easy',
    questions: 35,
    color: 'purple'
  }
];

export default function AptitudeSubtopicsPage() {
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
    switch (color) {
      case 'blue': return 'from-blue-500 to-blue-700 shadow-blue-500/25';
      case 'green': return 'from-green-500 to-green-700 shadow-green-500/25';
      case 'purple': return 'from-purple-500 to-purple-700 shadow-purple-500/25';
      default: return 'from-blue-500 to-blue-700 shadow-blue-500/25';
    }
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
              <h1 className="text-4xl font-bold text-white mb-2">Aptitude Preparation</h1>
              <p className="text-gray-400">Choose a topic to start practicing</p>
            </div>
          </div>

          {/* Topics Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {aptitudeTopics.map(topic => (
              <Card key={topic.id} className="p-8 group" glassmorphism>
                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${getColorClasses(topic.color)} group-hover:shadow-lg transition-all duration-300 mb-4`}>
                    <topic.icon size={40} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">{topic.title}</h2>
                  <p className="text-gray-400 leading-relaxed">{topic.description}</p>
                </div>

                {/* Stats */}
                <div className="flex justify-between items-center mb-6 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">{topic.questions}</div>
                    <div className="text-sm text-gray-400">Questions</div>
                  </div>
                  <div className="text-center">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(topic.difficulty)}`}>
                      {topic.difficulty}
                    </span>
                  </div>
                </div>

                {/* Topics List */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                    Covered Topics
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

                {/* Start Button */}
                <Button
                  variant={topic.color === 'green' ? 'success' : topic.color === 'purple' ? 'purple' : 'primary'}
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

          {/* Tips Section */}
          <Card className="mt-12 p-8" glassmorphism>
            <h2 className="text-2xl font-bold text-white mb-6">💡 Preparation Tips</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-blue-400">Practice Regularly</h3>
                <p className="text-gray-400 text-sm">Dedicate at least 2 hours daily to aptitude practice for consistent improvement.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-green-400">Time Management</h3>
                <p className="text-gray-400 text-sm">Focus on solving questions quickly and accurately. Practice under timed conditions.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-purple-400">Track Progress</h3>
                <p className="text-gray-400 text-sm">Monitor your performance and identify weak areas that need more attention.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}