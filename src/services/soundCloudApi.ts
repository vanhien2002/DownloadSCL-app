import { get } from "./apiClient";
import API_CONFIG from "./apiConfig";

// 1. Gửi yêu cầu khởi tạo tiến trình tải nhạc (lấy jobId)
async function getIdJob(url: string): Promise<any> {
  const encodedUrl = encodeURIComponent(url);
  return await get(
    `${API_CONFIG.ENDPOINTS.DOWNLOAD}?url=${encodedUrl}&client=frontend`,
    {
      accept: "*/*",
    },
  );
}

// 2. Gọi API để kiểm tra trạng thái tiến trình bằng jobId
async function getJobStatus(jobId: string): Promise<any> {
  return await get(`${API_CONFIG.ENDPOINTS.DOWNLOAD}/${jobId}`, {
    accept: "*/*",
  });
}

// 3. Tự động xử lý toàn bộ quá trình tải và polling
async function downloadTrack(url: string, onProgress?: (status: any) => void): Promise<any> {
  const initRes = await getIdJob(url);
  const jobId = initRes.jobId;

  return new Promise((resolve, reject) => {
    const poll = async () => {
      try {
        const statusRes = await getJobStatus(jobId);
        
        if (statusRes.status === "Completed") {
          const track = statusRes.trackModel?.[0];
          if (track?.urlDownload) {
            resolve(track);
          } else {
            reject(new Error("Download link not found"));
          }
        } else if (statusRes.status === "Failed" || statusRes.errorMessage) {
          reject(new Error(statusRes.errorMessage || "An error occurred during download."));
        } else {
          if (onProgress) {
            onProgress(statusRes);
          }
          setTimeout(poll, 1000);
        }
      } catch (err) {
        reject(err);
      }
    };

    setTimeout(poll, 1000);
  });
}

const soundCloudApi = {
  getIdJob,
  getJobStatus,
  downloadTrack,
};

export default soundCloudApi;
