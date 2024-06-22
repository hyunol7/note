// src/api/loginApi.js
import axios from 'axios';

const API_SERVER_HOST = "http://localhost";
const prefix = `${API_SERVER_HOST}/user`;

export const registerUser = async (user) => {
    const response = await axios.post(`${prefix}/register`, user);
    return response.data;
}

export const loginUser = async (user) => {
    const response = await axios.post(`${prefix}/login`, user);
    return response.data;
}

export const getUser = async (userId) => {
    const response = await axios.get(`${prefix}/${userId}`);
    return response.data;
}
