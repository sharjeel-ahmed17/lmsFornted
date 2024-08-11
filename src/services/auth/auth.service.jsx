import axios from 'axios';

const API_URL = 'https://lms-virid-six.vercel.app';

export const signUp = async (userData) => {
    return await axios.post(`${API_URL}/users/signup`, userData);
};

export const verifyOTP = async (otpData) => {
    return await axios.post(`${API_URL}/users/verify-otp`, otpData);
};

export const login = async (userData) => {
    return await axios.post(`${API_URL}/users/login`, userData);
};
