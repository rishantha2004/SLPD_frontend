import axios from 'axios';

export const loginAdmin = async ({ firstName, password}) => {
    try {
        const response = await axios.post('http://localhost:8000/api/login/login-web', { firstName , password});
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };