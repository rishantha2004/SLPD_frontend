import axios from 'axios';
import { BASE_URL } from '../enviroment';
export const loginAdmin = async ({ firstName, password}) => {
    try {
        const response = await axios.post(`http://${BASE_URL}:8000/api/login/login-web`, { firstName , password});
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };