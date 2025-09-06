import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Download, Filter, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Button from '../components/Button';

interface Question {
  id: string;
  name: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  practiceLink: string;
  resources: {
    name: string;
    type: 'PDF' | 'Video' | 'Article';
    downloadUrl: string;
  }[];
  topic: string;
}

const mockQuestions: Question[] = [
  {
    id: '1',
    name: 'Two Sum',
    description: 'Find two numbers in array that add up to target sum using optimal approach',
    difficulty: 'Easy',
    practiceLink: 'https://leetcode.com/problems/two-sum/',
    resources: [
      { name: 'Solution Guide', type: 'PDF', downloadUrl: '#' },
      { name: 'Video Tutorial', type: 'Video', downloadUrl: '#' }
    ],
    topic: 'arrays'
  },
  {
    id: '2',
    name: 'Longest Substring Without Repeating',
    description: 'Find length of longest substring without repeating characters using sliding window',
    difficulty: 'Medium',
    practiceLink: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
    resources: [
      { name: 'Algorithm Explanation', type: 'Article', downloadUrl: '#' },
      { name: 'Code Examples', type: 'PDF', downloadUrl: '#' }
    ],
    topic: 'arrays'
  },
  {
    id: '3',
    name: 'Median of Two Sorted Arrays',
    description: 'Find median of two sorted arrays with optimal time complexity using binary search',
    difficulty: 'Hard',
    practiceLink: 'https://leetcode.com/problems/median-of-two-sorted-arrays/',
    resources: [
      { name: 'Advanced Solution', type: 'PDF', downloadUrl: '#' },
      { name: 'Walkthrough Video', type: 'Video', downloadUrl: '#' }
    ],
    topic: 'arrays'
  },
  {
    id: '4',
    name: 'Reverse Linked List',
    description: 'Reverse a singly linked list iteratively and recursively',
    difficulty: 'Easy',
    practiceLink: 'https://leetcode.com/problems/reverse-linked-list/',
    resources: [
      { name: 'Visual Guide', type: 'PDF', downloadUrl: '#' },
      { name: 'Implementation Tips', type: 'Article', downloadUrl: '#' }
    ],
    topic: 'linkedlists'
  }
];

// Sample questions for different topics
const questionsByTopic = {
  lr: [
    { id: 'lr1', name: 'Pattern Recognition', description: 'Identify patterns in sequences and solve logical puzzles', difficulty: 'Medium' as const },
    { id: 'lr2', name: 'Blood Relations', description: 'Solve family relationship problems using logical reasoning', difficulty: 'Easy' as const }
  ],
  quantitative: [
    { id: 'q1', name: 'Profit and Loss', description: 'Calculate profit, loss percentages and cost prices', difficulty: 'Medium' as const },
    { id: 'q2', name: 'Time and Work', description: 'Solve problems related to work efficiency and time', difficulty: 'Hard' as const }
  ],
  verbal: [
    { id: 'v1', name: 'Reading Comprehension', description: 'Answer questions based on given passages', difficulty: 'Medium' as const },
    { id: 'v2', name: 'Sentence Correction', description: 'Identify and correct grammatical errors', difficulty: 'Easy' as const }
  ]
};

export default function PracticePage() {
  const { topic } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('All');

  const getTopicTitle = (topicId: string | undefined) => {
    const titleMap: { [key: string]: string } = {
      'arrays': 'Arrays & Strings',
      'linkedlists': 'Linked Lists',
      'lr': 'Logical Reasoning',
      'quantitative': 'Quantitative Aptitude',
      'verbal': 'Verbal Ability',
      'behavioral': 'Behavioral Questions',
      'system-design': 'System Design',
      'hr-round': 'HR Round'
    };
    return titleMap[topicId || ''] || 'Practice';
  };

  const getBackPath = () => {
    if (['lr', 'quantitative', 'verbal'].includes(topic || '')) {
      return '/aptitude';
    } else if (['behavioral', 'system-design', 'hr-round'].includes(topic || '')) {
      return '/interview';
    }
    return '/dsa';
  };

  // Get questions for current topic
  const getQuestionsForTopic = () => {
    if (topic && ['lr', 'quantitative', 'verbal'].includes(topic)) {
      const aptitudeQuestions = questionsByTopic[topic as keyof typeof questionsByTopic] || [];
      return aptitudeQuestions.map(q => ({
        ...q,
        practiceLink: '#',
        resources: [
          { name: 'Practice Sheet', type: 'PDF' as const, downloadUrl: '#' },
          { name: 'Solutions', type: 'PDF' as const, downloadUrl: '#' }
        ],
        topic: topic
      }));
    }
    return mockQuestions.filter(q => q.topic === topic);
  };

  const questions = getQuestionsForTopic();

  const filteredQuestions = questions.filter(question => {
    const matchesSearch = question.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         question.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = difficultyFilter === 'All' || question.difficulty === difficultyFilter;
    return matchesSearch && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400 bg-green-400/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-400/20';
      case 'Hard': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'PDF': return '📄';
      case 'Video': return '🎥';
      case 'Article': return '📖';
      default: return '📎';
    }
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
              onClick={() => navigate(getBackPath())}
            >
              Back
            </Button>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{getTopicTitle(topic)}</h1>
              <p className="text-gray-400">Practice problems to master this topic</p>
            </div>
          </div>

          {/* Filters */}
          <Card className="p-6 mb-8" glassmorphism>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                />
              </div>

              {/* Difficulty Filter */}
              <div className="flex items-center gap-3">
                <Filter className="text-gray-400" size={20} />
                <select
                  value={difficultyFilter}
                  onChange={(e) => setDifficultyFilter(e.target.value)}
                  className="bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                >
                  <option value="All">All Difficulties</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
            </div>
          </Card>

          {/* Questions Table */}
          <Card className="overflow-hidden" glassmorphism>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900/50 border-b border-gray-800">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
                      Question
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
                      Difficulty
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
                      Practice
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
                      Resources
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {filteredQuestions.map((question, index) => (
                    <tr 
                      key={question.id}
                      className="hover:bg-gray-900/30 transition-colors duration-200 group"
                    >
                      <td className="px-6 py-4">
                        <div className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
                          {question.name}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-gray-400 text-sm max-w-md">
                          {question.description.length > 80 
                            ? `${question.description.substring(0, 80)}...` 
                            : question.description
                          }
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(question.difficulty)}`}>
                          {question.difficulty}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <Button
                          variant="primary"
                          size="sm"
                          icon={ExternalLink}
                          onClick={() => window.open(question.practiceLink, '_blank')}
                        >
                          Practice
                        </Button>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          {question.resources?.map((resource, resIndex) => (
                            <button
                              key={resIndex}
                              onClick={() => console.log('Downloading:', resource.name)}
                              className="inline-flex items-center gap-1 px-3 py-1 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-sm text-gray-300 hover:text-white transition-colors duration-200"
                            >
                              <span>{getResourceIcon(resource.type)}</span>
                              <span>{resource.name}</span>
                              <Download size={14} />
                            </button>
                          )) || (
                            <span className="text-gray-500 text-sm">No resources</span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Empty State */}
          {filteredQuestions.length === 0 && (
            <div className="text-center py-16">
              <div className="p-4 bg-gray-900 rounded-full inline-block mb-4">
                <Search size={48} className="text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                No questions found
              </h3>
              <p className="text-gray-400">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <Card className="p-4 text-center" glassmorphism>
              <div className="text-2xl font-bold text-blue-400 mb-1">{filteredQuestions.length}</div>
              <div className="text-sm text-gray-400">Total Problems</div>
            </Card>
            <Card className="p-4 text-center" glassmorphism>
              <div className="text-2xl font-bold text-green-400 mb-1">
                {filteredQuestions.filter(q => q.difficulty === 'Easy').length}
              </div>
              <div className="text-sm text-gray-400">Easy</div>
            </Card>
            <Card className="p-4 text-center" glassmorphism>
              <div className="text-2xl font-bold text-yellow-400 mb-1">
                {filteredQuestions.filter(q => q.difficulty === 'Medium').length}
              </div>
              <div className="text-sm text-gray-400">Medium</div>
            </Card>
            <Card className="p-4 text-center" glassmorphism>
              <div className="text-2xl font-bold text-red-400 mb-1">
                {filteredQuestions.filter(q => q.difficulty === 'Hard').length}
              </div>
              <div className="text-sm text-gray-400">Hard</div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}