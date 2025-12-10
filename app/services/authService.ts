import { apiClient } from '@/app/lib/api';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface AuthResponse {
  success: boolean;
  token?: string;
  user?: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
  message?: string;
}

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const response = await apiClient.post('/auth/login/', credentials);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  },

  async register(userData: RegisterData): Promise<AuthResponse> {
    try {
      const enableSignup = process.env.NEXT_PUBLIC_ENABLE_SIGNUP === 'true';
      if (!enableSignup && userData.role !== 'MASTER_ADMIN') {
        throw new Error('Public signup is disabled. Contact administrator.');
      }

      const response = await apiClient.post('/auth/register/', userData);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  },

  async logout(): Promise<void> {
    try {
      await apiClient.post('/auth/logout/');
    } catch (error) {
      console.error('Logout API error:', error);
    }
  },

  async getCurrentUser(): Promise<AuthResponse> {
    try {
      const response = await apiClient.get('/auth/currentUser/');
      return response.data;
    } catch (error) {
      throw new Error('Failed to get user data');
    }
  }
};