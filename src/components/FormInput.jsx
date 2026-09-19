import { useState } from "react";
import ButtonDownload from "./ButtonDownload.jsx";
import "./css/FormInput.css";
import Error from "./Error.jsx";

function FormInput({ onStartDownload,handleStartSubmitForm }) {
  const [url, setUrl] = useState("");
  const [validationError, setValidationError] = useState("");
  const [downloadStatus, setDownloadStatus] = useState(null);

  // SoundCloud URL Validation Helper
  const isValidSoundCloudUrl = (inputUrl) => {
    // Regex matching soundcloud.com or on.soundcloud.com track or playlist links
    const scRegex = /^(https?:\/\/)?(www\.)?(m\.)?(soundcloud\.com|on\.soundcloud\.com)\/[a-zA-Z0-9-_]+\/[a-zA-Z0-9-_]+.*$/i;
    return scRegex.test(inputUrl.trim());
  };

  const handleSubmit = (e) => {
    handleStartSubmitForm(url, "start");
    if (e) e.preventDefault();
    setValidationError("");
    
    const trimmedUrl = url.trim();

    // 1. Validation: Empty URL check
    if (!trimmedUrl) {
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

    // 2. Validation: Invalid SoundCloud URL check
    if (!isValidSoundCloudUrl(trimmedUrl)) {
      const errMsg = "Invalid SoundCloud URL. Please enter a valid SoundCloud link (e.g. https://soundcloud.com/artist/track).";
      setValidationError(errMsg);
      setDownloadStatus({
        status: "error",
        title: "Invalid SoundCloud URL",
        message: errMsg,
        errorCode: "ERR_INVALID_SOUNDCLOUD_URL",
      });
      return;
    }

    // 3. Valid URL: Trigger download process
    setValidationError("");
    setDownloadStatus({
      status: "processing",
      progress: 30,
      stage: "Connecting & validating SoundCloud track stream...",
    });

    try {
      if (onStartDownload) {
        onStartDownload(trimmedUrl);
        handleStartSubmitForm(url, "susscess");
        // Tắt bảng Error/Processing ngay khi submit thành công
        setDownloadStatus(null);
      } else {
        // Simulated process steps with live progress
        setTimeout(() => {
          setDownloadStatus({
            status: "processing",
            progress: 75,
            stage: "Converting audio stream to 320kbps High-Quality MP3...",
          });
        }, 1400);

        setTimeout(() => {
          setDownloadStatus({
            status: "success",
            progress: 100,
            title: "Download Ready!",
            message: "Track converted successfully. Your high-quality MP3 file download is starting.",
          });
        }, 3000);
      }
    } catch (unhandledErr) {
      // Catch any unhandled runtime error
      setDownloadStatus({
        status: "error",
        title: "Unhandled Error Occurred",
        message: unhandledErr?.message || "An unhandled system exception occurred during the download process.",
        errorCode: "ERR_UNHANDLED_EXCEPTION",
      });
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
      <form className="form-url" onSubmit={handleSubmit}>
        <div className="input-field-wrapper">
          <input
            type="text"
            className={`inpItem ${validationError ? "is-invalid" : ""}`}
            placeholder="Paste SoundCloud URL here..."
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              if (validationError) setValidationError("");
              // Tắt bảng Error nếu người dùng bắt đầu nhập lại
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
