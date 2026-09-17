import './css/ButtonDownload.css';

function ButtonDownload({
  text = "Download",
  children,
  onClick,
  type = "button",
  disabled = false,
  isLoading = false,
  variant = "primary",
  size = "md",
  className = ""
}) {
  const content = children || text;

  return (
    <button
      type={type}
      className={`btn-download btn-download--${variant} btn-download--${size} ${isLoading ? 'is-loading' : ''} ${className}`.trim()}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <span className="btn-spinner" aria-hidden="true" />
      ) : (
        <svg
          className="btn-download-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      )}
      <span className="btn-download-text">{content}</span>
    </button>
  );
}

export default ButtonDownload;