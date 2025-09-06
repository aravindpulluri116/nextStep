import React, { useState } from 'react';
import { Download, FileText, BookOpen, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Button from '../components/Button';

type ContentType = 'notes' | 'pyqs';

interface PPTCard {
  id: string;
  title: string;
  subject: string;
  branch: string;
  type: ContentType;
  downloadUrl: string;
  preview: string;
}

const mockPPTData: PPTCard[] = [
  {
    id: '1',
    title: 'Data Structures Fundamentals',
    subject: 'Computer Science',
    branch: 'CSE',
    type: 'notes',
    downloadUrl: '#',
    preview: 'Complete guide to arrays, linked lists, stacks and queues with examples.'
  },
  {
    id: '2',
    title: 'Operating Systems - PYQ 2023',
    subject: 'Computer Science',
    branch: 'CSE',
    type: 'pyqs',
    downloadUrl: '#',
    preview: 'Previous year questions covering process management and memory allocation.'
  },
  {
    id: '3',
    title: 'Digital Signal Processing',
    subject: 'Electronics',
    branch: 'ECE',
    type: 'notes',
    downloadUrl: '#',
    preview: 'Comprehensive notes on DSP concepts, transforms, and filters.'
  },
  {
    id: '4',
    title: 'Control Systems - PYQ 2023',
    subject: 'Electronics',
    branch: 'ECE',
    type: 'pyqs',
    downloadUrl: '#',
    preview: 'Previous year questions on stability analysis and controller design.'
  },
  {
    id: '5',
    title: 'Thermodynamics',
    subject: 'Mechanical',
    branch: 'ME',
    type: 'notes',
    downloadUrl: '#',
    preview: 'Complete thermodynamics concepts with solved examples.'
  },
  {
    id: '6',
    title: 'Fluid Mechanics - PYQ 2023',
    subject: 'Mechanical',
    branch: 'ME',
    type: 'pyqs',
    downloadUrl: '#',
    preview: 'Previous year questions on fluid flow and hydraulic machines.'
  }
];

const branches = ['All', 'CSE', 'ECE', 'ME', 'CE', 'EEE'];

export default function ExamPreparationPage() {
  const navigate = useNavigate();
  const [selectedBranch, setSelectedBranch] = useState<string>('All');
  const [contentType, setContentType] = useState<ContentType>('notes');

  const filteredPPTs = mockPPTData.filter(ppt => {
    const branchMatch = selectedBranch === 'All' || ppt.branch === selectedBranch;
    const typeMatch = ppt.type === contentType;
    return branchMatch && typeMatch;
  });

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
              <h1 className="text-4xl font-bold text-white mb-2">Exam Preparation</h1>
              <p className="text-gray-400">Access study materials and previous year questions by branch</p>
            </div>
          </div>

          {/* Controls */}
          <div className="bg-gray-900 rounded-xl p-6 mb-8 border border-gray-800">
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
              {/* Branch Selection */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-medium text-gray-300">Select Branch</label>
                <select
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                >
                  {branches.map(branch => (
                    <option key={branch} value={branch}>{branch}</option>
                  ))}
                </select>
              </div>

              {/* Content Type Toggle */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-medium text-gray-300">Content Type</label>
                <div className="flex bg-gray-800 rounded-lg p-1 border border-gray-700">
                  <button
                    onClick={() => setContentType('notes')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      contentType === 'notes'
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Notes
                  </button>
                  <button
                    onClick={() => setContentType('pyqs')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      contentType === 'pyqs'
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    PYQs
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* PPT Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPPTs.map(ppt => (
              <Card key={ppt.id} className="p-6 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${
                    ppt.type === 'notes' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-green-600 text-white'
                  }`}>
                    {ppt.type === 'notes' ? <BookOpen size={20} /> : <FileText size={20} />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
                      {ppt.title}
                    </h3>
                    <p className="text-sm text-gray-400">{ppt.branch} • {ppt.subject}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  {ppt.preview}
                </p>
                
                <div className="flex justify-end">
                  <Button
                    variant="success"
                    size="sm"
                    icon={Download}
                    onClick={() => {
                      // Simulate download
                      console.log('Downloading:', ppt.title);
                    }}
                  >
                    Download
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredPPTs.length === 0 && (
            <div className="text-center py-16">
              <div className="p-4 bg-gray-900 rounded-full inline-block mb-4">
                <FileText size={48} className="text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                No materials found
              </h3>
              <p className="text-gray-400">
                Try selecting a different branch or content type.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}