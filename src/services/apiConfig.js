 
const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_URL || "https://localhost:44322/api",

  TIMEOUT: 10000,

  ENDPOINTS: {
    DOWNLOAD: "/download",
    USER: "/user",
  },
};

export default API_CONFIG;
