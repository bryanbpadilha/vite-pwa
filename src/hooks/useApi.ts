import React from "react";

const useApi = () => {
  const fetcher = async (endpoint: string, options?: RequestInit) => {
    const url = `https://jsonplaceholder.typicode.com/${endpoint}`;
    const response = await fetch(url, options);

    const isJson = response.headers
      .get("content-type")
      ?.includes("application/json");

    const data = isJson ? await response.json() : null;

    if (response.ok) {
      return data;
    } else {
      throw new Error(response.statusText);
    }
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
