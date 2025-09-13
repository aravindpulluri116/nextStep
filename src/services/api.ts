import { API_ENDPOINTS, getApiUrl, getAuthHeaders } from '../config/api';

// Types
export interface User {
  _id: string;
  name: string;
  email: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  user?: User;
  token?: string;
  message?: string;
}

export interface Branch {
  _id: string;
  branchName: string;
}

export interface Subject {
  _id: string;
  subjectName: string;
  subjectCode: string;
}

export interface PlacementTopic {
  _id: string;
  topicName: string;
  description?: string;
}

export interface PlacementQuestion {
  _id: string;
  question: string;
  difficulty: 'easy' | 'medium' | 'hard';
  topic: string;
  subtopic: string;
  links?: string[];
}

// API Service Class
class ApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';
  }

  // Generic HTTP methods
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = getApiUrl(endpoint);
    
    const config: RequestInit = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      credentials: 'include',
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Authentication methods
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    return this.request<AuthResponse>(API_ENDPOINTS.AUTH.LOGIN, {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async register(userData: RegisterRequest): Promise<AuthResponse> {
    return this.request<AuthResponse>(API_ENDPOINTS.AUTH.REGISTER, {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async logout(): Promise<{ success: boolean }> {
    return this.request<{ success: boolean }>(API_ENDPOINTS.AUTH.LOGOUT, {
      method: 'POST',
    });
  }

  // Exam preparation methods
  async getBranches(): Promise<Branch[]> {
    return this.request<Branch[]>(API_ENDPOINTS.EXAM_PREP.BRANCHES, {
      method: 'GET',
    });
  }

  async getSubjects(branch: string, sem: string): Promise<Subject[]> {
    return this.request<Subject[]>(`${API_ENDPOINTS.EXAM_PREP.SUBJECTS}/${branch}/${sem}`, {
      method: 'GET',
    });
  }

  async getResources(branch: string, sem: string, subjectId: string, type: 'notes' | 'pyq'): Promise<any[]> {
    return this.request<any[]>(`${API_ENDPOINTS.EXAM_PREP.RESOURCES}/${branch}/${sem}/${subjectId}/${type}`, {
      method: 'GET',
    });
  }

  // Placement preparation methods
  async getPlacementTopics(): Promise<PlacementTopic[]> {
    return this.request<PlacementTopic[]>(API_ENDPOINTS.PLACEMENT_PREP.TOPICS, {
      method: 'GET',
    });
  }

  async getPlacementSubtopics(topic: string): Promise<string[]> {
    return this.request<string[]>(`${API_ENDPOINTS.PLACEMENT_PREP.SUBTOPICS}/${topic}`, {
      method: 'GET',
    });
  }

  async getPlacementQuestions(topic: string, subtopic: string): Promise<PlacementQuestion[]> {
    return this.request<PlacementQuestion[]>(`${API_ENDPOINTS.PLACEMENT_PREP.QUESTIONS}/${topic}/${subtopic}`, {
      method: 'GET',
    });
  }

  // Resource methods
  async getResources(): Promise<any[]> {
    return this.request<any[]>(API_ENDPOINTS.RESOURCES, {
      method: 'GET',
    });
  }
}

// Export singleton instance
export const apiService = new ApiService();
export default apiService;
