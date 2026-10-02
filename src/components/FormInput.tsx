"use client";
import { useState } from "react";
import ButtonDownload from "./ButtonDownload";
import "./css/FormInput.css";
import Error from "./Error";
import urlValidator from "../utils/urlValidator";
import soundCloudApi from "../services/soundCloudApi";

interface DownloadStatus {
  status: string;
  title: string;
  message: string;
  errorCode?: string;
  progress?: number;
  stage?: string;
}

interface FormInputProps {
  onStatusChange: (status: "start" | "success" | "error", data?: any) => void;
}

function FormInput({ onStatusChange }: FormInputProps) {
  const [url, setUrl] = useState("");
  const [validationError, setValidationError] = useState("");
  const [downloadStatus, setDownloadStatus] = useState<DownloadStatus | null>(null);

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setValidationError("");

    // 1. Validation: Empty URL check
    if (urlValidator().isEmpty(url)) {
      const errMsg = "Please enter a SoundCloud URL before downloading.";
      setValidationError(errMsg);
      setDownloadStatus({
        status: "error",
        title: "URL Validation Error",
        message: errMsg,
        errorCode: "ERR_EMPTY_URL",
      });
      return;
    }

    // 2. Validation url valid
    if (!urlValidator().isValid(url)) {
      const errMsg = "Please enter a valid SoundCloud URL before downloading!";
      setValidationError(errMsg);

      setDownloadStatus({
        status: "error",
        title: "URL Validation Error",
        message: errMsg,
        errorCode: "ERR_INVALID_URL",
      });
      return;
    }

    onStatusChange("start");

    // Bắt đầu gọi API
    setDownloadStatus({
      status: "loading",
      title: "Processing",
      message: "Starting download...",
    });

    try {
      const track = await soundCloudApi.downloadTrack(url, (statusRes: any) => {
        // Callback cập nhật tiến trình
        setDownloadStatus({
          status: "loading",
          title: "Processing",
          message: `Status: ${statusRes.status}...`,
          progress: statusRes.progress || 0,
        });
      }) as any;

      // Format lại dữ liệu theo UI Component Track
      const formatDuration = (ms: number) => {
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      };

      const formattedTrack = {
        id: new Date().getTime(), // ID ngẫu nhiên duy nhất
        title: track.title,
        artist: "SoundCloud Artist",
        duration: formatDuration(track.duration),
        image: track.artworkUrl || track.avtFullSize,
        urlDownload: track.urlDownload
      };

      setDownloadStatus(null); // Tắt form loading
      onStatusChange("success", formattedTrack); // Truyền dữ liệu thật ra ngoài
    } catch (error: any) {
      setDownloadStatus({
        status: "error",
        title: "API Error",
        message: error?.message || "Failed to start download process",
      });
      // Báo lỗi cho component cha nếu cần
      // onStatusChange("error");
    }
  };

  const handleCloseStatus = () => {
    setDownloadStatus(null);
  };

  const handleRetry = () => {
    handleSubmit();
  };

  return (
    <div className="form-input-container">
      <form className="form-url flex" onSubmit={handleSubmit}>
        <div className="input-field-wrapper flex">
          <input
            type="text"
            className={`md:w-12/12 inpItem ${validationError ? "is-invalid" : ""}`}
            placeholder="Paste SoundCloud URL here..."
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              if (validationError) setValidationError("");
              if (downloadStatus && downloadStatus.status === "error") {
                setDownloadStatus(null);
              }
            }}
          />
        </div>
        <ButtonDownload text="Download" size="md" type="submit" />
      </form>

      {/* Render Error Card or Download Process status */}
      {downloadStatus && (
        <Error
          status={downloadStatus.status}
          title={downloadStatus.title}
          message={downloadStatus.message}
          errorCode={downloadStatus.errorCode}
          progress={downloadStatus.progress}
          stage={downloadStatus.stage}
          onRetry={handleRetry}
          onClose={handleCloseStatus}
        />
      )}
    </div>
  );
}

export default FormInput;
