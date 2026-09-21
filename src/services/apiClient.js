/**
 * Generic API Client helper
 * Handles fetch requests, automatically parses JSON, and handles HTTP errors.
 */

import API_CONFIG from "./apiConfig";

const apiClient = async (endpoint, options = {}) => {
  try {
    const defaultHeaders = {
      Accept: "application/json",
    };

    if (options.body && !(options.body instanceof FormData)) {
      defaultHeaders["Content-Type"] = "application/json";
      // Parse body sang chuỗi JSON nếu nó là Object
      if (typeof options.body === "object") {
        options.body = JSON.stringify(options.body);
      }
    }

    const config = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    };

    const fullUrl = endpoint.startsWith("http")
      ? endpoint
      : `${API_CONFIG.BASE_URL}${endpoint}`;

    const response = await fetch(fullUrl, config);

    const contentType = response.headers.get("content-type");
    let data = null;
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      data = await response.text();
    }

    if (!response.ok) {
      const error = new Error(`HTTP Error: ${response.status}`);
      error.status = response.status;
      error.data = data;
      throw error;
    }

    return data;
  } catch (error) {
    console.error(
      `[API Client Error] ${options.method || "GET"} ${endpoint}:`,
      error,
    );
    throw error;
  }
};

export const get = (url, headers = {}) =>
  apiClient(url, { method: "GET", headers });
export const post = (url, body, headers = {}) =>
  apiClient(url, { method: "POST", body, headers });
export const put = (url, body, headers = {}) =>
  apiClient(url, { method: "PUT", body, headers });
export const del = (url, headers = {}) =>
  apiClient(url, { method: "DELETE", headers });

export default apiClient;
