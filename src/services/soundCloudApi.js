import { get } from "./apiClient";
import API_CONFIG from "./apiConfig";

async function getIdJob(url) {
  const encodedUrl = encodeURIComponent(url);
  return await get(
    `${API_CONFIG.ENDPOINTS.DOWNLOAD}?url=${encodedUrl}&client=123`,
    {
      accept: "*/*",
    },
  );
}

const soundCloudApi = () => ({
  getIdJob: (url) => getIdJob(url),
});

export default soundCloudApi;


