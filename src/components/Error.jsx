import './css/Error.css';

function Error({
  status = "error",
  title = "An Unhandled Error Occurred",
  message = "Something went wrong. Please try again.",
  errorCode,
  progress,
  stage,
  onRetry,
  onClose
}) {
  const getIcon = () => {
    if (status === "success") {
      return (
        <svg className="error-icon status-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      );
    }
    if (status === "processing") {
      return (
        <svg className="error-icon status-processing" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }
    return (
      <svg className="error-icon status-error" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="8" x2="12" y2="12" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="16" x2="12.01" y2="16" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  };

  return (
    <div className={`error-container status-${status}`}>
      {onClose && (
        <button className="btn-error-close-icon" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      <div className="error-header">
        {getIcon()}
        <h3 className="error-title">{title}</h3>
      </div>

      <p className="error-message">{message}</p>

      {errorCode && <div className="error-code">Code: {errorCode}</div>}

      {status === "processing" && progress !== undefined && (
        <>
          <div className="error-progress-container">
            <div className="error-progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
          {stage && <div className="error-stage">{stage}</div>}
        </>
      )}

      <div className="error-actions">
        {onRetry && <button className="btn-error-retry" onClick={onRetry}>Retry</button>}
        {onClose && !onRetry && <button className="btn-error-close" onClick={onClose}>Close</button>}
      </div>
    </div>
  );
}

export default Error;