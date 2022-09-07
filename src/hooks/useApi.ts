import React from "react";
import { CACHE_NAME } from "../lib/constants";
import { getData } from "../lib/utils";

const useApi = () => {
  const baseUrl = "https://jsonplaceholder.typicode.com/";

  const fetcher = async (endpoint: string, options?: RequestInit) => {
    const url = `${baseUrl}${endpoint}`;

    const response = await getData(CACHE_NAME, url);

    return response;
  };

  const get = async (endpoint: string, options?: RequestInit) => {
    return await fetcher(endpoint, {
      ...options,
      method: "GET",
    });
  };

  const post = async (endpoint: string, body: any, options?: RequestInit) => {
    return await fetcher(endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const patch = async (endpoint: string, body: any, options?: RequestInit) => {
    return await fetcher(endpoint, {
      ...options,
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const deleteMethod = async (endpoint: string, options?: RequestInit) => {
    return await fetcher(endpoint, {
      ...options,
      method: "DELETE",
    });
  };

  return Object.assign(fetcher, { get, post, patch, delete: deleteMethod });
};

export default useApi;
