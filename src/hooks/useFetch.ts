import { useCallback, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const request = useCallback(async (url: string, options: object) => {
    let response;
    let json;
    try{
        setError(null);
        setLoading(true);

        response = await fetch(url, options);
        json = await response.json();

        if(!response.ok) throw new Error(json.message);
    } catch (e: any) {
        json = null;
        setError(e.message);
    } finally {
        setData(json);
        setLoading(false);

        return {response, json}
    }

  }, []);
  return {
    data,
    error,
    loading,
    request
  }
}

export default useFetch;