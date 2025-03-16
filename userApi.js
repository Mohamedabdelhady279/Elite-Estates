import axios from 'axios';
import { setuser } from './src/lib/UserNameSlice';

const API_BASE_URL = 'https://login-production-4cdb.up.railway.app/api/users';



// انشاء حساب 
export const registerUser = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, { name, email, password });

    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
};



// تسجيل الدخول
export const loginUser = async (email, password,dispatch) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { email, password });

    if (response.data.token) {
      localStorage.setItem('token', response.data.token); // حفظ التوكن
     // تحديث Redux بعد تسجيل الدخول
     dispatch(setuser(response.data.user)); 
    }

    return response.data;
  } catch (error) {
    console.error("Login Error:", error.response?.data || error.message);

    throw new Error(error.response?.data?.message || 'Login failed');
  }
};


// تحديث بيانات المستخدم
export const updateUser = async (userData) => {
  const token = localStorage.getItem('token');

  try {
    const response = await axios.put(`${API_BASE_URL}/update`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Update failed');
  }
};




// جلب بيانات البروفايل
export const getUserProfile = async () => {
  const token = localStorage.getItem('token');

  try {
    const response = await axios.get(`${API_BASE_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch profile');
  }
};