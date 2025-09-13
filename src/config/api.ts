// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

// API Endpoints
export const API_ENDPOINTS = {
  // Authentication
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
  },
  
  // Exam Preparation
  EXAM_PREP: {
    BRANCHES: '/examprep/branches',
    SUBJECTS: '/examprep/branch/sem',
    RESOURCES: '/examprep/branch/sem/subid/type',
  },
  
  // Placement Preparation
  PLACEMENT_PREP: {
    TOPICS: '/placementprep/topics',
    SUBTOPICS: '/placementprep/topics',
    QUESTIONS: '/placementprep/topics',
  },
  
  // Resources
  RESOURCES: '/resources',
} as const;

// HTTP Client Configuration
export const HTTP_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include', // For cookies
};

// Helper function to get full API URL
export const getApiUrl = (endpoint: string): string => {
  return `${API_BASE_URL}${endpoint}`;
};

// Helper function to get auth headers
export const getAuthHeaders = (token?: string) => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  
  return headers;
};
