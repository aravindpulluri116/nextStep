import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, TrendingUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Button from '../components/Button';

const dsaTopics = [
  {
    id: 'arrays',
    title: 'Arrays & Strings',
    description: 'Master fundamental data structures used in most coding problems',
    difficulty: 'Easy',
    questions: 50,
    estimatedTime: '2-3 weeks',
    concepts: ['Two Pointers', 'Sliding Window', 'Prefix Sum', 'String Manipulation'],
    color: 'blue'
  },
  {
    id: 'linkedlists',
    title: 'Linked Lists',
    description: 'Understand pointer manipulation and dynamic data structures',
    difficulty: 'Medium',
    questions: 30,
    estimatedTime: '1-2 weeks',
    concepts: ['Traversal', 'Reversal', 'Fast & Slow Pointers', 'Merge Operations'],
    color: 'green'
  },
  {
    id: 'stacks-queues',
    title: 'Stacks & Queues',
    description: 'Learn LIFO and FIFO operations for problem solving',
    difficulty: 'Medium',
    questions: 25,
    estimatedTime: '1 week',
    concepts: ['Monotonic Stack', 'Next Greater Element', 'BFS Implementation'],
    color: 'purple'
  },
  {
    id: 'trees',
    title: 'Binary Trees',
    description: 'Explore hierarchical data structures and tree traversals',
    difficulty: 'Medium',
    questions: 40,
    estimatedTime: '2-3 weeks',
    concepts: ['DFS/BFS', 'Tree Construction', 'Path Problems', 'BST Operations'],
    color: 'yellow'
  },
  {
    id: 'graphs',
    title: 'Graphs',
    description: 'Master complex relationships and graph algorithms',
    difficulty: 'Hard',
    questions: 35,
    estimatedTime: '3-4 weeks',
    concepts: ['DFS/BFS', 'Shortest Path', 'Topological Sort', 'Union Find'],
    color: 'red'
  },
  {
    id: 'dp',
    title: 'Dynamic Programming',
    description: 'Solve optimization problems using memoization techniques',
    difficulty: 'Hard',
    questions: 45,
    estimatedTime: '4-5 weeks',
    concepts: ['1D DP', '2D DP', 'Knapsack', 'LIS/LCS', 'State Machines'],
    color: 'orange'
  }
];

export default function DSASubtopicsPage() {
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
      purple: 'from-purple-500 to-purple-700 shadow-purple-500/25',
      yellow: 'from-yellow-500 to-yellow-700 shadow-yellow-500/25',
      red: 'from-red-500 to-red-700 shadow-red-500/25',
      orange: 'from-orange-500 to-orange-700 shadow-orange-500/25'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getButtonVariant = (color: string) => {
    const variantMap = {
      blue: 'primary',
      green: 'success',
      purple: 'purple',
      yellow: 'warning',
      red: 'error',
      orange: 'warning'
    };
    return variantMap[color as keyof typeof variantMap] as 'primary' | 'success' | 'purple' | 'warning' | 'error';
  };

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
              onClick={() => navigate('/placement-preparation')}
            >
              Back
            </Button>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Data Structures & Algorithms</h1>
              <p className="text-gray-400">Master the fundamentals of computer science</p>
            </div>
          </div>

          {/* Learning Path */}
          <Card className="p-6 mb-8" glassmorphism>
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="text-blue-400" size={24} />
              <h2 className="text-xl font-bold text-white">Recommended Learning Path</h2>
            </div>
            <p className="text-gray-400 mb-4">
              Follow this structured path to master DSA concepts progressively, from basic to advanced topics.
            </p>
            <div className="flex flex-wrap gap-2">
              {dsaTopics.map((topic, index) => (
                <span
                  key={topic.id}
                  className={`px-3 py-1 rounded-full text-sm font-medium border ${
                    index === 0 ? 'bg-green-600/20 text-green-400 border-green-600/30' :
                    index <= 2 ? 'bg-blue-600/20 text-blue-400 border-blue-600/30' :
                    'bg-gray-600/20 text-gray-400 border-gray-600/30'
                  }`}
                >
                  {index + 1}. {topic.title}
                </span>
              ))}
            </div>
          </Card>

          {/* Topics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dsaTopics.map((topic, index) => (
              <Card key={topic.id} className="p-6 group" glassmorphism>
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${getColorClasses(topic.color)} group-hover:shadow-lg transition-all duration-300`}>
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(topic.difficulty)}`}>
                    {topic.difficulty}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-white mb-2">{topic.title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{topic.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-3 bg-gray-900/50 rounded-lg border border-gray-800">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{topic.questions}</div>
                    <div className="text-xs text-gray-400">Problems</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-400">{topic.estimatedTime}</div>
                    <div className="text-xs text-gray-400">Est. Time</div>
                  </div>
                </div>

                {/* Concepts */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    Key Concepts
                  </h4>
                  <div className="grid grid-cols-2 gap-1">
                    {topic.concepts.map((concept, conceptIndex) => (
                      <div key={conceptIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-300 text-xs">{concept}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Start Button */}
                <Button
                  variant={getButtonVariant(topic.color)}
                  size="md"
                  icon={Play}
                  className="w-full"
                  onClick={() => navigate(`/practice/${topic.id}`)}
                >
                  Start Learning
                </Button>
              </Card>
            ))}
          </div>

          {/* Progress Tracking */}
          <Card className="mt-12 p-8" glassmorphism>
            <h2 className="text-2xl font-bold text-white mb-6">📊 Track Your Progress</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <div className="text-2xl font-bold text-green-400 mb-2">0/225</div>
                <div className="text-sm text-gray-400">Problems Solved</div>
              </div>
              <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <div className="text-2xl font-bold text-blue-400 mb-2">0%</div>
                <div className="text-sm text-gray-400">Overall Progress</div>
              </div>
              <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <div className="text-2xl font-bold text-yellow-400 mb-2">0</div>
                <div className="text-sm text-gray-400">Topics Completed</div>
              </div>
              <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <div className="text-2xl font-bold text-purple-400 mb-2">0</div>
                <div className="text-sm text-gray-400">Days Streak</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}