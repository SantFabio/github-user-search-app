import { useState, useEffect } from 'react';

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const token = import.meta.env.VITE_GITHUB_TOKEN;
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!token) {
          throw new Error("GitHub token is missing.");
        }
        const response = await fetch(url ? url: "https://api.github.com/users/octocat", {
          headers: {
            'Authorization': `token ${token}`
          }
        })
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setError(null)
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, token]);

  return { data, loading, error };
}

export default useFetch;
