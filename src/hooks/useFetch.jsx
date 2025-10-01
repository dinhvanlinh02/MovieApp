import { useState, useEffect, useCallback } from "react";

export default function useFetch({ url, method = "GET", headers = {} }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_HOST}${url}`, {
        method,
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
          ...headers,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const jsonResponse = await response.json();
      setData(jsonResponse);
    } catch (err) {
      console.error("Error fetching:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [url, method]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, refetch: fetchData };
}
