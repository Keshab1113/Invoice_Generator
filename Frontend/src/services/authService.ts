import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

interface UserData {
    username?: string;
    email: string;
    password: string;
}

export const register = async (userData: UserData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
};

export const login = async (userData: UserData) => {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
};
