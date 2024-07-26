// src/services/api.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8080/api/v3';
const API_KEY = "process.env.REACT_APP_API_KEY";

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'api_key': API_KEY,
    },
});

apiClient.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export const getTasksByStatus = (status) => {
    return apiClient.get(`/task/findByStatus?status=${status}`);
};

export const getTaskById = (taskId) => {
    return apiClient.get(`/task/${taskId}`);
};

export const addTask = (task) => {
    return apiClient.post('/task', task);
};

export const updateTask = (taskId, task) => {
    return apiClient.put(`/task/${taskId}`, task);
};

export const deleteTask = (taskId) => {
    return apiClient.delete(`/task/${taskId}`);
};
