import axiosInstance from '../api/axios';
import { useState } from 'react';
import { setLocalStorage } from '../util/common';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post(
        '/auth/login',
        {
          email,
          password
        },
        { needsToken: false }
      );

      setLocalStorage({ key: 'token', value: response?.data?.token });
      setLocalStorage({ key: 'userId', value: response?.data?.userId });
      setStatus(response?.status);
      setLoading(false);
      return response;
    } catch (error) {
      if (error.response) {
        setStatus(error.response.status);
        setError(error.response.data.message);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error during request setup:', error.message);
      }
      setLoading(false);
      return Promise.reject(error);
    }
  };

  return { login, loading, status, error };
};

export default useLogin;
