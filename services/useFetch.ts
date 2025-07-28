import { useEffect, useState } from "react";

export const useFetch = <T>(
  fetchFunction: () => Promise<T>,
  autoFetch: boolean = true,
) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(autoFetch);

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, [autoFetch]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchFunction();
      setData(data);
    } catch (error: any) {
      setData(null);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setData(null);
    setError(null);
    setLoading(false);
  };

  return { data, error, loading, refetch: fetchData, reset };
};
