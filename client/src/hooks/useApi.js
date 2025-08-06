import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) => {
      const message = err.response?.data?.message || err.message || 'An unknown error occurred.';
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export default useApi;