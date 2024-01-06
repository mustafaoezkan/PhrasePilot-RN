import axiosInstance from '../api/axios';
import { useState } from 'react';

const useGetWords = () => {
  const [wordList, setWordList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState();
  const [message, setMessage] = useState();
  const [error, setError] = useState();

  const fetchWords = async (page) => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`/words?page=${page}`, {
        needsToken: true
      });
      setWordList(response.data.words);
      setStatus(response?.status);
      setMessage(response?.data?.message);
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

  return { wordList, fetchWords, loading, status, message, error };
};

export default useGetWords;
