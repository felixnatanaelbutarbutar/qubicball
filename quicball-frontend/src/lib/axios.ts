import axios from 'axios';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { useAuthStore } from '@/store/useAuthStore';
>>>>>>> upstream/main

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Adjust if backend runs on different port
=======
import { useAuthStore } from '@/store/useAuthStore';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api', // Adjust if backend runs on different port
>>>>>>> upstream/main
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add token
api.interceptors.request.use(
  (config) => {
<<<<<<< HEAD
<<<<<<< HEAD
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
=======
=======
>>>>>>> upstream/main
    // Import store dynamically or at top if circular dependency isn't an issue. 
    // Since store imports are usually fine, we can try top level, but for safety in this file:
    // actually, let's import at top.

    // However, if I import at top, I need to make sure I add the import line. 
    // I will replace the whole file content or use a larger chunk to include imports?
    // I'll use replace_file_content and assume I can add import. 
    // Wait, I can't easily add import at top with this tool if I target the middle.
    // I will use replace_file_content on the whole file or large chunk.

    // Better strategy: read the token from useAuthStore.getState().token
    // But I need to import useAuthStore.

    // CHECK if I can import useAuthStore without circular dependency. 
    // useAuthStore doesn't import api. So it's fine.

    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
<<<<<<< HEAD
>>>>>>> upstream/main
=======
>>>>>>> upstream/main
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        // Handle unauthorized (logout)
<<<<<<< HEAD
<<<<<<< HEAD
        if (typeof window !== 'undefined') {
          localStorage.removeItem('token');
          // Optional: Redirect to login
          // window.location.href = '/login';
        }
      }
      if (error.response.status === 429) {
        // Rate limited
        console.warn('Rate limit exceeded');
        // We can dispatch an event or use a toast here
=======
=======
>>>>>>> upstream/main
        useAuthStore.getState().logout();
      }
      if (error.response.status === 429) {
        console.warn('Rate limit exceeded');
<<<<<<< HEAD
>>>>>>> upstream/main
=======
>>>>>>> upstream/main
      }
    }
    return Promise.reject(error);
  }
);

export default api;
