import axiosInstance from '../api/axios';
import { useState } from 'react';
import { setLocalStorage } from '../util/common';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    await axiosInstance
      .post(
        '/auth/login',
        {
          email,
          password
        },
        { needsToken: false }
      )
      .then((response) => {
        setLocalStorage({ key: 'token', value: response?.data?.token });
        setLocalStorage({ key: 'userId', value: response?.data?.userId });
        setStatus(response?.status);
        setLoading(false);
        return response;
      })
      .catch((error) => {
        const { response } = error;
        setStatus(response?.status);
        setError(response?.data?.message);
        setLoading(false);
        return response;
      });
  };

  return { login, loading, status, error };
};

export default useLogin;
