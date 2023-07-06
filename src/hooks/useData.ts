// Generic Data Fetching Hook

import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
    count: number;
    results: T[];
}


const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const controller = new AbortController();
      
        apiClient
            .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
            .then((res) => {
                setData(res.data.results);
                setTimeout(() => {
                setLoading(false);
            }, 2000);
          })
          .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setTimeout(() => {
                setLoading(false);
            }, 2000);
          });
      
        return () => controller.abort();
      }, deps ? [...deps] : []);
      return { data, error, isLoading };
      }

export default useData;