import { useState } from "react";
import ButtonDownload from "./ButtonDownload.jsx";
import "./css/FormInput.css";
import Error from "./Error.jsx";
import urlValidator  from "../utils/urlValidator.js";

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

    // 2. Validation: Invalid SoundCloud URL check
    if (!urlValidator().isValid(trimmedUrl)) {
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
